
import React from 'react';
import {BrowserRouter,  Routes, Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import BoardDesignerPage from './Pages/BoardDesignerPage'

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'


function App() {
  return (
    <React.Fragment className="App"> 

        <BrowserRouter>

            <Routes>

              <Route path='/home' element={<HomePage/>}/>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/designer' element={<BoardDesignerPage/>}/>

            </Routes>
        
        </BrowserRouter>

    </React.Fragment>
  );
}

export default App;
