import React from 'react'
import { useState } from "react";
import Homes from './Home';
import styles from "./Login.module.css";
function Login() {
    const initState = {
        username:"",
        password:""
    }

    const [loginData, setLoginData] = useState(initState);
    const [isAuth, setIsAuth] = useState(false);

    const handleChange = (e) =>
    {
        const { name, value } = e.target

        setLoginData({
            ...loginData,
            [name]: value 
        })
    }
    
    const handleLogin = () =>
    {
        const { username, password } = loginData;
        if (username == "admin" && password == "admin")
        {
            setIsAuth(true)
        }
        else
        {
            alert("Enter valid credentials")
        }
    }
    if (isAuth)
    {
      
        return <Homes />
        console.log("In Home");
        }    
    return (
        <div>
            <h1 className={styles.heading}>Login Page</h1>
            <div className={styles.box}>
            <input type="text" placeholder="Enter Username" name="username" onChange={handleChange} />
            <input type="password" placeholder="Enter password" name="password" onChange={handleChange} />
                <button onClick={handleLogin}>Login</button>
                  </div>
        </div>
    )
}

export default Login
