import React, { useState } from 'react'
import Sidebar from '../Layouts/Sidebar'
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { AppContext } from '../Contexts/AppContext';
// import MicroblockList from '../Components/MicroblockList';
import DnD from '../Components/DnD';
import BoardDesigner from '../Components/BoardDesigner';
import Warning from '../Components/Warning';
import { Button, Card } from 'react-bootstrap';
// import ElectronicConcept from '../Assets/ElectronicConcept/concept.jpg'

const BoardDesignerPage = () => {

    const loginData = localStorage.getItem('loginData')

    const { setIsUserClickedtheDoEngineeringButton, 
        setIsModelLoaded, 
        isUserClickedtheDoEngineeringButton, 
        isModelLoaded } = useContext(AppContext);

  return (

    <React.Fragment>

        {
            !loginData ? 
            (   
                <BoardDesigner 
                isModelLoaded={isModelLoaded}
                setIsModelLoaded = {setIsModelLoaded}
                isUserClickedtheDoEngineeringButton={isUserClickedtheDoEngineeringButton}
                setIsUserClickedtheDoEngineeringButton= {setIsUserClickedtheDoEngineeringButton}>
                </BoardDesigner>
                
            ) 
            : 
            (   <Warning>

                </Warning>)
            
        }

    </React.Fragment>
  )
}

export default BoardDesignerPage