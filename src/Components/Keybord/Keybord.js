import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React from "react";
import { Card } from "react-bootstrap";

const Keybord = ({keybordOne}) => {
    const {name,review,img} = keybordOne;
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {review}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Keybord;
