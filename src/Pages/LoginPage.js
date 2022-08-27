import React from 'react';
import './LoginPage.css';
import { Link } from "react-router-dom";

import jwt_decode from 'jwt-decode';

import {useEffect} from "react";
import { useState } from 'react';

import GoogleLogin from '@leecheuk/react-google-login';

const LoginPage = () => {

    console.log(process.env.NODE_ENV)

    console.log(process.env.REACT_APP_CLIENT_ID)

    const data = localStorage.getItem('loginData')
    const [loginData, setLoginData] = useState(
      data ? JSON.parse(data) : null
    );
  
    const handleSuccess = async (googleData) => {
      console.log(googleData);
      const res = await fetch('/api/google-auth', {
        method: 'POST',
        body: JSON.stringify({
          token: googleData.tokenId,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await res.json();
      setLoginData(data);
      localStorage.setItem('loginData', JSON.stringify(data));
    }

    const handleFailure = (res ) => {
        alert(JSON.stringify(res));
      }


    // function testGetFunction(e) {
    //     e.preventDefault();

    //     fetch("http://localhost:1337/test").then(response => response.json()).then(data => console.log(data))

    // }



    // ------------------------

    // function handleCallbackResponse(response) {
    //     console.log("BU " + response.credential)

    // var userObject = jwt_decode(response.credential)

    // console.log(userObject)

    // }

    // useEffect(() => {
    //     /* global google */
    //     google.accounts.id.initialize({
    //         client_id: "244496027610-c34d9scktqtfh114hgbh2hsis13dlg52.apps.googleusercontent.com",
    //         callback : handleCallbackResponse
    //     });

    //     google.accounts.id.renderButton(
    //         document.getElementById("signInDiv"),
    //         {theme : "outline", size:"large"}
    //     );
    // }, []);

    // function getRequestTest(e) {
    //     e.preventDefault();

    //     fetch("http://localhost:1337/").then(response => response.json()).then(data => console.log(data))

    // }

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

                                <GoogleLogin
                                    clientId="244496027610-c34d9scktqtfh114hgbh2hsis13dlg52.apps.googleusercontent.com"
                                    buttonText='Sign in with Google'
                                    onSuccess={handleSuccess}
                                    onFailure={handleFailure}
                                    cookiePolicy='single_host_origin'
                                />

{/* <div id="signInDiv">  </div> */}

                            <button  ></button>
                            
                        </div>
                    </form>
                </div>
            </div>

           
        </>
    );
}

export default LoginPage