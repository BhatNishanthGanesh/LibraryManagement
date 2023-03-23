import React, { useState } from "react";
import img from "./images/img.jpg";
import "./App.css";
import Axios from "axios";

const App = () => {
  const [data, setData] = useState({ City: "", Temperature: "" });

  // change Handler
  const changeHandler = (e) => {
    let name1 = e.target.name;
    let val = e.target.value;
    setData({ ...data, [name1]: val });
  };

  // Submit Handler
  const submitHandler = () => {
    Axios.post("http://localhost:3100/insert", { data });
    alert("data inserted");
  };

  return (
    <>
      <div class="App">
        <div class="Border">
          <div class="wrap">
            <div>
              <img
                src={img}
                alt="my pic"
                height={200}
                width={200}
              />
            </div>
            <div>
              <h1> Weather Detail App </h1>
            </div>
          </div>
          <div class="Box">
            <div class="Box1">
              <select name="City" onChange={changeHandler} value={data.City}>
                
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>
            <div class="Box2">
              <input
                type="text"
                name="Temperature"
                onChange={changeHandler}
                value={data.Temperature}
                placeholder="Enter Temperature in degree"
              ></input>
            </div>
          </div>
          <form onSubmit={submitHandler}>

        
      <button type="submit">Submit</button>
      </form>
      </div>
      </div>
    </>
  );
}

export default App;