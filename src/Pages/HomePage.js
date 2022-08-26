import React from 'react';

// import Header from '../Layouts/LightNavbar'
// import Footer from '../Layouts/Footer'

import './HomePage.css';

import ElectronicConcept from '../Assets/ElectronicConcept/concept.jpg';


const HomePage = () => {
  return (
  
    <React.Fragment>

        {/* <Header></Header> */}
            {/* Main center */}
            <div className="main-frame">

                    <div className="container ">

                         {/* Bootstrap Grid Layout */}
                         {/* Main row */}
                        <div className="row">

                            {/* Left Section */}
                            <div className="col text-center m-4">

                                {/* Logo SVG */}
                                <div className="row">
                                    <h2> PCB Prototyping Tool </h2>
                                    <hr></hr>
                                    <h3> LOGO </h3>
                                    <hr></hr>
                                </div>

                                 {/* Learn More Button */}
                                <div className="row">

                                    <div className="col text-center p-5">
                                    <button className="btn" style={{width:'100%', backgroundColor:'#59E4A7', color:"white"}}> Learn More</button>
                                    </div>
                                </div>
                            </div>

                            {/* Right Section */}
                            <div className="col m-4">

                                {/* Slogan */}
                                <div className="row text-center">

                                    <h2> The Easiest Way to Design Electronics </h2>

                                </div>

                                {/* Description */}
                                <div className="row text-center">

                                    <p>Artificial intelligence-based PCB manufacturing service assists the user in the process of printing and preparing for sale</p>

                                </div>

                                 {/* Vector Image */}
                                <div className="row text-center">

                                    <img style={{width:'100%'}} alt='electronic' src={ElectronicConcept}></img>

                                </div>

                            </div>

                        </div>

                    </div>
            
            </div>

        {/* <Footer></Footer> */}

    </React.Fragment>


  );
}

export default HomePage;