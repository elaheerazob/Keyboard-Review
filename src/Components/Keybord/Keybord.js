import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React from "react";
import { Card } from "react-bootstrap";

const Keybord = ({keybordOne}) => {
    const {name,review,img} = keybordOne;
  return (
    <Card className="bg-info m-3">
      <Card.Img className="w-50 mx-auto rounded mt-2" variant="top" src={img} />
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
