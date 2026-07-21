import React from "react";

function CourseDetails() {

  const courses = [
    {
      id: 1,
      name: "Java Full Stack",
      duration: "3 Months",
    },
    {
      id: 2,
      name: "React Development",
      duration: "2 Months",
    },
    {
      id: 3,
      name: "Machine Learning",
      duration: "4 Months",
    },
  ];

  return (
    <div>
      <h2>Course Details</h2>

      <ol>
        {courses.map((course) => (
          <li key={course.id}>
            {course.name} ({course.duration})
          </li>
        ))}
      </ol>
    </div>
  );
}

export default CourseDetails;