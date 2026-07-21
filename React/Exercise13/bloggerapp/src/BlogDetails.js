import React from "react";

function BlogDetails() {

  const blogs = [
    {
      id: 1,
      title: "React Components",
      author: "John",
    },
    {
      id: 2,
      title: "Java Collections",
      author: "David",
    },
    {
      id: 3,
      title: "Spring Boot Basics",
      author: "Smith",
    },
  ];

  return (
    <div>
      <h2>Blog Details</h2>

      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <b>{blog.title}</b> - {blog.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;