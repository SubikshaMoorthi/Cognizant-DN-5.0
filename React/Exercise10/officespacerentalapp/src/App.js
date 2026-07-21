import React from "react";

function App() {

  const officeSpaces = [
    {
      id: 1,
      name: "Tech Park Office",
      rent: 55000,
      address: "Tidel Park, Chennai",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700"
    },
    {
      id: 2,
      name: "Business Hub",
      rent: 75000,
      address: "MG Road, Bangalore",
      image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=700"
    },
    {
      id: 3,
      name: "Startup Workspace",
      rent: 60000,
      address: "Hitech City, Hyderabad",
      image: "https://images.unsplash.com/photo-1497366811353-f200968a6e72?w=700"
    }
  ];

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>

      <h1>Office Space Rental App</h1>

      {officeSpaces.map((office) => (
        <div
          key={office.id}
          style={{
            width: "350px",
            border: "1px solid gray",
            borderRadius: "8px",
            padding: "10px",
            margin: "15px 0",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
          }}
        >
          <img
            src={office.image}
            alt={office.name}
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              borderRadius: "5px"
            }}
          />

          <h3>{office.name}</h3>

          <p
            style={{
              color: office.rent <= 60000 ? "red" : "green",
              fontWeight: "bold",
              fontSize: "18px"
            }}
          >
            Rent: ₹{office.rent}
          </p>

          <p>
            <b>Address:</b> {office.address}
          </p>

        </div>
      ))}

    </div>
  );
}

export default App;