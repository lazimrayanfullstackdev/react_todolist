
import React, {useState} from "react";

function App() {

  const [items, setUtem] = useState([]);

  function handleChange(event){
    const {name, value} = event.target;
    console.log(value);

  }

  function clicked(){
    //hold the value of name
    console.log("I was clicked!");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} name="ItemName"/>
        <button onClick={clicked}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
