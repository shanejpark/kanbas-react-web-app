function CourseForm({ course, setCourse, addNewCourse, updateCourse }) {
  return (
    <li
      className="list-group-item"
      style={{ marginRight: "30px", marginBottom: "20px" }}
    >
      <input
        value={course.name}
        className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <input
        value={course.number}
        className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <input
        value={course.startDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <input
        value={course.endDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />
      <button className="btn btn-info mt-3 me-3" onClick={addNewCourse}>
        Add
      </button>
      <button className="btn btn-primary mt-3" onClick={updateCourse}>
        Update
      </button>
    </li>
  );
}
export default CourseForm;
