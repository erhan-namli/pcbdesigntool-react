import React from 'react'
import { Link } from "react-router-dom";
const Warning = () => {
  return (
    <div>
   
            <div>
            
            <div className='login-box'>

                        <div className='text-center'>

                        <h1>WARNING</h1> 

                        </div>

                        <div className='text-center'>
                            
                                <div className="row">

                                    <p> Please login to see this page </p>

                                </div>
                                <div className='row'>

                                    <Link to='/login' className="text-center color" id="">

                                    Take me
                                        
                                    </Link>

                                </div>
                            
                                {/* <button className='btn' > Yönlendir </button> */}

                        </div>

                    </div>

            </div>

            </div>

  )
}

export default Warning