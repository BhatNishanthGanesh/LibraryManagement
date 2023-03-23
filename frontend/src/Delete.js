import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Delete() {
  const [inventoryData, setInventoryData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3100/IMS')
      .then(response => {
        setInventoryData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3100/IMS/${id}`)
      .then(response => {
        alert('Deleted successfully');
        setInventoryData(inventoryData.filter(item => item._id !== id));
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Inventory List</h1>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {inventoryData.map((item, index) => (
            <tr key={index}>
              <td>{item.Item_Name}</td>
              <td>{item.Quantity}</td>
              <td>{item.Price}</td>
              <td><button onClick={() => handleDelete(item._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Delete;
