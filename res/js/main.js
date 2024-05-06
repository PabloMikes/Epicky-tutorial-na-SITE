const start = document.getElementById("start");
const question = document.getElementById("question");
const image = document.getElementById("image");
const counter = document.getElementById("counter");
const package = document.getElementsByClassName("package");
const rating = document.getElementsByClassName("rating");

let packageArray = [true, true, true, true, true, true, true, true, true, true];

let streak = 0;

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

window.onload = () => {
  for (let i = 0; i < package.length; i++) {
    package[i].addEventListener("click", state(i));
  }
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
  if (streak < 0) {
    streak = 0;
  } else {
    streak++;
  }
  if(streak >= 10){
    image.style.backgroundImage = "url(../res/images/chrisSTREAK.jpg)"
  }
  else if(streak >= 5){
    image.style.backgroundImage = `url(../res/images/chrishappier.png)`
  }
  counter.innerHTML = `Streak: ${streak}`;
  rollQuestion();
};
rating[1].onclick = () => {
  if (streak > 0) {
    streak = 0;
    image.style.backgroundImage = `url(../res/images/chrisneutral.jpg)`
  } else {
    streak--;
  }
  counter.innerHTML = `Streak: ${streak}`;
  rollQuestion();
};
