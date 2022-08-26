import React from 'react';
import './LoginPage.css';
import { Link } from "react-router-dom";

const LoginPage = () => {

    

    return (
        <>
            <div className="App">
                <div className="login-box">
                    <h2>Login</h2>
                    <form>
                        <div className="user-box">
                            <input type="text" name="" required="" />
                            <label>Username</label>
                        </div>
                        <div className="user-box">
                            <input type="password" name="" required=""  />
                            <label>Password</label>
                        </div>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <Link to='/' id="">
                                Submit</Link>
                            
                        </div>
                    </form>
                </div>
            </div>

           
        </>
    );
}

export default LoginPage