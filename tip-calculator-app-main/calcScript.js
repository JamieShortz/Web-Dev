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

      return {
            billAmount: parseFloat(billAmount.toFixed(2)),
            tipPercentage: parseFloat(tipPercentage.toFixed(1)),
            tipAmount: parseFloat(tipAmount.toFixed(2)),
            totalCount: parseFloat(totalCount.toFixed(2)),
            numPpl: numPpl,
            perPerson: parseFloat(perPerson.toFixed(2))
      };

}

// Button event handler for tip percentage selection
function selectTipPercentage(percentage, buttonElement) {
      // Update global state
      customTipPercentage = percentage;
      isCustomTip = false;

      //Update button visual states
      clearActiveButtons();
      buttonElement.classList.add('active');

      //Hide custom input
      hideCustomTipInput();

      //Trigger calculation
      handleCalculation();
}

// Handle custom tip button click
function showCustomTipInput(buttonElement) {
      // Upddate button states
      clearActiveButtons();
      buttonElement.classList.add('active');

      // Show custom input
      const customInput = document.getElementById('Custom');
      customInput.classList.remove('hidden');
      customInput.focus();

      // Set flag
      isCustomTip = true;
}

function handleCustomTipInput(){
      if (isCustomTip) {
            const customValue = parseFloat(document.getElementById('Custom').value
            ) || 0;
            currentTipPercentage = customValue;
            handleCalculation();
      }
}