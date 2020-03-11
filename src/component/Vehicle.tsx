import * as React from "react"
import {Card} from "react-bootstrap"
import VehicleType from "../Types/VehicleType"
interface VehicleData{
    vehicleData: VehicleType;
    image: any;
}
const Vehicle: React.FC<VehicleData> = props => {
    return (<div>
        <Card border="primary"  style={{ width: '50%', justifyContent: "center" }}>
            
            <Card.Title>{props.vehicleData.numberPlate}</Card.Title>

        </Card>
    </div>);
}
export default Vehicle;

