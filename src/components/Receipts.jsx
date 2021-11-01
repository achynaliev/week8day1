import React, { useState } from "react";
import Ingredients from "./Ingredients";

const Receipts = () => {
  const [meal, setMeal] = useState("");
  console.log(meal);

  return (
    <div>
      <input
        type="radio"
        value="Manty"
        name="gender"
        onChange={() => setMeal("Manty")}
      />{" "}
      Manty
      <input
        type="radio"
        value="Plov"
        name="gender"
        onChange={() => setMeal("Plov")}
      />{" "}
      Plov
      <input
        type="radio"
        value="Beshbarmak"
        name="gender"
        onChange={() => setMeal("Beshbarmak")}
      />{" "}
      Beshbarmak
      <Ingredients meals={meal} />
    </div>
  );
};

export default Receipts;
