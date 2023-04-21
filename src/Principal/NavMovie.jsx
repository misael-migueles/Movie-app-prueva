 import { SearchMovie } from "./SearchMovie";
 import { Link } from "react-router-dom";
 import styles from "./CSS/NavMovie.module.css"
 import logo from "../assets/7124209_menu_icon.svg"
 import {BiCollection} from "react-icons/bi"
 import {BiDesktop} from "react-icons/bi"
 import {BiFilm} from "react-icons/bi"
 import {BiHappyBeaming} from "react-icons/bi"
 import "./CSS/NavH.css"
 import { useState } from "react";


 

 


const NavMovie = () => {
    const [isOpen, setOpen]= useState(false); 
    return(
        <header className={styles.header_}>
         <nav className={styles.contenedor}>
            <div className={`navH ${isOpen && "open"} `}>
            <ul className="ulH">
            <li className="liH"><BiCollection className="i"/>  Generos</li>
            <li className="liH"><BiDesktop className="i"/>  Tv</li>
            <li className="liH"><BiFilm className="i"/>  Series</li>
            <li className="liH"><BiHappyBeaming className="i"/>  Infantiles</li>
            </ul>
            </div>
            <img src={logo} alt="image" className={styles.hamburgesa} onClick={()=>setOpen(!isOpen)}/>
            <SearchMovie/>
            <ul className={styles.ul_link}>    
             <Link  className={styles.link}  to="/"><li className={styles.li_red }>Home</li></Link>
             <Link  className={styles.link}  to="/"><li className={styles.li_link}>Contacto</li></Link>
             <Link  className={styles.link}  to="/"><li className={styles.li_link}>Nosotros</li></Link>
             <Link  className={styles.link}  to="/"><li className={styles.li_link}>Acerca de</li></Link>
             <Link  className={styles.link}  to="/"><li className={styles.li_link}>Salir</li></Link>
             </ul>  
         </nav>
        
        </header> 
            
       
    )
}

export default NavMovie;