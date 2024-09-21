import { Col, Row } from "react-bootstrap";

const RandevuList = ({ student, handleDelete }) => {
  // console.log("studentData", studentData);

  return (
    <div>
      <h2 className="text-danger">🌸 Öğrenci Ders Takip Sistemi 🌸</h2>
      <Row className="w-75 m-auto">
        {student.map(({ id, student, day, ok, teacher }) => (
          <Col
            key={id}
            role="button"
            xs={12}
            md={6}
            className="text-center my-4 
"
          >
            <Col className="card">
              <h2>Öğrenci:{student}</h2>
              <h3>Öğretmen:{teacher}</h3>
            </Col>
            <Col className="card">
              <h3>Date: {new Date(day).toLocaleDateString("tr")}</h3>
              <h4>Time: {new Date(day).toLocaleTimeString("tr")}</h4>
            </Col>
            <Col className="card">
              <h4
                className="d-flex justify-content-end"
                type="button"
                onClick={() => handleDelete(id)}
              >
                {ok ? "✅" : "✖️"}
              </h4>
            </Col>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RandevuList;
