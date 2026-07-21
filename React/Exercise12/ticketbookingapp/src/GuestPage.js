import React from "react";

function GuestPage() {
  const flights = [
    {
      id: 1,
      from: "Chennai",
      to: "Bangalore",
      price: "₹3,500",
    },
    {
      id: 2,
      from: "Delhi",
      to: "Mumbai",
      price: "₹5,200",
    },
    {
      id: 3,
      from: "Hyderabad",
      to: "Kolkata",
      price: "₹4,800",
    },
  ];

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Guest Page</h2>

      <p>You can view available flights.</p>

      <table
        border="1"
        cellPadding="10"
        style={{ borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.from}</td>
              <td>{flight.to}</td>
              <td>{flight.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ color: "red" }}>
        Login to book your ticket.
      </p>
    </div>
  );
}

export default GuestPage;