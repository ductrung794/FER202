







// viết hàm in 1 đối tượng student gồm các thuộc tính: name, age, grade
function printStudent(...student) {
  student.forEach(student => {
    console.log("Student Info:");
    console.log("Name: " + student.name);
    console.log("Age: " + student.age);
    console.log("Grade: " + student.grade);
  });
}

const student1 = { name: "Trung", age: 20, grade: "A+" };
printStudent(student1);

const { student2, student3} = {
    student2: { name: "Duc Trung", age: 22, grade: "B" },
    student3: { name: "Bình", age: 21, grade: "A" }
}
printStudent(student2, student3);


restStudent.map(s => console.log(s.name));
