const start = document.getElementById("start");
const question = document.getElementById("question");
const accuracyCounter = document.getElementById("accuracyCounter");
const mark = document.getElementById("mark");
const images = document.getElementsByClassName("images");
const counter = document.getElementById("counter");
const package = document.getElementsByClassName("package");
const rating = document.getElementsByClassName("rating");

let packageArray = [true, true, true, true, true, true, true, true, true, true];

let streak = 0;
let numberOfQuestions = 0;
let accuracy = 0;
let avg = 0;

start.onclick = () => {
  rating[0].style.display = "block";
  rating[1].style.display = "block";
  start.style.display = "none";
  rollQuestion();
};

let randomQuestion = 0;

async function rollQuestion() {
  let randomPackage = Math.floor(Math.random() * 10);
  let isTrue = true;
  while (isTrue) {
    if (packageArray[randomPackage] == true) {
      isTrue = false;
    } else {
      randomPackage = Math.floor(Math.random() * 10);
    }
  }
  try {
    const file = await fetch("./res/JSON/questions.JSON");
    const data = await file.json();
    switch (randomPackage) {
      case 0:
        randomQuestion = Math.floor(Math.random() * data.one[0].count + 1);
        console.log("Okruh: " + randomPackage);
        console.log("Otazecka: " + randomQuestion);
        question.innerHTML = data.one[randomQuestion].question;
        break;
      case 1:
        randomQuestion = Math.floor(Math.random() * data.two[0].count + 1);
        console.log("Okruh: " + randomPackage);
        console.log("Otazecka: " + randomQuestion);
        question.innerHTML = data.two[randomQuestion].question;
        break;
      case 2:
        randomQuestion = Math.floor(Math.random() * data.three[0].count + 1);
        console.log("Okruh: " + randomPackage);
        console.log("Otazecka: " + randomQuestion);
        question.innerHTML = data.three[randomQuestion].question;
        break;
      case 3:
        randomQuestion = Math.floor(Math.random() * data.four[0].count + 1);
        console.log("Okruh: " + randomPackage);
        console.log("Otazecka: " + randomQuestion);
        question.innerHTML = data.four[randomQuestion].question;
        break;
      case 4:
        randomQuestion = Math.floor(Math.random() * data.five[0].count + 1);
        console.log("Okruh: " + randomPackage);
        console.log("Otazecka: " + randomQuestion);
        question.innerHTML = data.five[randomQuestion].question;
        break;
      case 5:
        randomQuestion = Math.floor(Math.random() * data.six[0].count + 1);
        console.log("Okruh: " + randomPackage);
        console.log("Otazecka: " + randomQuestion);
        question.innerHTML = data.six[randomQuestion].question;
        break;
      case 6:
        randomQuestion = Math.floor(Math.random() * data.seven[0].count + 1);
        console.log("Okruh: " + randomPackage);
        console.log("Otazecka: " + randomQuestion);
        question.innerHTML = data.seven[randomQuestion].question;
        break;
      case 7:
        randomQuestion = Math.floor(Math.random() * data.eight[0].count + 1);
        console.log("Okruh: " + randomPackage);
        console.log("Otazecka: " + randomQuestion);
        question.innerHTML = data.eight[randomQuestion].question;
        break;
      case 8:
        randomQuestion = Math.floor(Math.random() * data.nine[0].count + 1);
        console.log("Okruh: " + randomPackage);
        console.log("Otazecka: " + randomQuestion);
        question.innerHTML = data.nine[randomQuestion].question;
        break;
      case 9:
        randomQuestion = Math.floor(
          Math.random() * data.twentyfive[0].count + 1
        );
        console.log("Okruh: " + randomPackage);
        console.log("Otazecka: " + randomQuestion);
        question.innerHTML = data.twentyfive[randomQuestion].question;
        break;
    }
  } catch (err) {
    console.log(err);
  }
}

function proposedMark() {
  numberOfQuestions++;
  avg = accuracy / numberOfQuestions;
  accuracyCounter.innerHTML = "Accuracy: " + Math.floor(avg) + "%";
  if (avg >= 90) {
    mark.innerHTML = "Mark: " + 1;
  } else if (avg >= 80) {
    mark.innerHTML = "Mark: " + 2;
  } else if (avg >= 70) {
    mark.innerHTML = "Mark: " + 3;
  } else if (avg >= 60) {
    mark.innerHTML = "Mark: " + 4;
  } else {
    mark.innerHTML = "Mark: " + 5;
  }
}

window.onload = () => {
  for (let i = 0; i < package.length; i++) {
    package[i].addEventListener("click", state(i));
  }
  images[0].style.display = "block";
};

function state(param) {
  return function () {
    if (packageArray[param] == true) {
      packageArray[param] = false;
      package[param].style.fontWeight = "lighter";
      package[param].style.backgroundColor = "red";
    } else {
      packageArray[param] = true;
      package[param].style.fontWeight = "bold";
      package[param].style.backgroundColor = "green";
    }
  };
}

rating[0].onclick = () => {
  accuracy += 100;
  proposedMark();
  if (streak < 0) {
    streak = 0;
  } else {
    streak++;
  }
  if (streak >= 10) {
    images[2].style.display = "block";
    images[1].style.display = "none";
  } else if (streak >= 5) {
    images[1].style.display = "block";
    images[0].style.display = "none";
  }
  counter.innerHTML = `Streak: ${streak}`;
  rollQuestion();
};
rating[1].onclick = () => {
  numberOfQuestions++;
  proposedMark();
  if (streak > 0) {
    streak = 0;
    images[2].style.display = "none";
    images[1].style.display = "none";
    images[0].style.display = "block";
  } else {
    streak--;
  }
  counter.innerHTML = `Streak: ${streak}`;
  rollQuestion();
};
