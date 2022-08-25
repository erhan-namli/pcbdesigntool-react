import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
    return (
        <>
        <div className="App">
            <div className="login-box">
                <h2>Log-In</h2>
                <form>
                    <div className="user-box">
                        <input type="text" name="" required="" />
                        <label>First Name</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="" required="" />
                        <label>Last Name</label>
                    </div>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        {/* <Link to='/'>
                        Submit</Link> */}
                        <button>Submit</button>
                    </div>
                </form>
            </div>
            </div>
        </>
    );
}

export default LoginPage