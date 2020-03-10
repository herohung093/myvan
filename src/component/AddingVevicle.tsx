import * as React from "react";
import styled from "styled-components";
import { Form, Container, Col, Row } from "react-bootstrap";
import { useState } from "react";
import CarImage from "./CarImage";
import storage from "../firebase/index";
const Field = styled.div`
  margin-top: 10%;
  margin-bottom: 10px;
  width: 70%;
`;
const Button = styled.button`
  width: 50%;
`;
const AddingVehicle: React.SFC<{}> = props => {
  interface formsType {
    numberPlate: string;
    type: string;
    engine: string;
    description: string;
    brand: string;
    assessFee: string;
    ratePerHour: string;
  }

  const initializeForms: formsType = {
    numberPlate: "",
    type: "",
    engine: "",
    description: "",
    brand: "",
    assessFee: "",
    ratePerHour: ""
  };
  const [image, setImage] = useState<any>();
  const [stringInputs, setStringInputs] = useState<formsType>(initializeForms);

  const handleStringFormChange = (e: any) => {
    let name = e.target.name;
    let value = e.target.value;
    const regexp = /^[0-9\b]+$/;

    if (name === "assessFee" || name === "ratePerHour") {
      if (value === "" || regexp.test(value.substring(value.length - 1))) {
        setStringInputs({ ...stringInputs, [name]: value });
      }
      return;
    }
    setStringInputs({ ...stringInputs, [name]: value });
  };
  const handleUploadImage=(imageData: any)=>{
    //setImage(imageData)
    
  }
  const handleSubmit=()=>{
      
    const uploadTask = storage.ref(`images/${stringInputs.numberPlate}`).put(image);
    console.log(uploadTask)
    
    
    
  }
  return (
    <Container>
      <Row>
        <Col xs={6}>
          <div className="form-group">
            <Field>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Number Plate:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter number plate"
                    name="numberPlate"
                    required
                    onChange={handleStringFormChange}
                    value={stringInputs.numberPlate}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Type:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your car type"
                    name="type"
                    required
                    onChange={handleStringFormChange}
                    value={stringInputs.type}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Engine:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your car engine"
                    name="engine"
                    onChange={handleStringFormChange}
                    value={stringInputs.engine}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Brand:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your car brand"
                    name="brand"
                    required
                    onChange={handleStringFormChange}
                    value={stringInputs.brand}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Description:</Form.Label>

                  <Form.Control
                    as="textarea"
                    rows="3"
                    placeholder="What is special in your car"
                    name="description"
                    onChange={handleStringFormChange}
                    value={stringInputs.description}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Assess Fee:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="0"
                    name="assessFee"
                    required
                    onChange={handleStringFormChange}
                    value={stringInputs.assessFee}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Rate per hour:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="0"
                    name="ratePerHour"
                    required
                    onChange={handleStringFormChange}
                    value={stringInputs.ratePerHour}
                  />
                </Form.Group>
                <Button className="btn btn-primary" type="submit">
                  Add Vehicle
                </Button>
              </Form>
            </Field>
          </div>
        </Col>
        <Col xs={4}>
          {" "}
          <CarImage upLoadImage={handleUploadImage}></CarImage>
        </Col>
      </Row>
    </Container>
  );
};

export default AddingVehicle;
