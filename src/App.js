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
          <div className="App__main__text">
            <input className="App__main__text1" type="text"></input>

            <input className="App__main__text1" type="text"></input>

            <div className="App__main__btn">
              <button className="App__main__btn" onClick={this._btnHandler}>
                OK
              </button>
              <button className="App__main__btn" onClick={this._btnHandler}>
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  _btnHandler = () => {
    alert("Delete Text?");
  };
}
export default App;
