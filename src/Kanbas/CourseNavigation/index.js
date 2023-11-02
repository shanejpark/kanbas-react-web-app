import { NavLink, useParams } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom Meetings",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];
  const { courseId } = useParams();
  return (
    <div className="list-group" style={{ width: 150 }}>
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={({ isActive }) =>
            [isActive ? "active" : "", "text-decoration-none"].join(" ")
          }
          style={({ isActive, isTransitioning }) => {
            return {
              color: isActive ? "black" : "red",
              borderLeft: isActive ? "solid black" : "",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          <div>{link}</div>
        </NavLink>
      ))}
    </div>
  );
}

export default CourseNavigation;
