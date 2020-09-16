const bill = document.getElementById("bill-money");
const customerNumber = document.getElementById("customer");
const calcButton = document.getElementById("calc");
const tipPercent = document.getElementById("tipPercent");

//function to calculate the tip
function calculateTip(){
  const billInput = parseInt(bill.value);
  const customerInput = parseInt(customerNumber.value);
  const tipInput =  parseInt(tipPercent.value);
  const totalAmount = billInput+(billInput*tipInput/100)
  const perGuestAmount = totalAmount/customerInput;

  document.getElementById("billAmount").innerText = `Total bill: ${billInput}`
  document.getElementById("guestAmount").innerText = `Total guests: ${customerInput}`
  document.getElementById("totalBillAmount").innerText = `Total bill including tip: ${totalAmount}`
  document.getElementById("perGuestAmount").innerText = `Total for each guest is: ${perGuestAmount}`
}

//adding event Listeners
bill.addEventListener("change", calculateTip);
customerNumber.addEventListener("change", calculateTip);
tipPercent.addEventListener("change",calculateTip)
calcButton.addEventListener("click", (e) => {
  e.preventDefault();
  calculateTip();
});
