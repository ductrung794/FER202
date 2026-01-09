function About() {
  const student = {
    id: 1,
    name: "Trần đức trung",
    avatar: "",
    age: 22,
    grade: "11A1",
  };
  return (
    <>
      <h1>This is the About Student</h1>
      <p>ID: {student.id} </p>
      <p>Name: {student.name} </p>
      <p>Age: {student.age} </p>
      <p>Grade: {student.grade} </p>
      <p>Avatar: {student.avatar} </p>
    </>
  );
}
