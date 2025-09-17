// Input
let bill = document.getElementById("amount");
let numPpl = document.getElementById("number");
// Buttons
let tipSelect = document.querySelectorAll("tipBtn");
let customPer = document.getElementById("Custom");
let resetButton = document.getElementById("reset");
// Results
let tipCount = document.getElementById("tipCount");
let totalCount = document.getElementById("totalCount");

bill.addEventListener('change', billEntry);
numPpl.addEventListener('change', pplEntry);
tipBtn.addEventListener('click', tipButton);
customPer.addEventListener('change', custEntry);
resetButton.addEventListener('click', resetCalc);

//let billAmount = 0;
//let tipPercentage = 15;
let customTipPercentage = 15;
let isCustomTip = false;

function calculateTip(billAmount, tipPercentage, numPpl = 1) {
      // Input Validation
      if(isNaN(billAmount) || billAmount <= 0) {
            return null;
      }

      if(isNaN(tipPercentage) || tipPercentage < 0) {
            tipPercentage = 0;
      }

      if(isNaN(numPpl) || numPpl < 1) {
            numPpl = 1;
      }

      // Calculations
      const tipAmount = billAmount * (tipPercentage / 100);
      const totalCount = billAmount + tipAmount;
      const perPerson = totalCount / numPpl;


}