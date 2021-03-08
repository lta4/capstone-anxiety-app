// import React from "react";

// const Form = (props) => {
//     const [formData, setFormData] = React.useState(props.quote);
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         props.handleSubmit(formData);
//         props.history.push("/");
//     };
//     const handleChange = (event) => {
//         setFormData({ ...formData, [event.target.name]: event.target.value });
//     };
//     const handleChange2 = (event) => {
//         setFormData({ ...formData, [event.target.name]: event.target.value })
//     }

//     return (
//         <>
//         <form onSubmit={handleSubmit}>
//              <div className="picks">
//                 <h2 className="desire">Scrumcious Desire
//                     {/* <p className="descriptions">"Served with rasberries, almonds and delectable cherries with a dark chocolate sauce"</p> */}
//                 </h2>
//                 <h2 className="days">Summer Days
//                     {/* <p className="descriptions">"Served with fresh strawberries, kiwi slices and summer blueberries with a rasberry sauce"</p> */}
//                 </h2>
//                 <h2 className="bland">Great n Bland
//                     {/* <p className="descriptions">"Served with bannanas, sea salt with a caramel sauce"</p> */}
//                 </h2>
//             </div>
//             <div>
//                 <h2>Flavors:</h2>
//                     {/* <p className="flavors">Chocolate</p>
//                     <p className="flavors">Strawberry</p>
//                     <p className="flavors">Vanilla</p> */}
//             </div>
//             <input
//                 type="text"
//                 name="name"
//                 placeholder="Ice Cream Choice"
//                 value={formData.name}
//                 onChange={handleChange}
//             />
//             <input
//                 type="text"
//                 name="flavor"
//                 placeholder="Flavor Choice"
//                 value={formData.flavor}
//                 onChange={handleChange}
//             />
//             <input className="submit" type="submit" value={props.label} />
//         </form>
//         </>
//     );
// };
        
// export default Form
    