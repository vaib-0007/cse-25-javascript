const numberInput = document.getElementById('numberInput');
const calculateButton = document.getElementById('calculateButton');
const resultDiv = document.getElementById('result');

calculateButton.addEventListener('click', () => {
  const value = parseInt(numberInput.value, 10);
  if (Number.isNaN(value) || value < 1) {
    resultDiv.textContent = 'Please enter a positive integer greater than 0.';
    return;
  }

  let sum = 0;
  for (let i = 2; i <= value; i += 2) {
    sum += i;
  }

  resultDiv.textContent = `The sum of even numbers from 1 to ${value} is ${sum}.`;
});
