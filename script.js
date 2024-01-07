const button = document.querySelector("button");

const requiredDay = document.querySelector("#requiredDay");
const requiredMonth = document.querySelector("#requiredMonth");
const requiredYear = document.querySelector("#requiredYear");
console.log(requiredDay, requiredMonth, requiredYear);
const validDD = document.querySelector("#validDay");
const validMM = document.querySelector("#validMonth");
const validYY = document.querySelector("#validYear");

const labelDay = document.querySelector("#labelDay");
const labelMonth = document.querySelector("#labelMonth");
const labelYear = document.querySelector("#labelYear");

const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");

const inputs = document.querySelectorAll("input");

const outputDay = document.getElementById("outputDay");
const outputMonth = document.getElementById("outputMonth");
const outputYear = document.getElementById("outputYear");

const listDaysinMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const errorMessages = {
  required: "This field is required",
  invalid: (field) => `Must be a valid ${field}`,
  range: "Must be in the past",
};
inputs.forEach((ele) => {
  ele.addEventListener("focus", (event) => {
    event.target.value = "";
    reset();
  });
});

function reset() {
  outputDay.innerText = "--";
  outputMonth.innerText = "--";
  outputYear.innerText = "--";

  requiredDay.classList.remove("red");
  requiredMonth.classList.remove("red");
  requiredYear.classList.remove("red");

  inputDay.classList.remove("red");
  inputMonth.classList.remove("red");
  inputYear.classList.remove("red");

  labelDay.classList.remove("red");
  labelMonth.classList.remove("red");
  labelYear.classList.remove("red");

  validDD.classList.remove("red");
  validMM.classList.remove("red");
  validYY.classList.remove("red");
}

function calculateOutputAge() {
  const birthDayValue = parseInt(inputDay.value);
  const birthMonthValue = parseInt(inputMonth.value);
  const birthYearValue = parseInt(inputYear.value);

  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  //   The getMonth() method of Date instances returns the month for this date according to local time,
  //   as a zero-based value (where zero indicates the first month of the year).
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  reset();
  let hasError = false;

  //if the birthDate is in future
  const inFuture =
    new Date().getTime() <
    new Date(birthYearValue, birthMonthValue - 1, birthDayValue).getTime();

  //checking for field empty in day, month & year fields
  if (!birthDayValue) {
    requiredDay.classList.toggle("red");
    inputDay.classList.toggle("red");
    labelDay.classList.toggle("red");
    hasError = true;
  }

  if (!birthMonthValue) {
    requiredMonth.classList.toggle("red");
    inputMonth.classList.toggle("red");
    labelMonth.classList.toggle("red");
    hasError = true;
  }

  if (!birthYearValue) {
    requiredYear.classList.toggle("red");
    inputYear.classList.toggle("red");
    labelYear.classList.toggle("red");
    hasError = true;
  }
  console.log(requiredDay, requiredMonth, requiredYear);

  //checking for day value within range
  if (birthDayValue > 31 || birthDayValue < 1) {
    if (requiredDay.classList.contains("red")) {
      requiredDay.classList.remove("red");
      inputDay.classList.toggle("red");
      labelDay.classList.toggle("red");
    }
    //  validDD.classList.toggle("red");
    validDD.classList.toggle("red");
    inputDay.classList.toggle("red");
    labelDay.classList.toggle("red");
    hasError = true;
  }
  //checking for month value within range
  if (
    birthMonthValue > 12 ||
    birthMonthValue < 1 ||
    (birthMonthValue > currentMonth && inFuture)
  ) {
    if (requiredMonth.classList.contains("red")) {
      requiredMonth.classList.remove("red");
      inputMonth.classList.toggle("red");
      labelMonth.classList.toggle("red");
    }

    validMM.classList.toggle("red");
    inputMonth.classList.toggle("red");
    labelMonth.classList.toggle("red");
    hasError = true;
  }
  //checking for year value within current year
  if (birthYearValue > currentYear || birthYearValue < 1990) {
    if (requiredYear.classList.contains("red")) {
      requiredYear.classList.remove("red");
      inputYear.classList.toggle("red");
      labelYear.classList.toggle("red");
    }
    validYY.classList.toggle("red");
    labelYear.classList.toggle("red");
    inputYear.classList.toggle("red");
    hasError = true;
  }
  if (hasError) return; // if there is a error return

  //checking for leap year
  if (
    (birthYearValue % 4 === 0 && birthYearValue % 100 === 0) ||
    birthYearValue % 400 === 0
  ) {
    listDaysinMonths[1] = 29; // if its leap year, then feb has 29 days
  }

  //check if the day is within the range of listDaysinMonths array
  if (
    birthDayValue < 1 ||
    birthDayValue > listDaysinMonths[birthMonthValue - 1]
  ) {
    validDD.classList.toggle("red");
    inputDay.classList.toggle("red");
    labelDay.classList.toggle("red");
    return;
  }

  reset();

  //if all the values are available

  if (birthDayValue && birthMonthValue && birthYearValue) {
    outputDay.innerText = "--";
    outputMonth.innerText = "--";
    outputYear.innerText = "--";
    const birthDate = new Date(
      inputYear.value,
      inputMonth.value - 1,
      inputDay.value,
    );

    let ageInDays = currentDay - birthDate.getDate();
    let ageInMonth = currentMonth - birthDate.getMonth();
    let ageInYears = currentYear - birthDate.getFullYear();

    if (ageInMonth < 0 || (ageInMonth === 0 && ageInDays < 0)) {
      ageInYears--;
      ageInMonth += 12;
    }

    if (ageInDays < 0) {
      let daysInLastMonth = new Date(currentYear, currentMonth, 0).getDate();
      ageInDays += daysInLastMonth;
      ageInMonth--;
    }

    outputYear.innerText = ageInYears;
    outputMonth.innerText = ageInMonth;
    outputDay.innerText = ageInDays;
  }
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  calculateOutputAge();
});
