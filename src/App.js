import React, { useState } from 'react';
import {BrowserRouter,  Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage';
import TestPage from './Pages/TestPage';
import BoardDesignerPage from './Pages/BoardDesignerPage'
import LightNavbar from './Layouts/LightNavbar';
import ThreeDViewPage from './Pages/ThreeDViewPage'
import { AppContext } from './Contexts/AppContext';
// import Footer from './Layouts/Footer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

function App() {
  
  const [isUserClickedtheDoEngineeringButton, setIsUserClickedtheDoEngineeringButton] = useState(false);
  const [isModelLoaded, setIsModelLoaded] = useState(false);


  return (
    <React.Fragment> 
      <AppContext.Provider value={{ setIsUserClickedtheDoEngineeringButton, isUserClickedtheDoEngineeringButton, isModelLoaded, setIsModelLoaded }} >

        <BrowserRouter>
          <LightNavbar />

            <Routes>

              <Route path='/home' element={<HomePage/>}/>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/designer' element={<BoardDesignerPage/>}/>
              <Route path='/login' element={<LoginPage/>}/>
              <Route path='/test' element={<TestPage/>}/>
              <Route path='/threedview' element={<ThreeDViewPage/>}/>

            {/*  some text */}
            
            </Routes>

          {/* <Footer /> */}
        </BrowserRouter>
        </AppContext.Provider>
    </React.Fragment>
  );
}

export default App;
