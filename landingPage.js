let quizes = document.getElementById("empty-div");
let items = localStorage.getItem("quizzes");
let data = JSON.parse(items);
if (data && data.length > 0) {
  for(let index = 0; index < data.length; index++) {
    quizes.innerHTML += `
    <div class="row p-1 m-1">
      <div class="col">
        <p>${data[index].quizName}</p>
        <div class="progress">
          <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      <div class="col">
        <button type="button" class="btn btn-success" onclick="start(data[index].quizName)">start</button>
      </div>
    </div>
    `;
  }
}
