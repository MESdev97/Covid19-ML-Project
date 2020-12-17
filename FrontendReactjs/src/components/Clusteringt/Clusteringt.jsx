import React , {useState,useEffect } from 'react';
import styles from './Clusteringt.module.css';
import * as ReactBootStrap from 'react-bootstrap';

const Clusteringt = () =>{
    
    const[clusterdata , setclusterdata]= useState([]);

    useEffect(()=>{
        fetch("http://127.0.0.1:5000/clustering").then(response=>
        response.json().then( data =>
             { setclusterdata(data.result);
        })
        );
    },[]
    
    );
    const dataa = clusterdata.map((clusterdata) => ({Country : clusterdata.country,
        Cluster :clusterdata.cluster,
        Confirmed :clusterdata.cases,
        Deaths :clusterdata.deaths,
        Recovered :clusterdata.recovered,
        
        }));
      
        const rendertable= (dataa,index)=>{

            return( 
            <tr key={index}>
              <td>{dataa.Country}</td>
              <td  >{dataa.Cluster}</td>
              <td>{dataa.Confirmed}</td>
              <td>{dataa.Deaths}</td>
              <td>{dataa.Recovered}</td>

             </tr>)
             
        }

        return(
            <div className={styles.container}>
                  <ReactBootStrap.Table striped bordered hover >
  <thead>
    <tr>
     
      <th>Country</th>
      <th>Cluster</th>
      <th>Confirmed</th>
      <th>Deaths</th>
      <th>Recovered</th>
    </tr>
  </thead>
  <tbody>
    {dataa.map(rendertable)}
  </tbody>
</ReactBootStrap.Table>


            </div>


        )







}
export default Clusteringt ;