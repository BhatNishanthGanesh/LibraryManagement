import React from "react";
import inventoryImage from "./images/IM.jpg";

const Home = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8 mx-auto text-center">
            <h1>Welcome to Inventory Management</h1>
            <img src={inventoryImage} alt="Inventory" className="img-fluid my-5" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mx-auto">
            <p className="lead">
              Inventory management is the process of efficiently overseeing the constant flow of units into and out of an existing inventory. This includes controlling inventory levels, ordering new products, and organizing existing inventory so that it can be accessed quickly and easily. Effective inventory management helps businesses keep their products stocked and ready for sale, while minimizing waste and reducing costs.
            </p>
            <p className="lead">
              Our inventory management system provides a centralized platform for managing your inventory. From here, you can track your inventory levels, manage your suppliers, and analyze your sales data to make informed business decisions. Use the links below to navigate to the different areas of our system:
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
