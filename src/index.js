import React from 'react';

import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBarComponent from './component/navbar/navbar';
import Footer from './component/footer/footer';
import login from './component/admin/login';


const Routing = () => {
  return(
    <>
      <NavBarComponent/>
      <div className='mainContainer'>
      <div className='paddingDiv'></div>
      <App></App>
      </div>
      <Footer></Footer>
     
    </>
  )

}

const root = createRoot(document.getElementById('root'));
root.render( <Routing />);

