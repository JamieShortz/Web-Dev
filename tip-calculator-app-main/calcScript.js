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

let billAmount = 0;
let tipPercentage = 0;
let customTipAmt = 0;

function tipButtonClick(e){
      tipSelect.forEach(btn => btn.classList.remove('active'));

}
