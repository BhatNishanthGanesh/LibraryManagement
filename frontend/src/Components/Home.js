import React from "react";
import inventoryImage from "../images/IM.jpg";
import image1 from "../images/1.png";
import image2 from "../images/5.png";
import "../Css/Home.css";

const Home = () => {
  return (
    <>
      <div className="home-container my-5 text-black">
        <div className="row">
          <div className="col-md-8 mx-auto text-center">
            <h1 style={{ marginTop:"40px" ,fontSize: "48px", fontWeight: "bold" }}>Welcome to Inventory Management</h1>
            <img src={inventoryImage} alt="Inventory" className="img-fluid my-5"  />
            <h1>From Pragathi</h1>
          </div>
        </div>
        <div className="row" style={{ display: "flex", justifyContent: "space-between",paddingLeft:"18em" }}>
  <div className="col-md-6">
    <img src={image1} alt="Image 1" className="img-fluid my-5 rounded-circle" style={{ width: "200px", height: "200px" }} />
  </div>
  <div className="col-md-6">
    <img src={image2} alt="Image 2" className="img-fluid my-5 rounded-circle" style={{ width: "200px", height: "200px" }} />
  </div>
</div>


      </div>
    </>
  );
};

export default Home;
