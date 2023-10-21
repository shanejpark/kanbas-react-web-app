import db from "../Database";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faPlus,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules.filter((module) => module.course === courseId);
  return (
    <div className="list-group">
      {modules.map((module, index) => (
        <div className="list-group-item list-group-item-secondary">
          {module.name}
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            className="float-end"
            style={{ marginRight: "7px" }}
          />
          <FontAwesomeIcon
            icon={faPlus}
            className="float-end"
            style={{ marginRight: "15px" }}
          />
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="float-end"
            style={{ marginRight: "15px", color: "#2ac620" }}
          />
          {module.lessons && module.lessons.length > 0 && (
            <ul className="list-group">
              {module.lessons.map((lesson, index) => (
                <div className="list-group-item list-group-item-light">
                  {lesson.name}
                  <FontAwesomeIcon
                    icon={faEllipsisVertical}
                    className="float-end"
                    style={{ marginRight: "7px" }}
                  />
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="float-end"
                    style={{ marginRight: "15px", color: "#2ac620" }}
                  />
                </div>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default ModuleList;
