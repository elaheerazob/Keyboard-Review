import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card } from "react-bootstrap";
import './Keybord.css'
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Keybord = ({keybordOne}) => {
    const {name,review,img} = keybordOne;
  return (
    <Card className="bg-success text-white bg-opacity-75">
      <Card.Img className="w-50 mx-auto rounded mt-2" variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {review.slice(0,100)}
          <div>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <p>(4.0)</p>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Keybord;
