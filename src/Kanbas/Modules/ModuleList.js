import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faPlus,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  useEffect(() => {
    client
      .findModulesForCourse(courseId)
      .then((modules) => dispatch(setModules(modules)));
  }, [courseId]);

  return (
    <div className="list-group">
      <li className="list-group-item">
        <input
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
          className="form-control"
        />
        <textarea
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
          className="form-control mt-2"
        />
        <button
          onClick={() => handleAddModule()}
          className="btn btn-primary mt-2"
        >
          Add
        </button>
        <button
          onClick={() => handleUpdateModule(module)}
          className="btn btn-primary ms-2 mt-2"
        >
          Update
        </button>
      </li>

      {modules.map((module, index) => (
        <div className="list-group-item list-group-item-secondary">
          <span class="align-middle">{module.name}</span>
          <button
            onClick={() => dispatch(setModule(module))}
            className="float-end btn btn-sm btn-danger ms-1"
          >
            Edit
          </button>
          <button
            onClick={() => handleDeleteModule(module._id)}
            className="float-end btn btn-sm btn-danger me-1 ms-2"
          >
            Delete
          </button>
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            className="float-end mt-2"
            style={{ marginRight: "7px" }}
          />
          <FontAwesomeIcon
            icon={faPlus}
            className="float-end mt-2"
            style={{ marginRight: "15px" }}
          />
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="float-end mt-2"
            style={{ marginRight: "15px", color: "#2ac620" }}
          />
          {module.lessons && module.lessons.length > 0 && (
            <ul className="list-group mt-3">
              {module.lessons.map((lesson, index) => (
                <div className="list-group-item list-group-item-light">
                  <span class="align-middle">{lesson.name}</span>
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
