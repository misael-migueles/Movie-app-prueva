import { Form, Link } from "react-router-dom";
import styles from "./CSS/App.module.css"

const Welcome =()=>{
  return (

    <form className={styles.welcome}>
        <h1>Bienvenido a Play Cinema</h1>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username"/>

        <label htmlFor="password">Password:</label>
        <input type="password" name="password"/>
        <button>Login</button>  
        
    </form>
  )

}




export default Welcome;



