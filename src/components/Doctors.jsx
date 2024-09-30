import React from "react";
import {doctorData} from "../helpers/data"

const Doctors = () => {
    /* console.log(doctorData); */
  return (
    <div>
      <h3 className="display-6 mb-3" style={{ color: "rgb(18, 189, 29)" }}>
        OUR DOCTORS
      </h3>

      
      
      {
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
    }
      

    
    </div>
  );
};

export default Doctors;
