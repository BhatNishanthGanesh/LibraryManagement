import inventoryImage from "../images/1.png";

const About = () =>{
  return (
    <div className="row align-items-center">
      <h2 style={{textAlign:"center"}}>PRAGATHI</h2>
      <div className="col-md-4 mx-auto">
        <img src={inventoryImage} alt="Inventory" className="img-fluid my-5 inventory-img" />
      </div>
      <div className="col-md-8 mx-auto">
        <p className="lead">
          <b style={{ fontSize: "20px" }}>Inventory management is the process of efficiently overseeing the constant flow of units into and out of an existing inventory. This includes controlling inventory levels, ordering new products, and organizing existing inventory so that it can be accessed quickly and easily. Effective inventory management helps businesses keep their products stocked and ready for sale, while minimizing waste and reducing costs.</b>
        </p>
        <p className="lead">
          <b style={{ fontSize: "20px" }}>Our inventory management system provides a centralized platform for managing your inventory. From here, you can track your inventory levels, manage your suppliers, and analyze your sales data to make informed business decisions. Use the links below to navigate to the different areas of our system:</b>
        </p>
      </div>
      <h3 style={{textAlign:"center"}}>Pragathi - Har Disha Mein</h3>
    </div>
  );
}

export default About;
