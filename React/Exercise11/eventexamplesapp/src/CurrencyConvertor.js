import React, { Component } from "react";

class CurrencyConvertor extends Component {
  constructor() {
    super();

    this.state = {
      rupees: "",
      euro: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      rupees: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const euro = (this.state.rupees / 90).toFixed(2);

    this.setState({
      euro,
    });
  };

  render() {
    return (
      <div>
        <h2>Currency Convertor</h2>

        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            placeholder="Enter amount in ₹"
            value={this.state.rupees}
            onChange={this.handleChange}
            style={{
              padding: "10px",
              width: "220px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginRight: "10px",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Convert
          </button>
        </form>

        <h3 style={{ color: "#1976d2", marginTop: "20px" }}>
          Euro: € {this.state.euro}
        </h3>
      </div>
    );
  }
}

export default CurrencyConvertor;