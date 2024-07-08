
import React, {useState} from "react";

function App() {

  const [items, setItems] = useState([]); //declaring items array
  const [item, setItem] = useState(""); //declaring single item

  function handleChange(event){
    const {value} = event.target; //holding the value of input
    setItem(value); // passing the value of item and set it as item
  }

  function clicked(){
    setItems((prevValue) => [...prevValue,item]); //pushing item in the items array
    setItem(""); //clearing the input field after adding to array
  }

  return (
    <div className="container"> 
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} name="ItemName" value={item}/> {/* Passing the value of the text input */}
        <button onClick={clicked}> {/*passing the value to clicked function to handle change. */}
          <span>Add</span></button>
      </div>
      <div>
        <ul>
          {items.map((item, index) =>(
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;