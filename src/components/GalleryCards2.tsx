// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import gallery from "../temp/gallery";
// import { useInfiniteQuery } from "@tanstack/react-query";
// import fetchData, { getData } from "../temp/fetchGallery";

// export default function GalleryCards() {
//   interface Events {
//     eventID: number;
//     name: string;
//     date: string;
//     description: string;
//     items: {
//       alt: string;
//       src: string;
//     }[];
//   }

//   const events: unknown = gallery;
//   let test = 0;
//   const getData = async ({ pageParam }): Promise<unknown> => {
//     console.log(pageParam);
//     test = pageParam;
//     const fetchedGallery = await fetchData();
//     // const pageSize = 9;
//     // const startIndex = pageParam * pageSize;
//     // const endIndex = startIndex + pageSize;
//     // // console.log(endIndex);
//     // const pageData = fetchedGallery.slice(startIndex, endIndex);

//     // console.log(pageData);

//     // Return the data if needed
//     return fetchedGallery;
//   };

//   const { data, status, error, fetchNextPage } = useInfiniteQuery({
//     queryKey: ["cards"],
//     queryFn: getData,
//     initialPageParam: 9,
//     getNextPageParam: (lastPage) => {
//       // console.log(lastPage);
//       return lastPage;
//     },
//   });
//   // console.log(data?.pages[0]);
//   console.log(test);
//   if (status === "pending") {
//     return <p style={{ color: "white" }}>Loading</p>;
//   }
//   if (status === "error") {
//     return <p style={{ color: "white" }}>error: {error.message}</p>;
//   }

//   return (
//     <div className="gallery-cards">
//       {/* {data?.pages[0].map((event) => (
//         <div>{event.eventID}</div>
//       ))} */}
//       {data?.pages[0].map((event, i) => (
//         <React.Fragment key={event + i}>
//           <Link to={`/events/${event.eventID}`}>
//             <div
//               style={{ backgroundImage: `url(${event.items[1].src})` }}
//               title={event.description}
//             >
//               <p>{event.date}</p>
//               <p>{event.name}</p>
//             </div>
//           </Link>
//         </React.Fragment>
//       ))}
//       <button onClick={() => fetchNextPage()}>next page</button>
//     </div>
//   );
// }
