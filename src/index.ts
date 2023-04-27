import { add } from "./utils";
import "./index.css";

function init() {
  const form = document.querySelector("form");
  form?.addEventListener("submit", submitHandler);
}

function submitHandler(e: Event) {
  e.preventDefault();
  const a = document.querySelector("input[name='firstnumber']") as HTMLInputElement;
  const b = document.querySelector("input[name='secondnumber']") as HTMLInputElement;
  const result = add(Number(a.value), Number(b.value));
  const resultElement = document.querySelector("p");
  if (resultElement) {
    resultElement.textContent = result.toString();
  }
}

init();
