function submit() {
  const questionsText = document.getElementsByClassName("questionText");
  const solutionsText = document.getElementsByClassName("solutionText");
  const message = document.getElementById("error-message");

  for (let i = 0; i < questionsText.length; i++) {
    if (
      questionsText[i].ariaValueText == "" ||
      questionsText[i].ariaValueText == null
    ) {
      console.log(message.style.display);
      message.style.display = "inline";
      break;
    }
    if (
      solutionsText[i].ariaValueText == "" ||
      solutionsText[i].ariaValueText == null
    ) {
      message.style.display = "inline";
      break;
    }
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
