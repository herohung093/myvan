import * as React from "react";
import AddingVehicle from "../component/AddingVevicle";
import styled from "styled-components";
import VehicleList from "../component/VehicleList";
import { Route } from "react-router-dom";
const Div = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 80%;
  margin: auto;
`;
const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: center;
`;
const Li = styled.li`
  display: inline-block;
  margin: 20px;
`;
const A = styled.a`
  text-decoration: none;
  color: black;
  &:hover,
  &:active {
    color: #fa923f;
  }
`;
const Layout: React.FC<{}> = props => {
  return (
    <div>
      <Div>
        <header>
          <nav>
            <Ul>
              <Li>
                <A href="/">Home</A>
              </Li>
              <Li>
                <A href="/AddVehicle">Add Vehicle</A>
              </Li>
            </Ul>
          </nav>
        </header>

        {/* <AddingVehicle /> */}
      </Div>

      <Route path="/" exact component={VehicleList}></Route>
      <Route path="/AddVehicle" exact component={AddingVehicle}></Route>
    </div>
  );
};
export default Layout;
