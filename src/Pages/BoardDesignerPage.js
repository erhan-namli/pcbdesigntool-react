import React from 'react'

// import Header from '../Layouts/LightNavbar'
// import Footer from '../Layouts/Footer'
import Sidebar from '../Layouts/Sidebar'

// import ElectronicConcept from '../Assets/ElectronicConcept/concept.jpg'

const BoardDesigner = () => {
  return (

    <React.Fragment>

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

                    {/* Microblocks List */}
                    <div className="row">

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


    </React.Fragment>
  )
}

export default BoardDesigner