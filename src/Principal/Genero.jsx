// import { useState, useEffect } from "react";
// import styles from "./CSS/NavMovie.module.css"
// import {get} from "../URL/https"

// const Genero =()=>{
//     const[genre, setGenre] = useState({});
    
   

//     useEffect(()=>{
    
//       get(`/genre/movie/list`)
//         .then((data)=> {
//             setGenre(data)
//         })
//             .catch((err) => {
//                window.alert('error');
//             });
//          return setGenre({});
     
//     },[setGenre])
     
// return (
// <div className={styles.Genero} >
// <ul> {genre.map(call => <li>{call.name}</li>)}</ul>
 
// </div>
// )
// }

// export default Genero;