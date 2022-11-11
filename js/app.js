"use strict";
// Selecting the DOM elements
const percentageBtns = document.querySelectorAll(".percentage");
const customInput = document.querySelector("#custom");
const activeEl = document.getElementsByClassName("active");
const people = document.querySelector("#people");
const tipEl = document.querySelector("#tipAmount");
const totalEl = document.querySelector("#totalAmount");
const initialTip = document.querySelector("#initial-tip");
const resetBtn = document.querySelector("#reset");
const bill = document.getElementById("bill");

// Setting active class
percentageBtns.forEach((item) => {
  item.addEventListener("click", function () {
    for (let i = 0; i < activeEl.length; i++) {
      activeEl[i].classList.replace("active", "hover");
    }
    item.classList.add("active");
    item.classList.remove("hover");
  });
});

// Get the values from user input
let billValue = 0;
let customPercentage = "";
let tipPercentage = 15;
let numOfPeople = 1;
let tip = 0;
let sum = 0;
let total = 0;
bill.addEventListener("input", getBillValue);
function getBillValue() {
  billValue = parseInt(bill.value);
  calcTip();
}

percentageBtns.forEach((item) => {
  item.addEventListener("click", function () {
    tipPercentage = Number(item.textContent.trim().replace("%", ""));
    calcTip();
  });
});

customInput.addEventListener("input", getCustomPercentage);
function getCustomPercentage() {
  tipPercentage = parseInt(customInput.value);
  calcTip();
}

people.addEventListener("input", getNumOfPeople);
function getNumOfPeople() {
  numOfPeople = parseInt(people.value);
  calcTip();
}

// Calculate the tip
function calcTip() {
  if (tipPercentage >= 1 || billValue >= 1) {
    tip = numOfPeople ? (tipPercentage / 100) * billValue : 0;
    tipEl.textContent = `$${(Math.round(tip * 100) / 100 / numOfPeople).toFixed(
      2
    )}`;
    total = numOfPeople ? (tip + billValue) / numOfPeople : 0;
    totalEl.textContent = `$${(Math.round(total * 100) / 100).toFixed(2)}`;
  }
}

// Reset functionality
resetBtn.addEventListener("click", function () {
  billValue = 0;
  tipPercentage = 15;
  customPercentage = "";
  numOfPeople = 1;
  bill.value = "";
  customInput.value = "";
  people.value = "";
  tipEl.textContent = "$0.00";
  totalEl.textContent = "$0.00";
  for (let i = 0; i < activeEl.length; i++) {
    activeEl[i].classList.replace("active", "hover");
  }
  initialTip.classList.replace("hover", "active");
});
