import * as React from "react";
import TableHeader from "./TableHeader";
import { Table, Button } from "react-bootstrap";
import styled from "styled-components";
import {useEffect, useState} from "react"
import VehicleType from "../Types/VehicleType"
import database from "../firebase/index";
import axios from "axios"
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
let initializeVehicles = [{
  numberPlate: "",
  type: "",
  engine: "",
  description: "",
  brand: "",
  assessFee: "",
  ratePerHour: "",
  status: ""
}];
const VehicleList: React.SFC<{}> = props => {
  const headers = ["Vehicle", "Description", "Status"];
  const [vehicleData, setVehicleData] = useState<VehicleType[]>(initializeVehicles);

  useEffect( () => {
    // let data: VehicleType[];
    // data = [];

    const fetchData = async()=>{
      initializeVehicles = await (await axios("https://myvan-12eb8.firebaseio.com/vehicles.json")).data
      setVehicleData(initializeVehicles)
    }

    fetchData();
  
    
    //setVehicleData(vehicleData);
    
    console.log(vehicleData);
  },[vehicleData[0]]);

  function loadContent (data: VehicleType[])  {
   

    // let ref = database.database.ref("/vehicles");
    
    // ref.once("value").then(function(snapshot) {
    //   snapshot.forEach(function(childSnapshot) {
    //     // childData will be the actual contents of the child
    //     let childData = childSnapshot.val();
    //     data.push(childData);

    //   });
    // });
     
  };
  return (
 
    <Div>
      <Table bordered>
        <TableHeader listOfHeader={headers}></TableHeader>
        {/* <Tbody>
          {vehicleData.map(item => {
            return (
              <tr key={item.numberPlate}>
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
        </Tbody> */}
      </Table>
    </Div>
  );
};
export default VehicleList;
