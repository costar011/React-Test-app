import React from "react";
import "./styles/app.css";
import "react-daypicker/lib/DayPicker.css";
import DayPicker from "react-daypicker";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App__main">
          <DayPicker onDayClick={(day) => this.setState({ day })} />
        </div>
      </div>
    );
  }
}
export default App;
