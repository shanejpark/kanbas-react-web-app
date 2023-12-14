function CourseItem({ course, deleteCourse, setCourse }) {
  return (
    <div className="card m-2">
      <div className="bg-info course"></div>
      <div className="card-body text-black">
        <h5 className="card-title">{course.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{course.number}</h6>
        <p className="card-text">Start Date: {course.startDate}</p>
        <p className="card-text">End Date: {course.endDate}</p>
      </div>
      <button
        onClick={(event) => {
          event.preventDefault();
          deleteCourse(course._id);
        }}
        className="btn btn-danger m-2"
      >
        Delete
      </button>

      <button
        onClick={(event) => {
          event.preventDefault();
          setCourse(course);
        }}
        className="btn btn-info m-2"
      >
        Edit
      </button>
    </div>
  );
}
export default CourseItem;
