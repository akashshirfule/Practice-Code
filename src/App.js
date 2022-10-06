import React from "react";
import Homecomp from "./Components/Home";
import styled from 'styled-components'


const Container = styled.div`
  background-color: aqua;
  color: #0d1d2c;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  align-items: center;
  height: 100vh;
  width: 98%;
  padding-top: 30px ;
  font-family: Montserrat;
`;

const Header = styled.div`
  background-color: white;
  color: #0d1d2c;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px;
  font-size: 25px;
  font-weight: bold;
`;
const App = () => {
  return (
    <Container>
      <Header>Expense Tracker</Header>
      <Homecomp></Homecomp>
    </Container>
  );
};

export default App;
