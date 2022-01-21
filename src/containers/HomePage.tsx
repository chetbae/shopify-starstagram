import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { containers } from "../styles";
import { Card } from "../components";
import { ErrorType, MediaType } from "../models";

const count = 5;
const API_KEY = process.env.REACT_APP_API_KEY;
const nasa_api = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=${count}`

export const HomePage = () => {
    const [error, setError] = useState<ErrorType>();
    const [items, setItems] = useState<MediaType[]>([]);

    // On loading
    useEffect(() => {
      fetch(nasa_api)
        .then(res => res.json())
        .then(
          (result) => setItems(result),
          (error: any) => setError(error)
        )
    }, [])
    
    // On hitting scroll bottom
    const fetchMoreItems = () => {
        fetch(nasa_api)
        .then(res => res.json())
        .then(
          (result: MediaType[]) => setItems(items.concat(result)), 
          (error: ErrorType) => setError(error)
        )
    }
    
    if (error) {
      return <div>Error: Somthing went wrong, {error.msg}</div>;
    } else {
      return (
          <containers.ContentContainer>
            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreItems}
                hasMore={true}
                loader={<h2>Loading...</h2>}
            >
                {items.map(item => {
                  return(
                    <Card key={item.date}
                      {...item}
                    />
                  )
                })}
            </InfiniteScroll>
          </containers.ContentContainer>
      );
    }
};