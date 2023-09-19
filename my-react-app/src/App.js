import "./App.css";
import React from "react";
import Select from "react-select";
import { Form, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: "0",
    }),
  };

  return (
    <div
      className="d-flex justify-content-center align-items-start"
      style={{ height: "100vh" }}
    >
      <Container>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="custom-select-label">
                Choose an option:
              </Form.Label>
              <Select
                className="custom-select"
                classNamePrefix="custom-select"
                options={options}
                isSearchable
                placeholder="Search..."
              />
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
