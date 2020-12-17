import React from 'react';
import styles from './App.module.css';
import Clusteringt from './components/Clusteringt/Clusteringt';
class Clustering extends React.Component {

    

    render(){
    
    return(
        <div className={styles.container}>
        <br></br>
        <p><big><b>Pandémie de Covid-19 par pays et territoire avec leur Classification</b></big></p>
        <br></br>
        <br></br>
        < Clusteringt/>
    </div>
) 

}

}
export default Clustering;