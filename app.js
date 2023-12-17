1; ////////////////////////////

let number1_1 = document.getElementById("input1_1");

function showResult1() {
  let num = Number(number1_1.value);
  let result = factorial(num);
  let paragraph = document.createElement("p");
  result1.textContent = result;
  document.body.append(paragraph);
}

function factorial(n) {
  let answer = 1;

  if (n === 0) return 1;
  for (let i = 2; i <= n; i++) answer = answer * i;
  return answer;
}
2; ///////////////////////////////
let number2_1 = document.getElementById("input2_1");
let number2_2 = document.getElementById("input2_2");

function showResult2() {
  let num1 = Number(number2_1.value);
  let num2 = Number(number2_2.value);
  let result = stepen(num1, num2);
  let paragraph = document.createElement("p");
  result2.textContent = result;
  document.body.append(paragraph);
}

function stepen(n1, n2) {
  let result = 1;
  for (let i = 0; i < Math.abs(n2); i++) {
    result *= n1;
  }
  return result;
}

3; ////////////////////////////////
let number3_1 = document.getElementById("input3_1");

function showResult3() {
  let num = Number(number3_1.value);
  let result = minDelitel(num);
  let paragraph = document.createElement("p");
  result3.textContent = result;
  document.body.append(paragraph);
}

function minDelitel(num) {
  let val;
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      val = i;
      break;
    }
  }
  return val;
}

4; //////////////////////////////////
let number4_1 = document.getElementById("input4_1");

function showResult4() {
  let num = Number(number4_1.value);
  let result = allDelitel(num);
  let paragraph = document.createElement("p");
  result4.textContent = result;
  document.body.append(paragraph);
}
function allDelitel(num) {
  let divisors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisors.push(i);
      console.log(divisors);
    }
  }
  return divisors;
}
5; //////////////////////////////////////
let number5_1 = document.getElementById("input5_1");

function showResult5() {
  let num = Number(number5_1.value);
  let result = SumNatural(num);
  let paragraph = document.createElement("p");
  result5.textContent = result;
  document.body.append(paragraph);
}
function SumNatural(num) {
  let summa = 0;
  for (let i = 1; i <= num; i++) {
    summa += i;
  }
  return summa;
}
6; ///////////////////////////////////////
let number6_1 = document.getElementById("input6_1");

function showResult6() {
  let num = Number(number6_1.value);
  let result = SumKvadrat(num);
  let paragraph = document.createElement("p");
  result6.textContent = result;
  document.body.append(paragraph);
}
function SumKvadrat(num) {
  let summa = 0;
  for (let i = 1; i <= num; i++) {
    summa += i * i;
  }
  return summa;
}
7; ////////////////////////////////////////////
let number7_1 = document.getElementById("input7_1");

function showResult7() {
  let num = Number(number7_1.value);
  let result = Prostoe(num);
  let paragraph = document.createElement("p");
  result7.textContent = result;
  document.body.append(paragraph);
}

function Prostoe(num) {
  let otvet = "Да";
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      otvet = "Нет";
    } else {
      otvet;
    }
  }
  return otvet;
}
