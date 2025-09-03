function calculateEMI() {
  let amount = document.getElementById('amount').value;
  let rate = document.getElementById('rate').value;
  let time = document.getElementById('time').value;

  if (amount === '' || rate === '' || time === '') {
    document.getElementById('result').innerText = "Please fill all fields.";
    return;
  }

  amount = parseFloat(amount);
  rate = parseFloat(rate) / 12 / 100; // monthly rate
  time = parseFloat(time) * 12; // months

  let emi = (amount * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);

  document.getElementById('result').innerText = "Your EMI is: ₹" + emi.toFixed(2);
}