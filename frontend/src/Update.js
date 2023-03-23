import React from "react";
import Axios from "axios";
import "./Display.css"

function Update() {
  const [posts, setPosts] = React.useState([]);

  // Get data from server on component mount
  React.useEffect(() => {
    Axios.get("http://localhost:3100/IMS").then((response) => {
      setPosts(response.data);
    });
  }, []);

  // Event handler for updating a post
  const handleUpdate = (id) => {
    const newData = {
      Item_Name: "New Item_Name",
      Price: "New Specialty",
      Quantity: "https://example.com/new-Quantity.jpg",
    };

    Axios.put(`http://localhost:3100/IMS/${id}`, newData).then((response) => {
      // Update state with updated post
      const updatedPosts = posts.map((post) =>
        post._id === response.data._id ? response.data : post
      );
      setPosts(updatedPosts);
    });
  };

  return (
    <div className="Border">
      <div className="App">
        <h2 style={{ color: "yellow" }}>
          <em>Best Item_Names are</em>
        </h2>
        <br />
        {posts.map((post) => (
          <center key={post._id}>
            <div className="Border1">
              <br />
              <h5  style={{color:"blue"}}>{post.Quantity}</h5>
              <br />
              <br />
              <h5 style={{ color: "blue" }}>{post.Item_Name}</h5>
              <br />
              <p style={{ color: "orange" }}>{post.Price}</p>
              <button onClick={() => handleUpdate(post._id)}>Update</button>
            </div>
          </center>
        ))}
      </div>
    </div>
  );
}

export default Update;
