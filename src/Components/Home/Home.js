import React from "react";
import img from "../Image/leftHeader.jpg";
import "./Home.css";

const Home = () => {
  return (
    <section>
      <div className="row">
        <div className="col-md-6 home-h1">
          <h1>Review Our Product</h1>
          <p>
            A keyboard is for putting information including letters, words and
            numbers into your computer. You press the individual buttons on the
            keyboard when you type. The number keys across the top of the
            keyboard are also found on the right of the keyboard. The letter
            keys are in the centre of the keyboard.
          </p>
        </div>
        <div className="col-md-6">
          <img className="rounded" src={img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
