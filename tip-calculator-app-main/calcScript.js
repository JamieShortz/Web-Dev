const bill = document.getElementById("amount");
const numPpl = document.getElementById("number");
const fivePer = document.getElementById("five");
const tenPer = document.getElementById("ten");
const fifthPer = document.getElementById("fifthteen");
const twentyPer = document.getElementById("twentyfive");
const fiftyPer = document.getElementById("fifty");
const customPer = document.getElementById("Custom");
const tipCount = document.getElementById("tipCount");
const totalCount = document.getElementById("totalCount");
const resetButton = document.getElementById("reset");

bill.addEventListener('change', billEntry);
numPpl.addEventListener('change', pplEntry);
fivePer.addEventListener('click', fiveButton);
tenPer.addEventListener('click', tenButton);
fifthPer.addEventListener('click', fifthButton);
twentyPer.addEventListener('click', twentyButton);
fiftyPer.addEventListener('click', fiftyButton);
customPer.addEventListener('change', custEntry);
resetButton.addEventListener('click', resetCalc);

billEntry(bill){
      this.billEntry = parseFloat(bill) ||0;
      return this;
}
