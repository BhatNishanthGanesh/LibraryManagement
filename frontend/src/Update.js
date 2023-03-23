import React, { useState } from "react";
import Axios from "axios";

function Update() {
const [data, setData] = useState({ Item_Name: "", Price: "", Quantity: "" });
const [id, setId] = useState("");

//handle input change
const handleChange = (e) => {
const { name, value } = e.target;
setData((prevData) => ({ ...prevData, [name]: value }));
};

//handle form submit
const handleSubmit = (e) => {
e.preventDefault();
Axios.put(`http://localhost:3100/IMS/${id}`, { data })
.then((res) => {
alert("Data updated successfully!");
setData({ Item_Name: "", Price: "", Quantity: "" });
setId("");
})
.catch((err) => {
console.log(err);
alert("Error updating data. Please try again.");
});
};

return (
<div className="App">
<h2>Update Item</h2>
<form onSubmit={handleSubmit}>
<label>Item ID:</label>
<input type="text" value={id} onChange={(e) => setId(e.target.value)} />
<label>Item Name:</label>
<input type="text" name="Item_Name" value={data.Item_Name} onChange={handleChange} />
<label>Price:</label>
<input type="text" name="Price" value={data.Price} onChange={handleChange} />
<label>Quantity:</label>
<input type="text" name="Quantity" value={data.Quantity} onChange={handleChange} />
<button type="submit">Update</button>
</form>
</div>
);
}

export default Update;