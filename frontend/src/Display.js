import React from "react";
import Axios from "axios";
import "./Display.css"
function Display(){
    const [posts, setPosts] = React.useState([]);

React.useEffect(() => {
  Axios.get("http://localhost:3100/IMS").then((response) => {
    setPosts(response.data);
  });
}, []);
return(
     <div className="Border">
      <div className="App">
        <h2 style={{color:"yellow"}}><em>Best Item_Names are</em></h2>
        <br/>
  {
  posts.map((post) => (
    <center>
      <div>
        <br/>
        <h5  style={{color:"blue"}}>{post.Quantity}</h5>
    <br/>
    <br/>
      <h5  style={{color:"blue"}}>{post.Item_Name}</h5>
      <br/>
      <p  style={{color:"orange"}}>{post.Price}</p>
    </div>
    </center>
  ))
  }
  </div>
  </div>
);
}
export default Display;