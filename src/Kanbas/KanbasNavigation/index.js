import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";
import {
  faUser,
  faGauge,
  faBook,
  faCalendar,
  faInbox,
  faClock,
  faC,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

function KanbasNavigation() {
  const { pathname } = useLocation();
  const links = [
    {
      name: "Account",
      icon: faUser,
    },
    {
      name: "Dashboard",
      icon: faGauge,
    },
    {
      name: "Courses",
      icon: faBook,
    },
    {
      name: "Calendar",
      icon: faCalendar,
    },
    {
      name: "Inbox",
      icon: faInbox,
    },
    {
      name: "History",
      icon: faClock,
    },
    {
      name: "Commons",
      icon: faC,
    },
    {
      name: "Help",
      icon: faCircleQuestion,
    },
  ];
  return (
    <div className="sidebar">
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={`/Kanbas/${link.name}`}
          className={"d-flex flex-column text-center"}
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              color: isActive ? "red" : "red",
              backgroundColor: isActive ? "white" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          <FontAwesomeIcon icon={link.icon} size="xl" />
          {link.name}
        </NavLink>
      ))}
    </div>
  );
}

export default KanbasNavigation;
