import React, {useState} from 'react';
import './LoginPage.css';
import { Link } from "react-router-dom";
import { Image, Button, Card } from 'react-bootstrap';
import jwt_decode from 'jwt-decode';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
import {useEffect} from "react";

const LoginPage = () => {

    const data = localStorage.getItem('loginData')
    const [loginData, setLoginData] = useState(
      data ? JSON.parse(data) : null
    );

    const clientId = '244496027610-c34d9scktqtfh114hgbh2hsis13dlg52.apps.googleusercontent.com'

     const handleSuccess = async (googleData) => {
        
        console.log('success:', googleData.tokenId);

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
    };

    const handleFailure = (res) => {
        console.log(JSON.stringify(res));
      }
    
      const handleLogout = () => {
        localStorage.removeItem('loginData')
        setLoginData(null)
      }

    return (
        <>
            <div className="App">
            <div className="login-box">
            {
                loginData ? (
                        <div>
                              <>
                                    <div className='col'>
                                        <Card.Text>
                                        Hey {loginData.name}, you logged in as
                                        | <strong>{loginData.email}</strong>.
                                        <div className='row'>
                                        <Button variant="link" onClick={handleLogout}> Logout </Button>
                                        </div>
                                        </Card.Text>
                                    </div>
                                        {/* TO DO : FIX THE GOOGLE IMAGE PROBLEM */}
                                        {/* <Image src={loginData.picture} alt={loginData.name} roundedCircle /> */} 
                                    </>
                        </div>
                        ) 
                        : 
                        (
                        <div>
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
                        <div className='container'>

                            <div className='row'>

                                    <Link to='/' id="">
                                        Login
                                    </Link>

                            </div>

                            <p>or...</p>

                            <div className='row text-center'>

                                    <GoogleLogin
                                        clientId={clientId}
                                        buttonText='Sign in with Google'
                                        onSuccess={handleSuccess}
                                        onFailure={handleFailure}
                                        cookiePolicy='single_host_origin'
                                    />
                            </div>

                        </div>

                         </form>
                        
                        </div>
                        )
            }
            </div> 
            </div>

        </>
    );
}

export default LoginPage