import React, { Component } from 'react';

import App from './App';
import Prediction from'./Prediction';
import Clustering from './Clustering';
import NavBar from './Navbar';

import { 
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch 
} from 'react-router-dom'; 


class Routing extends React.Component{ 
    render() { 
      return ( 
         <Router> 
            <NavBar/>
              <Switch> 
                <Route exact path='/' component={App}></Route> 
                <Route exact path='/Prediction' component={Prediction}></Route> 
                <Route exact path='/Clustering' component={Clustering}></Route> 
              </Switch> 
            
         </Router> 
     ); 
    } 
  } 
    
  export default Routing; 