import React, { Component } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    this.buttonStyle = {
      padding: "10px 20px",
      marginRight: "10px",
      marginTop: "10px",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#1976d2",
      color: "white",
      cursor: "pointer",
      fontSize: "15px",
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello = () => {
    alert("Hello! Have a nice day.");
  };

  handleIncrement = () => {
    this.increment();
    this.sayHello();
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  syntheticEvent = () => {
    alert("I was clicked");
  };

  render() {
    return (
      <div
        style={{
          fontFamily: "Arial",
          backgroundColor: "#f4f4f4",
          minHeight: "100vh",
          padding: "30px",
        }}
      >
        <div
          style={{
            width: "500px",
            backgroundColor: "#fff",
            padding: "25px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        >
          <h1>Event Examples App</h1>

          <h2>Counter: {this.state.count}</h2>

          <button
            style={this.buttonStyle}
            onClick={this.handleIncrement}
          >
            Increment
          </button>

          <button
            style={this.buttonStyle}
            onClick={this.decrement}
          >
            Decrement
          </button>

          <br />

          <button
            style={this.buttonStyle}
            onClick={() => this.sayWelcome("Welcome")}
          >
            Say Welcome
          </button>

          <button
            style={this.buttonStyle}
            onClick={this.syntheticEvent}
          >
            OnPress
          </button>

          <hr style={{ margin: "25px 0" }} />

          <CurrencyConvertor />
        </div>
      </div>
    );
  }
}

export default App;