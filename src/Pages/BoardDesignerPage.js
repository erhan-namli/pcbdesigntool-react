import React from 'react'

// import Header from '../Layouts/LightNavbar'
// import Footer from '../Layouts/Footer'
import Sidebar from '../Layouts/Sidebar'

import { Link } from "react-router-dom";
import MicroblockList from '../Components/MicroblockList';
import DnD from '../Components/DnD';

// import ElectronicConcept from '../Assets/ElectronicConcept/concept.jpg'

const BoardDesigner = () => {

    const loginData = localStorage.getItem('loginData')

  return (

    <React.Fragment>

        {
            loginData ? 
            (<div>

                  {/* <Header></Header> */}

        {/* Advance Settings */}
        <Sidebar></Sidebar>

<div className="main-frame">

<div className="container">

    <div className="row">

        {/* Bootstrap Grid Layout */}

        {/* Board Designer Section */}
        <div className="col text-center m-4">

            {/* Microblocks Header */}
            <div className="row">

                <h2> MICROBLOCKS </h2>

            </div>

            <div className="row">

                    Category

            </div>

            {/* Microblocks List */}
            <div className="row">

                
                {/* <MicroblockList></MicroblockList> */}
                <div style={{overflow: 'auto', maxHeight: 400}}>
                <DnD></DnD>
                </div>

                <iframe src="https://clara.io/embed/2db94aff-44d1-406c-9f85-3085db2c3f19?renderer=webgl" width="800" height="600" allowfullscreen></iframe>
            </div>

        </div>

        {/* Board Designer Area */}
        <div className="col m-4">

            {/* Board Designer Header */}
            <div className="row text-center">

            <h2> BOARD DESIGNER </h2>

            </div>

            {/* Board Designer Canvas */}
            <div className="row text-center">

            

            </div>

            {/* Board Designer Properties&Additional Functional Sections */}
            <div className="row text-center">

                {/* Properties*/}
                <div className="col m-4">

                    {/* Properties Header*/}
                    <div className="row">

                        <h2> Properties </h2>

                    </div>

                    {/* Properties Table*/}
                    <div className="row">

                    </div>                                  

                </div>

                {/* Additional Functions*/}
                <div className="col m-4">


                </div>

            </div>

        </div>

    </div>

</div>

</div>


            </div>) 
            : 
            (<div>
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

            </div>)
        }


      


    </React.Fragment>
  )
}

export default BoardDesigner