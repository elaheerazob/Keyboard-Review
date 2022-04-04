import React from "react";
import {CardGroup } from "react-bootstrap";
import useKeybords from "../hooks/useKeybords";
import Keybord from "../Keybord/Keybord";

const Review = () => {
  const [keybords, setKeybords] = useKeybords([]);
  return (
    
    <section>
      <h1 className="mt-3">All Customer Reviews</h1>
      <CardGroup className="mt-3 p-4">
      
      {
          keybords.map(keybordOne => <Keybord key={keybordOne.id} keybordOne={keybordOne}></Keybord>)
      }
    </CardGroup>
    </section>
  );
};

export default Review;
