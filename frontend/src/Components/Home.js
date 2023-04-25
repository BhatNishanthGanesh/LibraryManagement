import React from "react";
import LibraryImage from "../images/Library.jpg";


import "../Css/Home.css";

const Home = () => {
  return (
    <>
      <div className="home-container my-5 text-black">
        <div className="row">
          <div className="col-md-8 mx-auto text-center">
            <h1 style={{ marginTop:"40px" ,fontSize: "48px", fontWeight: "bold" }}>Welcome to our Library Management</h1>
            <img src={LibraryImage} alt="Inventory" className="img-fluid my-5" style={{height:"200px"}} />
            <h3 style={{color:"red"}}> Our library management system is designed to make it easy for you to find and borrow books. With our user-friendly interface and extensive collection of books, you'll be sure to find something to read in no time.</h3>
          </div>
        </div>
        <div className="row" style={{ display: "flex", justifyContent: "space-between",paddingLeft:"18em" }}>
  {/* <div className="col-md-6">
    <img src={image1} alt="Image 1" className="img-fluid my-5 rounded-circle" style={{ width: "100px", height: "100px" }} />
  </div>
  <div className="col-md-6">
    <img src={image2} alt="Image 2" className="img-fluid my-5 rounded-circle" style={{ width: "100px", height: "100px" }} />
  </div> */}
</div>


      </div>
    </>
  );
};

export default Home;