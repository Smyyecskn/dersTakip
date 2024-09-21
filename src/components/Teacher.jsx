import { Col, Row } from "react-bootstrap";
import { teacherData } from "../helper/data";
import DersEkle from "./DersEkle";
import { useState } from "react";

const Teacher = ({ handleAdd }) => {
  const [show, setShow] = useState(false);
  const [isim, setİsim] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (name) => {
    setShow(true);
    setİsim(name);
  };

  return (
    <div>
      <Row>
        {teacherData.map(({ id, name, dep, img }) => (
          <Col key={id} className="text-center my-3" xs={12} md={4}>
            <img
              src={img}
              alt={name}
              className="img img-thumbnail"
              onClick={() => handleShow(name)}
            />
            <h4>{name}</h4>
            <h6>{dep}</h6>
          </Col>
        ))}
      </Row>
      <DersEkle
        show={show}
        handleClose={handleClose}
        isim={isim}
        handleAdd={handleAdd}
      />
    </div>
  );
};

export default Teacher;
