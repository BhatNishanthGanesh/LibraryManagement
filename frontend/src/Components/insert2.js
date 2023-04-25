import React, { useState } from "react";
import Axios from "axios";

function Insert1() {
  const changeHandler=(e)=>{
    let name1=e.target.name;
    let val=e.target.value;
    setData({...data,[name1]: val});
  }
  const [data,setData]=useState({Book_Name:"",Author:"",Quantity:""})
  const submitHandler=()=>{
    Axios.post("http://localhost:3100/insert",{data});
    alert("Data inserted")
  }
  return (
    <div>
      <div style={{backgroundImage:'url("https://thumbs.dreamstime.com/z/white-pastel-rough-crack-cement-texture-stone-concrete-rock-plastered-stucco-wall-painted-flat-fade-background-gray-solid-floor-145190704.jpg")',paddingBottom:'50px',borderBlockColor:'white'}}>
        <center>
          <h1><em>Inserting new Item Detail:</em></h1>
          <hr/>
          <br/>
          <br/>
          <div>
            <form onSubmit={submitHandler}>
              <div className="row mb-3">
                <label htmlFor="formGroupExampleInput" className="col-sm-3 col-form-label text-dark"><em>Name of the Book :&nbsp;</em></label>
                <div className="col-sm-7">
                  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Book Name" name="Book_Name" value={data.Book_Name} onChange={changeHandler}/>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="formGroupExampleInput" className="col-sm-3 col-form-label text-dark"><em> Author :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</em></label>
                <div className="col-sm-7">
                  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Author Name" name="Author" value={data.Author} onChange={changeHandler}/>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="formGroupExampleInput" className="col-sm-3 col-form-label text-dark"><em>Quantity  of the Book :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</em></label>
                <div className="col-sm-7">
                  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Quantity" name="Quantity" value={data.Quantity} onChange={changeHandler}/>
                </div>
              </div>
              <button type="submit" className="btn btn-outline-dark btn-primary">Insert</button>
            </form>
          </div>
        </center>
      </div>
    </div>
  );
}


function Insert2() {
  const changeHandler=(e)=>{
    let name1=e.target.name;
    let val=e.target.value;
    setData({...data,[name1]: val});
  }
  const [data,setData]=useState({Book_Name:"",Author:"",Link:""})
  const submitHandler=()=>{
    Axios.post("http://localhost:3200/insert",{data});
    alert("Data inserted")
  }
  return (
    <div>
      <div style={{backgroundImage:'url("https://thumbs.dreamstime.com/z/white-pastel-rough-crack-cement-texture-stone-concrete-rock-plastered-stucco-wall-painted-flat-fade-background-gray-solid-floor-145190704.jpg")',paddingBottom:'50px',borderBlockColor:'white'}}>
        <center>
          <h1><em>Inserting new Book Detail:</em></h1>
          <hr/>
          <br/>
          <br/>
          <div>
            <form onSubmit={submitHandler}>
              <div className="row mb-3">
                <label htmlFor="formGroupExampleInput" className="col-sm-3 col-form-label text-dark"><em>Name of the Book :&nbsp;</em></label>
                <div className="col-sm-7">
                  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Book Name" name="Book_Name" value={data.Book_Name} onChange={changeHandler}/>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="formGroupExampleInput" className="col-sm-3 col-form-label text-dark"><em> Author :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</em></label>
                <div className="col-sm-7">
                  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Author Name" name="Author" value={data.Author} onChange={changeHandler}/>
                </div>
              </div>
              <div className="row mb-3">
                <label htmlFor="formGroupExampleInput" className="col-sm-3 col-form-label text-dark"><em>Link of the Book :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</em></label>
                <div className="col-sm-7">
                  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Quantity" name="Link" value={data.Link} onChange={changeHandler}/>
                </div>
              </div>
              <button type="submit" className="btn btn-outline-dark btn-primary">Insert</button>
            </form>
          </div>
        </center>
      </div>
    </div>
  );
}



function Insert() {
  const [showInsert, setShowInsert] = useState(false);
  const [showInsert1, setShowInsert1] = useState(false);
  const toggleInsert = () => {
    setShowInsert(!showInsert);
  };
  const toggleInsert1 = () => {
    setShowInsert1(!showInsert1);
  };

  return (
    <div>
      <button onClick={toggleInsert}>For Libary</button>
      {showInsert && <Insert1 />}
      <button onClick={toggleInsert1}>For Ebook</button>
      {showInsert1 && <Insert2 />}
    </div>
  );
}

export default Insert;