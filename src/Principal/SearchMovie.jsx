import styles from "./CSS/NavMovie.module.css"
import {useSearchParams } from "react-router-dom";

  export function SearchMovie(){
  const [searchParams, setSearchParams]=useSearchParams();
  const search = searchParams.get("search");
  const handleSubmit=(event)=>{event.preventDefault()};
  return (
    <form onSubmit={handleSubmit}>
        <div className={styles.contenedorForm}>
           <input type='text'
           className={styles.input_on} 
             value={search ?? ""}
                placeholder="Buscar titulo aquí"
                 aria-label="Search Movie"
                  onChange={(event)=>{
                 const value = event.target.value;
                setSearchParams({search: value})
               }}/>
          </div>
       </form>
    
   );
}
