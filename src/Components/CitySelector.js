import React, { useState } from "react";
import { Row, Col, FormControl, Button } from "react-bootstrap";
import { API_BASE_URL, API_KEY } from "../apis/config";

const CitySelector = () => {
  const [city, setCity] = useState("");
  // const [results, setResults] = useState(null)

  // const onSearch = () => {
  //   fetch(
  //     `${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  //   )
  //     .then((response) => response.json())
  //     .then((result) => {results});
  // };

  // const onKeyDown = (event) => {
  //   if (event.keyCode === 13) {
  //     onSearch();
  //   }
  // };

  return (
    <div>
      <Row>
        <Col>
          <h1>Search Your City</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormControl
            placeholder="Enter City"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            onKeyDown={onKeyDown}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={() => onSearch(city)}>Check Weather</Button>
        </Col>
      </Row>
    </div>
  );
};

export default CitySelector;
