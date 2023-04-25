import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Css/Delete.css';

function Delete() {
  const [inventoryData, setInventoryData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3100/BOOK')
      .then(response => {
        setInventoryData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3100/BOOK/${id}`)
    alert('Deleted successfully');
    setInventoryData(inventoryData.filter(item => item._id !== id))
      .then(response => {
        
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="inventory-list-container">
      <h1>Inventory List</h1>
      <table className="inventory-list-table">
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Quantity</th>
            <th>Author Name</th>
            <th>DELETE</th>
            {/* <th>To do by</th> */}
              {/* <th>Items Sold</th> */}
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {inventoryData.map((item, index) => (
            <tr key={index}>
              <td>{item.Book_Name}</td>
              <td>{item.Quantity}</td>
              <td>{item.Author}</td>
              {/* <td>{item.Date}</td> */}
              {/* <td>{item.Sold}</td> */}
              <td><button className="delete-button" onClick={() => handleDelete(item._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Delete;