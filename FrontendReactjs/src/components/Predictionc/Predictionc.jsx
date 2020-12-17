import React , {useState,useEffect } from 'react';
import {Line , Bar } from 'react-chartjs-2';


import styles from './Predictionc.module.css';

const Predictionc = () => {
    const[predictiondata , setpredictiondata]= useState([]);

useEffect(()=>{
    fetch("http://127.0.0.1:5000/prediction").then(response=>
    response.json().then( data =>
         { setpredictiondata(data.result);
    })
    );
},[]

);
const dataa = predictiondata.map((predictiondata) => ({Actual_Data : predictiondata.Actual,
    Predicted_Data : predictiondata.Predicted,
    
    }));


const lineChart = (
    predictiondata.length
     ?( <Line data ={{
         labels :dataa.map(({Actual_Data})=> Actual_Data)
         ,
         datasets : [{
             data : dataa.map(({Predicted_Data})=> Predicted_Data),
             label:'Predicted',
             borderColor:'DarkCyan',
            backgroundColor:'rgba(0,139,139,0.5)',
             fill: true,
         },
         ],
         
 }
 }
        />) : null
 );
 
 return (
         <div className={styles.container}>
             {lineChart}
         </div>
     )

 

 }
export default Predictionc;