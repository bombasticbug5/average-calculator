// average calculator by Mr.V

//event listener
document.getElementById("calc-btn").addEventListener("click", calcaverage);
// Event function
function calcaverage() {
  // input
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let num3 = +document.getElementById("num3").value;
  //process
  let average = (num1 + num2 + num3) / 3;
  let sum = num1 + num2 + num3;
  let product = num1 * num2 * num3;
  let remainder = num1 / num2;
  let power = num1 ** num2;
  let round = num1.toFixed(2);
  let tangent = Math.tan(num3);
  let rand = Math.random() * (num1 + num2);

  //output
  document.getElementById("ave-out").innerHTML = average;
  document.getElementById("nm1").innerHTML = sum;
  document.getElementById("nm2").innerHTML = product;
  document.getElementById("nm3").innerHTML = remainder;
  document.getElementById("nm4").innerHTML = power;
  document.getElementById("nm5").innerHTML = round;
  document.getElementById("nm6").innerHTML = tangent;
  document.getElementById("nm7").innerHTML = rand;
}
