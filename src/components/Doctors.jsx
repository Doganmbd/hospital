import React from "react";
import {doctorData} from "../helpers/data"
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";


const Doctors = () => {

    /* console.log(doctorData); */
  return (
    <div>
            
      <h3 className="display-6 mb-3" style={{ color: "rgb(18, 189, 29)" }}>
        OUR DOCTORS
      </h3>

      
      
     {/*  {
      doctorData.map((doctor)=> {
      const {id,name,dep,img } = doctor;
      return(
        <div>
             <h2>{name}</h2>
             <h3>{dep}</h3> 
             <h4>{id}</h4>
             <img src={img} alt="yok" />

             
        </div>
     

      );
    })
    } */}


    {
    doctorData.map(({id,name,dep,img})=>{
      return (
        <Col  xs={6} sm={4} lg={3} key={id}>
        <h1>{id}</h1>
        <Image className="img-thumbnail doctor-img w-100" src={img} roundedCircle alt={name}/>
        <h5>{name}</h5>
        <p>{dep} </p>
        </Col>
      )
    }
  
  )
    }
      

    
    </div>
  );
};

export default Doctors;
