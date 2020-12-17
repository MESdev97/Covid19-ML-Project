import React from 'react';
import styles from './App.module.css';
import Predictionc from './components/Predictionc/Predictionc';
class Prediction extends React.Component {
render(){
    return (
        <div className={styles.container}>
            <br></br>
        <p><big><b>Prédiction des cas confirmés par rapport aux cas actuels</b></big></p>
        <br></br>
        <br></br>
            < Predictionc/>
        </div>


    )
   

}

}
export default Prediction;