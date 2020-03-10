import * as React from "react";
import TableHeader from "./TableHeader";
import { Table, Button } from "react-bootstrap";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 80%;
  margin: auto;
`;
const Tbody = styled.tbody`
  background-color: #dae8fc;
`;
const Listvehicles: React.FC<{}> = props => {
  const headers = ["Vehicle", "Description", "Status"];
  const vehiclesData = [
    {
      numberPlate: "RTJ292",
      description: "White Toyota with 3.0v engine",
      status: "Renting"
    },
    {
      numberPlate: "RTJ292",
      description: "White Toyota with 3.0v engine",
      status: "Available"
    },
    {
      numberPlate: "RTJ292",
      description: "White Toyota with 3.0v engine",
      status: "Renting"
    },
    {
      numberPlate: "RTJ292",
      description: "White Toyota with 3.0v engine",
      status: "Available"
    }
  ];

  return (
    <Div>
      <Table bordered>
        <TableHeader listOfHeader={headers}></TableHeader>
        <Tbody>
          {vehiclesData.map(item => {
            return (
              <tr>
                <td>{item.numberPlate}</td>
                <td>{item.description}</td>
                <td>
                  <Button
                    variant={item.status === "Renting" ? "warning" : "primary"}
                    block
                  >
                    {item.status}
                  </Button>
                </td>
              </tr>
            );
          })}
        </Tbody>
      </Table>
    </Div>
  );
};
export default Listvehicles;
