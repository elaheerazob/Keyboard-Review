import React from "react";
import {CardGroup } from "react-bootstrap";
import useKeybords from "../hooks/useKeybords";
import Keybord from "../Keybord/Keybord";

const Review = () => {
  const [keybords, setKeybords] = useKeybords([]);
  return (
    <CardGroup>
      {
          keybords.map(keybordOne => <Keybord key={keybordOne.id} keybordOne={keybordOne}></Keybord>)
      }
    </CardGroup>
  );
};

export default Review;
