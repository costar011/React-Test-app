import React from "react";
import "./styles/app.css";
import "react-daypicker/lib/DayPicker.css";
import DayPicker from "react-daypicker";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App__top">
          <DayPicker onDayClick={(day) => this.setState({ day })} />
        </div>
        <div className="App__main">
          <input className="App__main__text" type="text"></input>
          <button className="App__main__btn">OK</button>
        </div>
      </div>
    );
  }
}
export default App;
