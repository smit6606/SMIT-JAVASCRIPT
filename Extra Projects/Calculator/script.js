let display = document.getElementById("display");
let isScientificVisible = false;
let isRadians = true;

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  display.value += operator;
}

function appendDecimal() {
  if (!display.value.includes(".")) {
    display.value += ".";
  }
}

function appendPercentage() {
  display.value = eval(display.value) / 100;
}

function appendFunction(func) {
  if (func === "sin(" || func === "cos(" || func === "tan(") {
    let value = parseFloat(display.value);
    if (!isRadians) {
      value = (value * Math.PI) / 180;
    }
    display.value = Math[func.slice(0, -1)](value);
  } else {
    display.value += func;
  }
}

function clearEntry() {
  display.value = display.value.slice(0, -1);
}

function clearAll() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function toggleFunctions() {
  const scientificButtons = document.querySelector(".scientific-buttons");
  isScientificVisible = !isScientificVisible;
  scientificButtons.classList.toggle("hidden", !isScientificVisible);
}

function toggleRadians() {
  isRadians = !isRadians;
  const radDegButton = document.getElementById("rad-deg");
  radDegButton.textContent = isRadians ? "Rad" : "Deg";
}
