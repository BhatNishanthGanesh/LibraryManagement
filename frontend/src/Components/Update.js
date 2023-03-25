import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../Css/Update.css";

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
    <div className="update-container">
      <h1 className="update-title">Update InventoryMS</h1>
      <table className="update-table">
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
        <div className="update-form">
          <h3 className="update-form-title">Update Item</h3>
          <form onSubmit={submitHandler}>
            <label className="update-form-label" class="col-sm-3 col-form-label text-light">Item Name:</label>
            <input type="text" name="Item_Name" value={updateData.Item_Name} onChange={changeHandler}  className="update-form-input" />
            <br />
            <label className="update-form-label" class="col-sm-3 col-form-label text-light">Price:</label>
            <input type="text" name="Price" value={updateData.Price} onChange={changeHandler} className="update-form-input" />
            <br />
            <label className="update-form-label" class="col-sm-3 col-form-label text-light">Quantity:</label>
            <input type="text" name="Quantity" value={updateData.Quantity} onChange={changeHandler} className="update-form-input" />
            <br />
            <button type="submit" className="update-form-button">Update</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Update;
