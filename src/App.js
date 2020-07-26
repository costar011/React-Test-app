import React from "react";
import "./styles/app.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App__top">top</div>

        <div className="App__main">
          <div className="App__main__box">main box</div>
        </div>

        <div className="App__bottom">bottom</div>
      </div>
    );
  }
}
export default App;
