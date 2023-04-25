import React from "react";
import { Link } from "react-router-dom";
import LibraryImage from "../images/Library.jpg";
import "../Css/Home.css";

const Home = () => {
  return (
    <>
      
      <div className="home-container my-5 text-black">
        <div className="row">
          <div className="col-md-8 mx-auto text-center">
            <h3 style={{ fontSize: "48px", fontWeight: "bold",color:"red"}}>Sushrutha Library Management</h3>
            <img src={LibraryImage} alt="Library" className="img-fluid my-5" style={{ height: "200px" }} />
            <h3 style={{ color: "red" }}>Managing the books available in library and the ebook at the same time !? Yes manage at same time and easily at that.</h3>
            <Link to="/Insert" className="btn btn-primary btn-lg mt-5 me-3">Add a Book</Link>
            <Link to="/Display" className="btn btn-secondary btn-lg mt-5">View Books</Link>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Home;