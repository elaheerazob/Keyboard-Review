import React from "react";
import { CardGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useKeybords from "../hooks/useKeybords";
import img from "../Image/leftHeader.jpg";
import Keybord from "../Keybord/Keybord";
import "./Home.css";

const Home = () => {
  const [keybords,setKeybords] =useKeybords([]);
  const navigate = useNavigate();
  return (
    <section>
      <div className="row bg-secondary ">
        <div className="col-md-6 ">
          <div className="home-h1 text-light">
          <h1>Keyboard Review</h1>
          <p>
            A keyboard is for putting information including letters, words and
            numbers into your computer. You press the individual buttons on the
            keyboard when you type. The number keys across the top of the
            keyboard are also found on the right of the keyboard. The letter
            keys are in the centre of the keyboard.
          </p>
          </div>
        </div>
        <div className="col-md-6">
          <img className="rounded w-75 my-4" src={img} alt="" />
        </div>
      </div>
      <h1 className="mt-3">Customer Review</h1>
      <CardGroup className="p-5 ">
        {
          keybords.slice(0,3).map(keybordOne => <Keybord key={keybordOne.id} keybordOne={keybordOne}></Keybord>)
        }
        
      </CardGroup>
      <div className="mb-4" >
      <button onClick={() => navigate("/review")} className="px-5 btn btn-success">See all</button>
      </div>
    </section>
  );
};

export default Home;
