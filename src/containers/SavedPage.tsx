// import { useEffect, useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import styled from "styled-components";
// import { typography, containers } from "../styles";
// import { Card } from "../components";
// import { ErrorType, MediaType, PersistanceType } from "../models";

// const count = 5;
// const STORAGE_KEY = "starstagram_saved"
// const API_KEY = process.env.REACT_APP_API_KEY;
// const make_nasa_api = (date: string) => `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`

// export const SavedPage = () => {
//     const [error, setError] = useState<ErrorType>();
//     const [noneSaved, setNoneSaved] = useState(false);
//     const [items, setItems] = useState<MediaType[]>([]);
//     const [visibleItems, setVisibleItems] = useState<MediaType[]>([]);
//     const [hasMore, setHasMore] = useState(false);

//     // On loading
//     useEffect(() => {
//         const localStorage = window.localStorage.getItem(STORAGE_KEY);
//         if (localStorage) {
//             const saved: string[] = JSON.parse(localStorage);
//             if (saved === undefined || saved.length === 0) {
//                 setNoneSaved(true);
//             } else {
//                 // fetch liked media fron nasa api
//                 const temp: MediaType[] = []
//                 for (var i = 0; i < saved.length; i++) {
//                     fetch(make_nasa_api(saved[i]))
//                         .then(res => res.json())
//                         .then(
//                         (result) => {
//                             temp.push(result)
//                         },
//                         (error: any) => setError(error)
//                     )
//                 }
//                 setItems(temp);
//             }
//         } else {
//             setNoneSaved(true);
//         }
//     }, [])
    
//     // On hitting scroll bottom
//     const fetchMoreItems = () => {
//         const items_n = items.length;
//         const visible_n = visibleItems.length;
//         if (visible_n + count < items_n) {
//             setVisibleItems(items.slice(0, visible_n + count));
//             setHasMore(true);
//         } else if (visible_n + count >= items_n) {
//             setVisibleItems(items);
//             setHasMore(false);
//         }
//     }
    
//     if (error) {
//       return <div>Error: Something went wrong, {String(error.msg)}</div>;
//     } else if (noneSaved) {
//         return(
//             <h2>No Liked Photos...</h2>
//         )
//     } else {
//       return (
//         <>
//             <InfiniteScroll
//                 dataLength={visibleItems.length}
//                 next={fetchMoreItems}
//                 hasMore={hasMore}
//                 loader={<h2>Loading...</h2>}
//             >
//                 {visibleItems.map(item => {
//                   return(
//                     <Card key={item.date}
//                       {...item}
//                     />
//                   )
//                 })}
//             </InfiniteScroll>
//         </>
//       );
//     }
// };
export {}