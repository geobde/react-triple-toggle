import React, { useState } from "react";
import { render } from "react-dom";
import { Toggle } from "./lib";


let initialState = {
  left:false,
  right:false,
  middle:true
}



const App = () => {

   let [data, setData] = useState(initialState);

   const handleChange = (action) => {
    switch(action) {
      case "left":
       return setData({ left:true, right:false, middle:false });
      case "middle":
       return  setData({ left:false, right:false, middle:true });
      case "right":
       return setData({ left:false, right:true, middle:false });
      default:
      return action;
    }
  };



  return (
    <Toggle  data={data}  onChange={(e) => handleChange(e)} />
  )
};

render(<App />, document.getElementById("root"));
