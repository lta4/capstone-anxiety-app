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
//         <form onSubmit={handleSubmit}>
//             {/* <button
//                 type="text"
//                 name="name"
//                 placeholder="Ice Cream Choice"
//                 value={formData.name}
//                 onChange={handleChange}
//             /> */}
//             {/* <button
//                 type="text"
//                 name="flavor"
//                 placeholder="Flavor Choice"
//                 value={formData.flavor}
//                 onChange={handleChange}
//             /> */}
//             <button className="submit" type="submit" value={props.label} />
//         </form>
//     );
// };
        
// export default Form
    