import { Modal } from "./modal.js";

export function calculateIMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

export function notNumber(value) {
  return isNaN(value) || value == "";
}

export function displayResultMessage(result) {
  Modal.message.innerHTML = `IMC é de ${result}`;
  Modal.open();
}
