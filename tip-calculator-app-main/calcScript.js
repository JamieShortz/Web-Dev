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
let tipPercentage = 15;
let customTipAmt = 0;

function tipButtonClick(e){
      tipSelect.forEach(btn => btn.classList.remove('active'));
}

function setBillAmount(amount){
      billAmount = parseFloat(amount) || 0;
}

function setTipPercentage(percentage){
      tipPercentage = parseFloat(percentage) || 15;
}

function setCustomTipAmt(amount){
      customTipAmt = parseFloat(amount) || 0;
}

function calculate(){
      const tipAmount = customTipAmt || (billAmount *(tipPercentage / 100));
      const totalAmount = billAmount + tipAmount;
      return {
            bill: billAmount,
            tip: tipAmount,
            total: totalAmount,
            tipPercentage: tipPercentage
      };
}

function split(numberOfPeople){
      const result = calculate();
      const perPerson = result.total / numberOfPeople;

      return {
            ...result,
            numberOfPeople: numberOfPeople,
            perPerson: perPerson
      };
}

handleTipButtonClick(e){
      // Removes active class from buttons
      tipSelect.forEach(btn => btn.classList.remove('active'));

      // Add active class to clicked button
      e.target.classList.add('active');

      const tipValue = e.target.getAttribute('data-tip');

      if (tipValue === 'custom') {
            //show custom input
            customTipAmt.classList.remove('hidden');
            customTipAmt.focus();
      } else {
            //hide custom input and set percentage
            customTipAmt.classList.add('hidden');
            calculator.setTipPercentage(parseFloat(tipValue));
            
      }
}

calculateTip() {
      const billAmount = parseFloat(billEntry.value) || 0;

}