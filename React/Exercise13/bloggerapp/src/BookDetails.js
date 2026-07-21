import React from "react";

function BookDetails() {

  const books = [
    {
      id: 1,
      title: "Java Programming",
      author: "Herbert Schildt",
      price: "₹650",
    },
    {
      id: 2,
      title: "React Basics",
      author: "Jordan Walke",
      price: "₹700",
    },
    {
      id: 3,
      title: "Python Essentials",
      author: "Mark Lutz",
      price: "₹800",
    },
  ];

  return (
    <div>
      <h2>Book Details</h2>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookDetails;