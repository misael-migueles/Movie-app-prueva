import { useEffect, useState } from "react";
import styles from "./CSS/MovieDetail.module.css"
import { useParams } from "react-router-dom";
import {get} from "../URL/https"
import  {Spiner}  from "./Spiner";
// import Genero from "./Genero";



 export function MovieDetail(){
    const {Id} = useParams();
    const[movie, setMovie]= useState(null);
    const[loading, setLoading]= useState(true)

    useEffect(()=>{
        setLoading(true);
        get(`/movie/${Id}`)
           .then((data)=> {
            setMovie(data)
            setLoading(false)
           })
   },[Id])
    
    if(loading){
        return <Spiner/>}
   
    const imagePoster="http://image.tmdb.org/t/p/w500" + movie.poster_path;
    return(
        <div className={`${styles.Contenedor}`}>
           
           <img className={styles.detailIMG} src={imagePoster} alt={movie.title}/>
           <div className={`${styles.contenedor2} ${styles.textDetail}`}>
            <p className={styles.ax}><strong>Title: </strong>{movie.title}</p>
            <p>
            <strong>Gender:</strong>{" "}   
            {movie.genres.map(call => call.name).join(", ")}
            </p>
            <p><strong>Description: </strong>{movie.overview}</p>
            {/* <Genero/> */}
           </div>
        </div>
    )
 }

 