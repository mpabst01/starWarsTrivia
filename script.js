// Quiz question object
var questionsEl = document.getElementById("questions");
var startQuizDiv = document.getElementById("startpage");
var startQuizButton = document.getElementById("startbtn");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var correctAnswer = [];
var queryUrl = "https://swapi.dev/api/";
var currentQuestionIndex = 0
//var thingUrls = ["people/", "films/", "starships/", "transport", "species/", "planets/"];
var quizLightQuestions = [
  {
    question: "What planet does C-3PO call home?",
    choiceA: "Tattooine",
    choiceB: "Alderaan",
    choiceC: "Bespin",
    choiceD: "Naboo",
    correctAnswer: "a",
  triviaURL: "https://swapi.dev/api/planets/1/"
  },
  {
    question: "When was Obi-Wan Kenobi born?",
    choiceA: "57BBY",
    choiceB: "52BBY",
    choiceC: "102BBY",
    choiceD: "204BBY",
    correctAnswer: "a",
   triviaURL: "https://swapi.dev/api/people/10/"
  },
  {
    question: "What planet does Yoda seek refuge from the Dark Side?",
    choiceA: "unknown",
    choiceB: "Dagobah",
    choiceC: "Yavin IV",
    choiceD: "Kamino",
    correctAnswer: "b",
  triviaURL: "https://swapi.dev/api/planets/5/"
  },
  {
    question: "What color are Lando Calrissian's eyes?",
    choiceA: "black",
    choiceB: "hazel",
    choiceC: "brown",
    choiceD: "blue",
    correctAnswer: "c",
  triviaURL: "https://swapi.dev/api/people/25/"
  },
  {
    //q4
    question: "Who is Bail Prestor Organa?",
    choiceA: "Luke's stepfather",
    choiceB: "Han Solo's father",
    choiceC: "A rebel fighter",
    choiceD: "Leia's stepfather",
    correctAnswer: "d",
  triviaURL: "https://swapi.dev/api/people/68/"
  },
  {
    //q5
    question: "What language does Chewbacca speak?",
    choiceA: "Toydarian",
    choiceB: "Neimodian",
    choiceC: "Shyriiwook",
    choiceD: "Huttese",
    correctAnswer: "c",
  triviaURL: "https://swapi.dev/api/species/3/"
  },
  {
    //q6
    question: "Who piloted the Millenium Falcon?",
    choiceA: "Rey",
    choiceB: "Lando Calrissian",
    choiceC: "Han Solo",
    choiceD: "All of the above",
    correctAnswer: "d",
    triviaURL:  "https://swapi.dev/api/transport/10/"
  },
];
var quizDarkQuestions = [
  {
    question: "Where does Wilhuff Tarkin call home?",
    choiceA: "Eriadu",
    choiceB: "Bespin",
    choiceC: "Coruscant",
    choiceD: "Mustafar",
    correctAnswer: "a",
    triviaURL: "https://swapi.dev/api/planets/21/"
  },
  {
    question: "When was Darth Vader born?",
    choiceA: "41.9BBY",
    choiceB: "64BBY",
    choiceC: "200BBY",
    choiceD: "54BBY",
    correctAnswer: "a",
    triviaURL: "https://swapi.dev/api/people/10/"
  },
  {
    question:
      "What planet does Anakin Skywalker seek duel with Obi-Wan Kenobi?",
    choiceA: "unknown",
    choiceB: "Mustafar",
    choiceC: "The Death Star",
    choiceD: "Polis Massa",
    correctAnswer: "b",
    triviaURL: "https://swapi.dev/api/planets/13/"
  },
  {
    question: "What color are Darth Maul's eyes?",
    choiceA: "black",
    choiceB: "brown",
    choiceC: "yellow",
    choiceD: "blue",
    correctAnswer: "c",
    triviaURL:"https://swapi.dev/api/people/44/"
  },
  {
    question: "When was General Grievous born?",
    choiceA: "200BBY",
    choiceB: "82BBY",
    choiceC: "41BBY",
    choiceD: "unknown",
    correctAnswer: "d",
    triviaURL: "https://swapi.dev/api/people/79/"
  },
  {
    question: "How tall is Palpatine?",
    choiceA: "160",
    choiceB: "150",
    choiceC: "170",
    choiceD: "180",
    correctAnswer: "c",
    triviaURL: "https://swapi.dev/api/species/21/"
  },
  {
    question: "How long is the Death Star?",
    choiceA: "300",
    choiceB: "19,000",
    choiceC: "1,600",
    choiceD: "120,000",
    correctAnswer: "d",
    triviaURL: "https://swapi.dev/api/transport/9/"
  },
];

// This function checks the response to each answer
function checkAnswer(answer) {
  correct = quizQuestions[currentQuestionIndex].correctAnswer;
  if (answer === correct && currentQuestionIndex !== finalQuestionIndex) {
    score++;
    console.log("That is Correct!");
    currentQuestionIndex++;
    generateQuizQuestion();
    //display in the results div that the answer is correct.
  } else if (
    answer !== correct &&
    currentQuestionIndex !== finalQuestionIndex
  ) {
    console.log("That is not correct.");
    currentQuestionIndex++;
    generateQuizQuestion();
    //display in the results div that the answer is wrong.
  } else {
    showScore();
  }
}
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
function startQuiz() {
  // hide start screen
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  // un-hide questions section
  questionsEl.removeAttribute("class");

  getQuestion();
}


function getQuestion() {
  var currentQuestionIndex
}
//add event listener
startQuizButton.addEventListener("click", function (event) {
  window.location.href = "Students.html";
});
buttonA.addEventListener("click", function (event) {
  window.location.href = "Students.html";
});
buttonB.addEventListener("click", function (event) {
  window.location.href = "Students.html";
});
buttonC.addEventListener("click", function (event) {
  window.location.href = "Students.html";
});
buttonD.addEventListener("click", function (event) {
  window.location.href = "Students.html";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// This button starts the quiz!
startQuizButton.addEventListener("click", startQuiz);
