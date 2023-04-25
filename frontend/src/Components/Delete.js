import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Css/Delete.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Delete1() {
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
      <h1>Library List</h1>
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
              <td><button className="delete-button" onClick={() => handleDelete(item._id)}><FontAwesomeIcon icon={faTrash} />Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function Delete2() {
  const [inventoryData, setInventoryData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3200/eBOOK')
      .then(response => {
        setInventoryData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`"http://localhost:3200/eBOOK"/${id}`)
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
      <h1>Library List</h1>
      <table className="inventory-list-table">
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Link</th>
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
              <td><button onClick={() => window.open(item.Link)}>ebook</button></td>
              <td>{item.Author}</td>
              {/* <td>{item.Date}</td> */}
              {/* <td>{item.Sold}</td> */}
              <td><button className="delete-button" onClick={() => handleDelete(item._id)}><FontAwesomeIcon icon={faTrash} />Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function Delete() {
  const [showDelete, setShowDelete] = useState(true);
  const [showDelete1, setShowDelete1] = useState(false);
  const toggleDelete = () => {
    setShowDelete(true);
    setShowDelete1(false);
  };
  const toggleDelete1 = () => {
    setShowDelete1(true);
    setShowDelete(false);
  };

  return (
    <div>
      <button onClick={toggleDelete} style={{borderRadius:"20%"}}>For Library</button>
      <button onClick={toggleDelete1} style={{borderRadius:"20%"}}>For Ebook</button>
      {showDelete && <Delete1 />}
      {showDelete1 && <Delete2 />}
    </div>
  );
}

export default Delete;