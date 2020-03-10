import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
interface carImage {
  upLoadImage(image: any): void;
}
const Img = styled.img`
  width: 190pt;
  height: 185pt;
  margin-top: 10%;
  @media (min-width: 850px) {
    width: 390pt;
    height: 285pt;
    margin-top: 10%;
  }
`;
const Input = styled.input`
  margin-top: 8px;
  margin-bottom: 8px;
`;
const CarImage: React.FC<carImage> = props => {
  const initialUrl = "";
  const [url, setUrl] = useState<string>(initialUrl);
  const handleChange = (e: any) => {
    setUrl(URL.createObjectURL(e.target.files[0]));
    props.upLoadImage(e.target.files[0]);
  };

  return (
    <div>
      <Img src={url}></Img>
      <Input type="file" onChange={handleChange}></Input>
    </div>
  );
};
export default CarImage;
