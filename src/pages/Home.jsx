import React from "react";
import Doctors from "../components/Doctors";
import Appointment from "../components/Appointment";

const Home = () => {
  return (
    <div className="text-center mt-2 text-danger">
      <h1>HOSPITAL</h1>
      <Doctors />
      <Appointment />

    </div>
  );
};

export default Home;
