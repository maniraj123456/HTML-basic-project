let quizes = document.getElementById("empty-div");
let items = localStorage.getItem("quizzes");
let data = JSON.parse(items);
console.log(data);
console.log(typeof data + " "+ data.length);
if (data && data.length > 0) {
  for(let index = 0; index < data.length; index++) {
    quizes.innerHTML += `<p>${data[index].key}</p>`;
  }
}
