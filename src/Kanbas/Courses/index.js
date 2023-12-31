import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import CourseNavigation from "../CourseNavigation";
import db from "../Database";
import {
  Routes,
  Route,
  Navigate,
  NavLink,
  useLocation,
} from "react-router-dom";
import Modules from "../Modules";
import Home from "../Home";
import Assignments from "../Assignments";
import AssignmentEditor from "../Assignments/AssignmentEditor";

function Courses({ courses }) {
  const { courseId } = useParams();
  const URL = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <div>
      <nav style={{ breadcrumbDivider: ">" }} aria-label="breadcrumb">
        <ol class="breadcrumb mt-1">
          <li class="breadcrumb-item">
            <NavLink to="" class="text-decoration-none text-danger">
              {course.number}
            </NavLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            Home
          </li>
        </ol>
      </nav>
      <hr />
      <h1>{course.name}</h1>
      <div className="row mt-2">
        <div className="col-2">
          <CourseNavigation />
        </div>
        <div className="col-6">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
      {/* <pre>
        <code>{JSON.stringify(db.courses, null, 2)}</code>
      </pre> */}
    </div>
  );
}

export default Courses;
