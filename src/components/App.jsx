
import React, {useState} from "react";

function App() {

  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");

  function handleChange(event){
    const {name, value} = event.target;
    console.log(value);
    setItem(value);
  }

  function clicked(){
    //hold the value of name
    console.log("I was clicked!");
    setItems((prevValue) => [...prevValue,item]);
    setItem("");
  }
  console.log(items);
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} name="ItemName" value={item}/>
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
