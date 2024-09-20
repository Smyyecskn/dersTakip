import { Col, Row } from "react-bootstrap";
import Teacher from "../components/Teacher";
import { teacherData } from "../helper/data";

const Home = () => {
  // console.log(teacherData);
  return (
    <div>
      <h1>Final Dersanesi ✅ </h1>
      <h4 className="mb-4">🧑‍🎓Öğrenci Ders Takip Programı </h4>
      <Row>
        {teacherData.map((teacher) => (
          <Col className="mb-4" key={teacher.id} sm={12} md={6} lg={4}>
            <Teacher {...teacher} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
