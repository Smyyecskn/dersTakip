import { useState } from "react";
import RandevuList from "../components/RandevuList";
import Teacher from "../components/Teacher";
import { studentData } from "../helper/data";

const Home = () => {
  const [student, setStudent] = useState(studentData);
  // console.log("student", student);
  const handleAdd = (newStudent) => {
    setStudent([...student, newStudent]);
  };

  const handleDelete = (id) => {
    const filteredList = student.filter((item) => item.id !== id);
    setStudent(filteredList);
  };

  return (
    <div>
      <h1>Finally Okulları ✅ </h1>
      <h4 className="m-4">🧑‍🎓Öğretmenlerimiz </h4>
      <Teacher handleAdd={handleAdd} />
      <RandevuList student={student} handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
