import React from 'react';

import{Cards , Charts ,Country } from './components';
import { fetchData } from './api';
import styles from './App.module.css';

import cimage from './image/image.png';



class App extends React.Component {


    state = {
        data: {},
        country:'',
    } 
    async componentDidMount() {
        const fetcheddata = await fetchData();
    
        this.setState({ data : fetcheddata});
      }
    
    
    
      render(){
        const { data }= this.state;
        return(
            <div className={styles.container}> 
               <img className={styles.image} src={cimage} alt= "covid-19" />
               <br></br>
        <p><big><big><big><b>Pandémie de Covid-19</b></big></big></big></p>
        <br></br>
        <br></br>
               <Cards data ={data} />
               
               <Charts />
              
                
            </div>
        )
    }
}
export default App;
