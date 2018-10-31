// this is the react/es6 javascrpt code

import React from "react";
import ReactDOM from "react-dom";
const App = () => {
  return (
    <div>
      <p>React here! With hot reload! Everything is easy with webpack 4!</p>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));