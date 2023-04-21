import { Link } from "react-router-dom"
import styles from "../Principal/CSS/MovieCard.module.css"

  export function MovieCard({movie}){
    const imagePoster= "http://image.tmdb.org/t/p/w500" + movie.poster_path;
    return(
        <li className={styles.movieCard}>
        <Link to={`/movies/${movie.id}`} className={styles.noneLink}>
         <img className={styles.imagenes} src={imagePoster} alt={movie.title} />
         <div className={styles.title}>{movie.title}</div>
        </Link>
        </li>
        
    )
}


