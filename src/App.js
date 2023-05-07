import './App.css';
import React, { useState, useEffect } from "react";
import Footer from './Components/Foooter';

function App() {
  const [tips, setTips] = useState("");
  const [type, setType] = useState("");

    const fetchTips = async () => {
    const response = await fetch("http://www.boredapi.com/api/activity/");
    const data = await response.json();
    setTips(data.activity);
    setType(data.type);
  };

  useEffect(() => {
    fetchTips();
  }, []);

  return (<>
    <div className="App">

    <button className='btn' onClick={fetchTips}>New Tip</button>
    <p> {tips} <span className='type'> It will be {type} </span></p>


    </div>
    <Footer /> 
    </>
    
  );

}



export default App;
