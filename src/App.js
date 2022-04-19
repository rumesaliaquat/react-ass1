import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [inp, setInp] = useState('')
  const [items, setItems] = useState([])
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <input type='text' placeholder='Make a list for todo...' value={inp} onChange={(e) => {
          setInp(e.target.value)
        }} ></input>


        <button onClick={() => {
          setItems((oldItems) => {
            return [...oldItems, inp]
          })
          setInp("")
        }}>ADD ITEMS</button>
        <button>DELETE ALL</button>

        <ul>
          {items.map((itemsVal, index) => {
            return (
            <>
            <div>
            <li>{itemsVal}</li>
            <button onClick={() => {}}>EDIT</button>
            <button onClick={() => {}}>DELETE</button>
            </div> 
            </> 
            ) 
          })}
        </ul>
      {/* </header> */}
    </div>

  );
}

export default App;
