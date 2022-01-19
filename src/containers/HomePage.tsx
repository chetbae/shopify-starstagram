import { useEffect, useState } from "react";
import { SavedManager } from '../persistance/savedManager';
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import { typography, containers } from "../styles";
import { Card } from "../components";
import { ErrorType, MediaType, PersistanceType } from "../models";

const count = 5;
const API_KEY = "EV26Y4cjhfSwrMuIQP8xZemSgrQ24TTL6YiCkCN2";
const nasa_api = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=${count}`




export const HomePage = () => {
    const [error, setError] = useState<ErrorType>();
    const [items, setItems] = useState<MediaType[]>([]);
    
    // List of liked APODs along with crud functions
    const savedProp: PersistanceType = SavedManager();
    const { saved, addSaved, removeSaved, checkSaved } = savedProp;

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
        <>
            {saved.toString()}
            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreItems}
                hasMore={true}
                loader={<h2>Loading...</h2>}
            >
                {items.map(item => {
                  return(
                    <>
                      <Card 
                        {...item}
                        likeHandler={addSaved}
                      />
                    </>
                  )
                })}
            </InfiniteScroll>
        </>
      );
    }
};