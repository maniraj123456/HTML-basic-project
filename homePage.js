function next()
{
  document.getElementById("quiz-name").style.display = 'none';
  document.getElementById("next-button").style.display = 'none';
  document.getElementById("questionnaire").style.display = "block";
}
function submit() {
  const questionsText = document.getElementsByClassName("questionText");
  const solutionsText = document.getElementsByClassName("solutionText");
  const message = document.getElementById("error-message");

  for (let i = 0; i < questionsText.length; i++) {
    if (questionsText[i].value == "" || questionsText[i].value == null) {
      console.log(message.style.display);
      message.style.display = "inline";
      return;
    }
    if (solutionsText[i].value == "" || solutionsText[i].value == null) {
      message.style.display = "inline";
      return;
    }
  }
  let questions = [];
  let solutions = [];

  for (let i = 0; i < questionsText.length; i++)
    questions.push(questionsText[i].value);
  for (let i = 0; i < solutionsText.length; i++)
    solutions.push(solutionsText[i].value);

  message.style.display = "none";

  let quiz = {
    questions: questions,
    solutions: solutions,
    key: Math.floor(Math.random() * 100),
  };
  if (localStorage.getItem("quizzes") == null || localStorage.getItem("quizzes").length == 0) 
  {
    let quizes = [];
    quizes.push(quiz);
    localStorage.setItem("quizzes", JSON.stringify(quizes));
    window.location.href="/landingPage.html";
  } 
  else 
  {
    let existingQuizzes = localStorage.getItem("quizzes");
    let quizzes = JSON.parse(existingQuizzes);
    while(quizzes.find(element => element.key === quiz.key))
      quiz.key = Math.floor(Math.random() * 100);
    quizzes.push(quiz);
    localStorage.setItem("quizzes", JSON.stringify(quizzes));
    window.location.href="/landingPage.html";
  }

}

function clear() {
  const questionsText = document.getElementsByClassName("questionText");
  const solutionsText = document.getElementsByClassName("solutionText");
  const message = document.getElementById("error-message");

  message.innerHTML = "";
  for (let i = 0; i < questionsText.length; i++) {
    questionsText[i].innerHTML = "";
    solutionsText[i].innerHTML = "";
  }
}
