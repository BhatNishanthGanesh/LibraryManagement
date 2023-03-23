import React, { useState, useEffect } from "react";
import Axios from "axios";

function Update() {
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState({ _id: "", Item_Name: "", Price: "", Quantity: "" });

  useEffect(() => {
    Axios.get("http://localhost:3100/IMS").then((response) => {
      setData(response.data);
    });
  }, []);

  const changeHandler = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    setUpdateData({ ...updateData, [name]: val });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    Axios.put(`http://localhost:3100/IMS/${updateData._id}`, { data: updateData }).then((response) => {
      alert(response.data);
      setUpdateData({ _id: "", Item_Name: "", Price: "", Quantity: "" });
      window.location.reload();
    });
  };

  const displayData = () => {
    return data.map((item) => {
      return (
        <tr key={item._id}>
          <td>{item.Item_Name}</td>
          <td>{item.Price}</td>
          <td>{item.Quantity}</td>
          <td>
            <button onClick={() => setUpdateData(item)}>Update</button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="App">
      <h1>Update InventoryMS</h1>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>{displayData()}</tbody>
      </table>
      <br />
      {updateData._id && (
        <div>
          <h3>Update Item</h3>
          <form onSubmit={submitHandler}>
            <label>Item Name:</label>
            <input type="text" name="Item_Name" value={updateData.Item_Name} onChange={changeHandler} />
            <br />
            <label>Price:</label>
            <input type="text" name="Price" value={updateData.Price} onChange={changeHandler} />
            <br />
            <label>Quantity:</label>
            <input type="text" name="Quantity" value={updateData.Quantity} onChange={changeHandler} />
            <br />
            <button type="submit">Update</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Update;
