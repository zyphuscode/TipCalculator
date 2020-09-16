const bill = document.getElementById("bill-money");
const customerNumber = document.getElementById("customer");
const rateEL = document.getElementById("rate");
const calcButton = document.getElementById("calc");
const resultDisplay = document.getElementById("result");
const tipPercent = document.getElementById("tipPercent");
const loader = document.getElementById("loader");

//function to calculate the tip
function calculateTip(){
  const billInput = bill.value;
  console.log(billInput);
  const customerInput = customerNumber.value;
  console.log(customerInput); 

  const tipInput =  tipPercent.value;
  console.log(tipInput);
  const newSum = (tipInput + billInput) / 100;


  
  rateEL.innerText = `Your Total Tip According to your bill  $${billInput} and ${customerInput} guests is`
  resultDisplay.innerText = "$" + (newSum/customerInput).toFixed(2);
}



//adding event Listeners
bill.addEventListener("change", calculateTip);
customerNumber.addEventListener("change", calculateTip);
calcButton.addEventListener("click", (e) => {
  e.preventDefault();
  calculateTip();
});
