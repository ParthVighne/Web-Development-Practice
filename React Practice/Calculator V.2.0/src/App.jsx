/* eslint-disable no-unused-vars */
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    console.log("button clicked! " + buttonText);
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      let answer = eval(calVal);
      setCalVal(answer);
    } else {
      let newButtonText = calVal + buttonText;
      setCalVal(newButtonText);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
