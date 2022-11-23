import { AlertError } from "./alert-error.js";
import { calculateIMC, notNumber, displayResultMessage } from "./utils.js";

/* VARIÁVEIS - VARIABLES*/
const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height);

  if (weightOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }

  const result = calculateIMC(weight, height);
  displayResultMessage(result);
};


form.oninput = () => {
  AlertError.close();
};