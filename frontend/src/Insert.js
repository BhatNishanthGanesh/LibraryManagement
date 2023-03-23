import React, { useState } from "react";
import Axios from "axios";
function Insert() {
  const changeHandler=(e)=>{
    let name1=e.target.name;
    let val=e.target.value;
    setData({...data,[name1]: val});
  }
  const [data,setData]=useState({Item_Name:"",Price:"",Quantity:""})
  //Submit Handler
  const submitHandler=()=>{
    Axios.post("http://localhost:3100/insert",{data});
    alert("Data inserted")
  }
  return (
    <div className="App">
    <div >
    < div style={{backgroundQuantity:'url("https://img.freepik.com/free-photo/white-concrete-wall_53876-92803.jpg?w=1060&t=st=1677212043~exp=1677212643~hmac=d3d75b5e63b8f097ce35cb2ee31ac881b29105e47bcc633013452f1725bc8974")',paddingBottom:'50px',borderBlockColor:'white'}}>
    <center>
    <h1 >Inserting new Item_Name:</h1>
    <hr/>
    <br/>
    <br/>
    <div >
    <form onSubmit={submitHandler}>
      <label ><em>Name of the Item_Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;</em></label>
      <input type="text" name="Item_Name" value={data.Item_Name} onChange={changeHandler}/><br/><br/>
      <label ><em>Price of the Item_Name &nbsp;&nbsp;&nbsp;:&nbsp;</em></label>
      <input type="text" name="Price" value={data.Price} onChange={changeHandler}/><br/><br/>
      <label ><em>Quantity link of the Item_Name: :&nbsp;</em></label>
      <input type="text" name="Quantity" value={data.Quantity} onChange={changeHandler}/><br/><br/>
      <button type="submit" >Insert</button>
    </form>
    </div>
    </center>
    </div>
    </div>
    </div>
  );
}

export default Insert;
