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
//         {data.breathe.quotes.map((quote, i, q, a) => {
//           return (
//             <article key={quote, i}>
//               <h2>{quote.q}</h2>
//               <h3>{quote.a}</h3>
//               <button
//                 onClick={() => {
//                   props.selectQuote(quote);
//                   props.history.push("/edit");
//                 }}
//               >
//                 Edit Quote
//               </button>
//               <button
//                 onClick={() => {
//                   props.deleteQuote(quote);
//                 }}
//               >
//                 Delete Quote
//               </button>
//               <button onClick={(e) => handleClick2(e, quote)}>Add Quote to Favorites</button>
//             </article>
//           );
//         })}
//         <h2>Favorites List</h2>
//         {props.favoritesArr.map((quote, i) => {
//           return (
//             <article className="container" key={i}>
//               <h2>{quote.q}</h2>
//               <h3>{quote.a}</h3>
//               <button onClick={(e) => handleClick(e, quote)}>Remove from Favorites</button>
//             </article>
//           );
//         })}
//       </div>
//     );
//   };
//   const loading = <h1>Loading...</h1>;
//   return data.length !== 0 ? loaded() : loading;
// };

// export default Display;

