

export default function About() {
  const student = {
    id: 1,
    name: "Trần đức trung",
    avatar: "/images/cat-pilot.jpg",
    age: 22,
    grade: "11A1",
  };
    return (
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="card shadow" style={{ width: "18rem" }}>
          <img
            src={student.avatar}
            className="card-img-top"
            alt={student.name}
          />
  
          <div className="card-body text-center">
            <h5 className="card-title">{student.name}</h5>
  
            <p className="card-text mb-1">
              <strong>ID:</strong> {student.id}
            </p>
            <p className="card-text mb-1">
              <strong>Age:</strong> {student.age}
            </p>
            <p className="card-text">
              <strong>Grade:</strong>
              <span className="badge bg-primary ms-2">
                {student.grade}
              </span>
            </p>
  
            <button className="btn btn-outline-primary btn-sm mt-2">
              View Profile
            </button>
          </div>
        </div>
      </div>
    );
}

