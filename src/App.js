import React from "react";
import "./styles/app.css";
import "react-daypicker/lib/DayPicker.css";
import DayPicker from "react-daypicker";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <div className="App__top">
          <DayPicker onDayClick={(day) => this.setState({ day })} />
        </div>
        <div className="App__main">
          <input className="App__main__text" type="text"></input>
          <button className="App__main__btn" onClick={this._btnHandler}>
            OK
          </button>
        </div>
      </div>
    );
  }

  _btnHandler = () => {
    alert("Delete Text?");
  };
}
export default App;
