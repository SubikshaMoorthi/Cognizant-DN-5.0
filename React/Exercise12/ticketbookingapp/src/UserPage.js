import React from "react";

function UserPage() {
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
      <h2>User Page</h2>

      <p>Welcome! You can now book tickets.</p>

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
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.from}</td>
              <td>{flight.to}</td>
              <td>{flight.price}</td>
              <td>
                <button
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                >
                  Book
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserPage;