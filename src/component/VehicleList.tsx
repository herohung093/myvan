import * as React from "react";
import TableHeader from "./TableHeader";
import { Table, Button } from "react-bootstrap";
import styled from "styled-components";
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
  const Tbody = styled.tbody`
    background-color: #dae8fc;
  `;

  return (
    <div>
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
    </div>
  );
};
export default Listvehicles;
