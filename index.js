var quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HyperText Machine Language",
      "HyperText and Links Markup Language",
      "HyperTool Multi Language",
    ],
    answer: "HyperText Markup Language",
  },
  {
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "1993"],
    answer: "1995",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style System",
      "Colorful Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which tag is used to define an unordered list in HTML?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: "<ul>",
  },
  {
    question:
      "Which programming language is known as the backbone of web development?",
    options: ["Java", "Python", "JavaScript", "C++"],
    answer: "JavaScript",
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'script.js'?",
    options: [
      "href",
      "src",
      "ref",
      "name",
    ],
    answer: "src",
  },
  {
    question: "Which property is used in CSS to change the background color?",
    options: ["color", "background-color", "bgColor", "bg-color"],
    answer: "background-color",
  },
  {
    question: "What is the default behavior of the `position` property in CSS?",
    options: ["relative", "absolute", "static", "fixed"],
    answer: "static",
  },
];




//Initialize variable here

let currentQuestionIndex = 0;
let score = 0;



// Start Question Function



function startQuiz(){
    currentQuestionIndex = 0
    score = 0;

    document.getElementById("welcome_text").style.display = "none";
    document.getElementById("question").style.display = "flex";
    document.getElementById("buttons").style.display = "flex";
    document.getElementById("answers").style.display = "block";

    resetOptions();
    showQuestion();
}



// Show Question Function


function showQuestion(){
    let questionElement = document.getElementById("ques");
    let optionsElement = document.getElementById("options");

    let displayQues = quizQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    questionElement.textContent =  questionNo + ". " + displayQues.question;

    optionsElement.innerHTML = "";


    for(var i = 0; i < displayQues.options.length; i++){
        let li = document.createElement("li");
        li.textContent = displayQues.options[i];
        li.setAttribute("onclick", `checkAnswer(this, '${displayQues.options[i]}')`);
        li.style.cursor = "pointer";
        optionsElement.appendChild(li);
        
    }

    document.getElementById("next_btn").textContent = currentQuestionIndex === quizQuestions.length - 1 ? "Finish" : "Next";
}




// Show answers and correct answer

function checkAnswer(selectedOption , selectedValue){
    let displayQues = quizQuestions[currentQuestionIndex];

    if(selectedValue === displayQues.answer) {
        selectedOption.style.backgroundColor = "lightgreen";
        score++;
    }

    else{
        selectedOption.style.backgroundColor = "lightcoral";
    }

    let optionsElement = document.getElementById("options").children;
    for(let option of optionsElement){
        option.style.pointerEvents = "none";
    }

}



// Next button Function


function showNextQues(){
    if(currentQuestionIndex < quizQuestions.length - 1){
        currentQuestionIndex++;
        resetOptions();
        showQuestion();
    }
    else{
        endQuiz();
    }
}



// Reset Options Styles Function


function resetOptions(){
    let optionsElement = document.getElementById("options").children;
    for(let option of optionsElement){
        option.style.backgroundColor = "";
        option.style.pointerEvents = "auto";
    }

}





// End quiz and Show score result


function endQuiz(){
    document.getElementById("question").style.display = "none";
    document.getElementById("answers").style.display = "none";
    document.getElementById("buttons").style.display = "none";

    var mainContainer = document.getElementById("main_container");

    mainContainer.innerHTML = `<h1> Quiz Completed </h1>
                                <p> Your Score: ${score} / ${quizQuestions.length} </p>`;

}