import * as React from "react";
import styled from "styled-components";
import { Form, Container, Col, Row } from "react-bootstrap";
import { useState } from "react";
import CarImage from "./CarImage";
import storage from "../firebase/index";
import axios from "../http/axios-vehicle";
import VehicleType from "../Types/VehicleType";
const Field = styled.div`
  margin-top: 10%;
  margin-bottom: 10px;
  width: 70%;
`;
const Button = styled.button`
  width: 50%;
`;
const Progress = styled.progress`
  width: 190pt;
  @media (min-width: 850px) {
    width: 390pt;
  }
`;


  const initializeForms: VehicleType = {
    numberPlate: "",
    type: "",
    engine: "",
    description: "",
    brand: "",
    assessFee: "",
    ratePerHour: "",
    status: "Available"
  };
  const AddingVehicle: React.FC<VehicleType> = props => {
  const [image, setImage] = useState<any>(null);
  const [stringInputs, setStringInputs] = useState<VehicleType>(initializeForms);
  const [imageUploadProgress, setProgress] = useState<any>();
  const [uploadSuccess, setSuccess] = useState<boolean>(false);
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
  const handleUploadImage = (imageData: any) => {
    setImage(imageData);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    const uploadTask = storage.storage
      .ref(`images/${stringInputs.numberPlate}`)
      .put(image);
    uploadTask.on(
      "state_changed",
      (snapshot: any) => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error: any) => {
        // Error function ...
        console.log(error);
      },
      () => {
        // show successful message
      }
    );

      storage.database.ref("/vehicles/"+stringInputs.numberPlate).set(stringInputs).then((response: any) => {
        // if (response.status === 200){
        //     setStringInputs(initializeForms)
        //     setSuccess(true)
        // }
        console.log(response)}
        )
    .catch((error: any) => console.log(error));
  };
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
          {!uploadSuccess && imageUploadProgress === 100 ? (
            ""
          ) : (
            <Progress
              value={imageUploadProgress}
              max="100"
              className="progress"
            />
          )}
          {uploadSuccess === true ? (
            <h3>Vehicle has been added</h3>
          ) : (""
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AddingVehicle;
