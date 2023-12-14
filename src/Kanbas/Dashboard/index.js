import { React, useState } from "react";
import db from "../Database";
import "./index.css";
import { Link } from "react-router-dom";
import CourseForm from "./CourseForm";
import CourseItem from "./CourseItem";
function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="list-group">
        <CourseForm
          course={course}
          setCourse={setCourse}
          addNewCourse={addNewCourse}
          updateCourse={updateCourse}
        />
      </div>

      <div className="d-flex flex-row flex-wrap">
        {courses.map((course, index) => (
          <Link
            key={index}
            to={`/Kanbas/Courses/${course._id}`}
            className="list-group-item"
          >
            <CourseItem
              course={course}
              setCourse={setCourse}
              deleteCourse={deleteCourse}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
