

## Installation

```
npm i react-triple-toggle --save
```

## Usage

```
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Toggle } from "react-triple-toggle";

let initialData = {
  left: false,
  right: false,
  middle: true
};

function App() {
  let [data, setData] = useState(initialData);

  const handleChange = event => {
    switch (event) {
      case "left":
        return setData({ left: true, right: false, middle: false });
      case "middle":
        return setData({ left: false, right: false, middle: true });
      case "right":
        return setData({ left: false, right: true, middle: false });
      default:
        return event;
    }
  };

  return <Toggle data={data} onChange={handleChange} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```

## Props

- `data` - An object of data which acts as the source of data for the toggle. This prop is required.
- `onChange` - A function which acts as a callback when the toggle is changed.

## Example

[![Edit react-triple-toggle](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/stoic-bartik-zesk5?fontsize=14)

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces

## License

MIT Licensed. Copyright (c) George Bardi 2019.
