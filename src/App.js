import React from "react";
import "./App.css";
import CitySelector from "./Components/CitySelector";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Container className="App">
      <CitySelector />
    </Container>
  );
};

export default App;
