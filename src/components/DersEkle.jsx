import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import { useState } from "react";

const DersEkle = ({ show, handleClose, isim, handleAdd }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("name,date", name, date);
    const newStudent = {
      id: new Date().getTime(),
      student: name,
      day: date,
      ok: false,
      teacher: isim,
    };
    handleAdd(newStudent);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isim} için Ders Randevu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Öğrenci İsmi</Form.Label>
              <Form.Control
                type="text"
                placeholder="Lütfen İsim Giriniz..."
                required
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tarih</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="Tarih"
                required
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="danger" type="submit">
                Submit
              </Button>
              <Button
                className="mx-2 text-center"
                variant="success"
                type="button"
                onClick={handleClose}
              >
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DersEkle;
