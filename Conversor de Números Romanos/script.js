document.getElementById("convert-btn").addEventListener("click", function () {
  const numberInput = document.getElementById("number").value.trim();

  if (!numberInput) {
    document.getElementById("output").textContent =
      "Please enter a valid number";
    return;
  }

  const number = parseInt(numberInput);

  if (isNaN(number) || number < 1) {
    document.getElementById("output").textContent =
      "Please enter a number greater than or equal to 1";
    return;
  }

  if (number >= 4000) {
    document.getElementById("output").textContent =
      "Please enter a number less than or equal to 3999";
    return;
  }

  const romanNumeral = convertToRoman(number);
  document.getElementById("output").textContent = romanNumeral;
});

function convertToRoman(num) {
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = "";

  for (let key in romanNumerals) {
    while (num >= romanNumerals[key]) {
      result += key;
      num -= romanNumerals[key];
    }
  }

  return result;
}
