import React from "react";
import inventoryImage from "../images/About.jpg";

const About = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4 mx-auto">
          <img src={inventoryImage} style={{paddingTop:"100px" , width:"1500px"}} alt="Library" className="img-fluid my-5" />
        </div>
        <div className="col-md-8 mx-auto">
          <h2 style={{ paddingBottom:"90px",left:"10em"}}>Library Management</h2>
          <p className="lead">
            <b style={{ fontSize: "20px" }}>Library management is the process of managing and organizing the resources and services of a library to meet the needs of its users. This includes managing library collections, acquiring new materials, cataloging, circulation, and providing access to library resources.</b>
          </p>
          <p className="lead">
            <b style={{ fontSize: "20px" }}>Our library management system provides a comprehensive solution for libraries of all sizes. With our system, you can easily manage your library collections, track circulation and inventory, and provide access to online resources. Our user-friendly interface and advanced features make managing your library a breeze.</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
