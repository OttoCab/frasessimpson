import React from "react";
import Card from "react-bootstrap/Card";

//Opcion para importar varios cosas
//import { Card, Button } from "react-bootstrap";

const Frase = (props) => {
  return (
    <Card className="w-100 my-5">
      <Card.Body>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <img src={props.personaje.image} alt={props.personaje.character} />
          </div>
          <div className="col-sm-12 col-md-8">
            <Card.Title>{props.personaje.character}</Card.Title>
            <Card.Text>
              <h3>{props.personaje.quote}</h3>
            </Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Frase;
