import React from "react";
import "./styles/app.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App__top">Title</div>

        <div className="App__main">Content</div>

        <div className="App__bottom">dev</div>
      </div>
    );
  }
}
export default App;
