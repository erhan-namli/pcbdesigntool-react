import React from 'react';
import {BrowserRouter,  Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage';
import BoardDesignerPage from './Pages/BoardDesignerPage'
import LightNavbar from './Layouts/LightNavbar';
import Footer from './Layouts/Footer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'



function App() {
  return (
    <React.Fragment className="App"> 

        <BrowserRouter>
          <LightNavbar />

            <Routes>

              <Route path='/home' element={<HomePage/>}/>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/designer' element={<BoardDesignerPage/>}/>
              <Route path='/login' element={<LoginPage/>}/>

            {/*  some text */}
            
            </Routes>

          <Footer />
        </BrowserRouter>

    </React.Fragment>
  );
}

export default App;
