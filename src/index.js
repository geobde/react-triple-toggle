import React, { useState } from "react";
import { render } from "react-dom";
import { Toggle } from "./lib";


let initialState = {
  left:false,
  right:false,
  middle:true
}



const App = () => {

  return (
    <Toggle  data={initialState} />
  )
};

render(<App />, document.getElementById("root"));
