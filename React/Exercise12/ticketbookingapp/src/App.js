import React, { Component } from "react";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }

  login = () => {
    this.setState({ isLoggedIn: true });
  };

  logout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <div
        style={{
          fontFamily: "Arial",
          padding: "20px",
        }}
      >
        <h1>Ticket Booking App</h1>

        {this.state.isLoggedIn ? (
          <>
            <button
              onClick={this.logout}
              style={{
                padding: "10px 20px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>

            <UserPage />
          </>
        ) : (
          <>
            <button
              onClick={this.login}
              style={{
                padding: "10px 20px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Login
            </button>

            <GuestPage />
          </>
        )}
      </div>
    );
  }
}

export default App;