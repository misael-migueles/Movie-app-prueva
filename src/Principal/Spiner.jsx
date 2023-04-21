 import {ImSpinner5} from "react-icons/im"
 import styles from"./CSS/MovieDetail.module.css"

 
 export function Spiner(){
    return (
        <div className={styles.spiner}>
        <ImSpinner5 className={styles.spining} size={70}/>
        </div>
    )
}



