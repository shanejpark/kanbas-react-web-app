import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import db from "./Database";
import React, { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Signin from "./users/signin";
import Account from "./users/account";
import UserTable from "./users/table";
import Signup from "./users/signup";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });

  const URL = "http://localhost:4000/api/courses";

  const updateCourse = async (course) => {
    const response = await axios.put(`${URL}/${course._id}`, course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
    setCourse({ name: "" });
  };
  const deleteCourse = async (course) => {
    const response = await axios.delete(`${URL}/${course._id}`);
    setCourses(courses.filter((c) => c._id !== course._id));
  };
  const addCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([response.data, ...courses]);
    setCourse({ name: "" });
  };
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };

  useEffect(() => {
    findAllCourses();
  }, []);

  return (
    <Provider store={store}>
      <div>
        <KanbasNavigation />
        <div style={{ marginLeft: 150, marginTop: 30 }}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route
              path="Courses/:courseId/*"
              element={<Courses courses={courses} />}
            />
            <Route path="Calendar" element={<h1>Calendar</h1>} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="account" element={<Account />} />
            <Route path="/account/:id" element={<Account />} />
            <Route path="/admin/users" element={<UserTable />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
