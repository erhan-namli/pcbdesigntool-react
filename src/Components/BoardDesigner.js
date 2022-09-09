import React, { useState } from 'react'
import Sidebar from '../Layouts/Sidebar'
import DnD from '../Components/DnD';
import { Button, Card } from 'react-bootstrap';
import { AppContext } from '../Contexts/AppContext';
import { useContext } from 'react';



const BoardDesigner = ({ isModelLoaded, setIsModelLoaded, isUserClickedtheDoEngineeringButton, setIsUserClickedtheDoEngineeringButton}) => {

  return (
    <div>

<div>

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

<textarea></textarea>

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

      <textarea></textarea>

  </div>                                  

</div>

{/* Additional Functions*/}
<div className="col m-4">

  <Button onClick={() => {setIsUserClickedtheDoEngineeringButton(true)}}> DO ENGINEERING  {`${isUserClickedtheDoEngineeringButton}`} </Button>

</div>

</div>

</div>

</div>

</div>

</div>


</div>
      
</div>
  )
}

export default BoardDesigner