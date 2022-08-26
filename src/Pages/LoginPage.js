import React from 'react';
import './LoginPage.css';
import { Link } from "react-router-dom";

import jwt_decode from 'jwt-decode';

import {useEffect} from "react";

const LoginPage = () => {

    function handleCallbackResponse(response) {
        console.log("BU " + response.crediental)

    var userObject = jwt_decode(response.crediental)

    console.log(userObject)
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "244496027610-c34d9scktqtfh114hgbh2hsis13dlg52.apps.googleusercontent.com",
            callback : handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme : "outline", size:"large"}
        );
    }, []);

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

                                <div id="signInDiv">  </div>
                            
                        </div>
                    </form>
                </div>
            </div>

           
        </>
    );
}

export default LoginPage