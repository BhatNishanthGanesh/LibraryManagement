import React from "react";
import inventoryImage from "../images/IM.jpg";
import "../Css/Home.css";

const Home = () => {
  return (
    <>
      <div className="home-container my-5 text-black">
        <div className="row">
          <div className="col-md-8 mx-auto text-center">
            <h1 style={{ marginTop: "20px", fontSize: "48px", fontWeight: "bold" }}>Welcome to Inventory Management</h1>
            <img src={inventoryImage} alt="Inventory" className="img-fluid my-5" style={{ opacity: "0" }} />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Home;
