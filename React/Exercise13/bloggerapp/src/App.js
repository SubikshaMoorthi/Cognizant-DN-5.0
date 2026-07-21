import React from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Blogger App</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "20px",
        }}
      >
        {showBooks && (
          <div
            style={{
              flex: 1,
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "15px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            }}
          >
            <BookDetails />
          </div>
        )}

        {showBlogs && (
          <div
            style={{
              flex: 1,
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "15px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            }}
          >
            <BlogDetails />
          </div>
        )}

        {showCourses && (
          <div
            style={{
              flex: 1,
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "15px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            }}
          >
            <CourseDetails />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;