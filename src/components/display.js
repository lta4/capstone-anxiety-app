// import React from "react";

// const Display = (props) => {

//   const handleClick = (event, data) => {
//     event.preventDefault()
//     props.removeFav(data);
//   };
// const handleClick2 = (event, data) => {
//     event.preventDefault()
//     props.setFavObj(data)
// }

//   const { data } = props;
//   const loaded = () => {
//     return (
//       <div className="container">
//         {data.map((data) => {
//           return (
//             <article key={data._id}>
//               <h2>{quote.q}</h2>
//               <h3>{quote.a}</h3>
//               <button
//                 onClick={() => {
//                   props.selectSong(data);
//                   props.history.push("/edit");
//                 }}
//               >
//                 Edit Song
//               </button>
//               <button
//                 onClick={() => {
//                   props.deleteSong(data);
//                 }}
//               >
//                 Delete Song
//               </button>
//               <button onClick={(e) => handleClick2(e, song)}>Add Song to Favorites</button>
//             </article>
//           );
//         })}
//         <h2>Favorites List</h2>
//         {props.favoritesArr.map((song, index) => {
//           return (
//             <article className="container" key={index}>
//               <h2>{song.title}</h2>
//               <h3>{song.artist}</h3>
//               <h3>{song.time}</h3>
//               <button onClick={(e) => handleClick(e, song)}>Remove from Favorites</button>
//             </article>
//           );
//         })}
//       </div>
//     );
//   };
//   const loading = <h1>Loading...</h1>;
//   return songs.length > 0 ? loaded() : loading;
// };

// export default Display;

// import React from "react";

// const Display = (props) => {
//     console.log("props", props)
//     const {quotes} = props
//     // const {shops} = props

//     const loaded = () => {
//         return (<div style={{textAlign: "center"}}>
//             {quotes.quote.map(quote => {
//                 return (<article key={quote._id}>
//                     <h1>{quote.q}</h1>
//                     <h3>{quote.a}</h3>
//                     <button onClick={() => {
//                         props.selectQuotes(quote)
//                         props.history.push("/edit")
//                     }}>Edit Ice Cream</button>
//                     <button onClick={() => {
//                         props.deleteQuotes(quote)
//                     }}>Delete Ice Cream</button>
//                         <p>Enjoy!</p>
//                 </article>)
//             })}
//         </div>)
//     }

//     const loading = <h1>Loading...</h1>

// return quotes.length !== 0 ? loaded () : loading;
// };

// export default Display