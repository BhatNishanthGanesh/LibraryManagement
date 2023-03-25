import React from "react";
import inventoryImage from "../images/IM.jpg";
import "../Css/Home.css";

const Home = () => {
  return (
    <>
      <div className="home-container my-5 text-black">
        <div className="row">
          <div className="col-md-8 mx-auto text-center">
            <center>
            <img src={inventoryImage} alt="Inventory" className="img-fluid my-5" style={{ opacity: "0" }} />
            <h1 style={{ marginTop: "20px", fontSize: "48px", fontWeight: "bold" }}>Welcome to Inventory Management</h1>
            </center>
              
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Home;
