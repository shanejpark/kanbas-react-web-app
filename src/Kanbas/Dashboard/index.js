import db from "../Database";
import "./index.css";
import { Link } from "react-router-dom";
function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="d-flex flex-row flex-wrap">
        {courses.map((course, index) => (
          <Link
            key={index}
            to={`/Kanbas/Courses/${course._id}`}
            className="list-group-item"
          >
            <div className="card m-2">
              <div className="bg-info course"></div>
              <div className="card-body text-black">
                <h5 className="card-title">{course.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {course.number}
                </h6>
                <p className="card-text">Start Date: {course.startDate}</p>
                <p className="card-text">End Date: {course.endDate}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
