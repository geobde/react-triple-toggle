

## Installation

```
npm i react-triple-toggle --save
```

## Usage

### Controlled component

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

  return <Toggle checked={data} onChange={(e) => handleChange(e)} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```

[![Edit react-triple-toggle](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-triple-toggle-zesk5?fontsize=14)


### Uncontrolled component

```
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Toggle } from "react-triple-toggle";


function App() {

  return <Toggle />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```
[![Edit react-triple-toggle-2](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/nice-brook-yzeid?fontsize=14)


## API

| Prop              | Type       | Description |
|-------------------|------------|-------------|
| `checked`         | _object_  |  Use this if you want to treat the toggle as a controlled component. |
| `defaultChecked`  | _object_  |  Use this if you want to treat the toggle as an uncontrolled component. |
| `onChange`        | _function_ | A function which acts as a callback when the toggle is changed. |
| `disabled`        | _boolean_  | If `true`, the toggle is disabled. If `false`, the toggle is enabled |


## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces

## License

MIT Licensed. Copyright (c) George Bardi 2019.
