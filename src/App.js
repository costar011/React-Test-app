import React from "react";
import "./styles/app.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App__top">
          <div className="App__top__box">top box</div>
        </div>

        <div className="App__main">
          <div className="App__main__box">main box</div>
        </div>

        <div className="App__bottom">
          <div className="App__bottom__box">bottom box</div>
        </div>
      </div>
    );
  }
}
export default App;
