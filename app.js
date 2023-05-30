var mcqs = [
  {
    question: "Q1: What is Full Form of HTML?",
    opt: [
      "Hyper Text Markup Language",
      "High Text Market Language",
      "Higher Text manager Language",
      "High Texting markup Level",
    ],
    ans: "Hyper Text Markup Language",
  },
  {
    question: "Q2:Which tag is used to create a hyperlink in HTML?",
    opt: ["<h1>", "<a>", "<p>", "<div>"],
    ans: "<a>",
  },
  {
    question: "Q3:Which tag is used to define an unordered list in HTML?",
    opt: ["<ol>", "<li>", "<script.src>", "<ul>"],
    ans: "<ul>",
  },
  {
    question: "Q4:What is the correct way to include an image in HTML?",
    opt: [
      "<image src='image.jpg'>",
      "<img src='image.jpg'>",
      "<img href='image.jpg'>",
      "<image href='image.jpg'>",
    ],
    ans: "<img src='image.jpg'>",
  },
  {
    question:
      "Q5:Which attribute is used to specify the URL of a linked resource in HTML?",
    opt: ["src", "link", "<script.src>", "href"],
    ans: "href",
  },
  {
    question: "Q6:Which tag is used to define a table row in HTML?",
    opt: ["<tr>", "<td>", "<th>", "<table>"],
    ans: "<tr>",
  },
  {
    question: "Q7:What is the correct HTML element for inserting a line break?",
    opt: ["<break>", "<br>", "<lb>", "<newline>"],
    ans: "<br>",
  },
  {
    question: "Q8:Which tag is used to define a section of an HTML document?",
    opt: ["<div>", "<article>", "<container>", "<section>"],
    ans: "<section>",
  },
  {
    question: "Q9:What is the correct HTML element for the largest heading?",
    opt: ["<h1>", "<heading>", "<h6>", "<head>"],
    ans: "<h1>",
  },
  {
    question: "Q10:Which tag is used to embed a video in HTML?",
    opt: ["<media>", "<embed>", "<video>", "<movie>"],
    ans: "<embed>",
  },
 
];

var userName = document.getElementById("name");
var userEmail = document.getElementById("email");
var startBtn = document.querySelector(".start-btn");
var quizBox = document.querySelector(".quiz-box");
var userDetails = document.querySelector(".userDetail");
var questionElement = document.querySelector("#questionElement");
var options = document.querySelector(".options");
var nextBtn = document.querySelector("#nextBtn");
var display = document.querySelector(".percentage");
var circle = document.querySelector(".circle");
var message = document.getElementById("message");
var quizNumber = document.querySelector("#quizNumber")
var userForm ;
var marks = 0
var index = 0;

//////////////////// For Input focus/////////////////////
function inputFocus(element) {
  element.nextElementSibling.style.top = "-32%";
  element.nextElementSibling.style.left = "1.5%";
  element.nextElementSibling.style.fontSize = "13px";
  element.nextElementSibling.style.color = "#4a87f1";
}

//////////////////// For Input Blur/////////////////////
function inputBlur(element) {
  if (element.value !== "") {
    element.nextElementSibling.style.color = "#666";
    userName.style.borderColor = "#dee2e6"
    userEmail.style.borderColor = "#dee2e6"
  } else {
    element.nextElementSibling.style.top = "15%";
    element.nextElementSibling.style.left = "2%";
    element.nextElementSibling.style.fontSize = "16px";
    element.nextElementSibling.style.color = "#666";
  }
}
//////////////////// For User Details/////////////////////
function userDetail(element) {
   userForm = element
  if (!userName.value ){
    userName.style.borderColor = "red"
    return;
  }else if(!userEmail.value){
    userEmail.style.borderColor = "red"
    return;
  }
  userDetails.firstElementChild.innerHTML = userName.value.trim().toUpperCase();
  userDetails.lastElementChild.innerHTML = userEmail.value.trim();
  element.style.display = "none";
  startBtn.style.display = "block";
  userName.value = ""
  userEmail.value = ""
}

////////////////quiz function////////////////

function quiz() {
  questionElement.innerHTML = mcqs[index].question;
  quizNumber.innerHTML = (index + 1) + "/" + mcqs.length
  for (var txt of mcqs[index].opt) {
    var buttonElement = document.createElement("button");
    buttonElement.innerText = txt;
    buttonElement.setAttribute("onclick", "mcqsAns(this)");
    options.appendChild(buttonElement);
  }
}

//////////////////// For Start Quiz Button/////////////////////
function startQuiz() {
  startBtn.style.display = "none";
  quizBox.style.display = "block";
  quiz();
}

//////////////////// check answer/////////////////////
function mcqsAns(element) {
  options.style. pointerEvents = "none";
  if (element.innerText == mcqs[index].ans) {
    element.style.backgroundColor = "#6bd96b";
    nextBtn.style.display = "block";
    marks += 2
  } else {
    for(var txt of options.children){
        if(txt.innerText == mcqs[index].ans){
            txt.style.backgroundColor = "#6bd96b";
        }
    }
    element.style.backgroundColor = "rgb(239 82 82 / 80%)";
    nextBtn.style.display = "block";
  }

}
//////////////////// call function/////////////////////
function callMcqs(){
    options.innerHTML = ""
    options.style.pointerEvents = "auto";
    nextBtn.style.display = "none"
    ++index
    if(index == mcqs.length){
      questionElement.innerHTML = ""
      var totalMarks = (marks / 20) * 100;
      display.innerHTML = totalMarks + "%";
      if (totalMarks >= 70) {
        circle.style.stroke = "green";
        message.innerHTML = "Passed";
      }
      circle.attributes[1].nodeValue = totalMarks + "," + 100;
      display.parentNode.parentNode.parentNode.style.display = "grid";
      quizNumber.style.display = "none"
      timerDisplay.style.display = "none"
      return
    }
    quiz()
}

//////////////////// function for reset/////////////////////
function reset(){
  circle.style.stroke = "red";
  index = 0
  marks = 0
  quizNumber.style.display = "block"
  quizBox.style.display = "none"
  display.parentNode.parentNode.parentNode.style.display = "none";
  userForm.style.display = "block";
  timerDisplay.style.display = "block"
}