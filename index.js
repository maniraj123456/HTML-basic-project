/* fetching data and converting to JSON */
async function fetchUsers() {
  try {
    const response = await fetch("./values.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.users;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

async function submit() {
  /* fetching data and storing in user Array */
  let users = [];
  await fetchUsers().then((usersList) => {
    if (usersList) {
      users = usersList;
    } else {
      users = null;
    }
  });
  /* document objects for DOM  */
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const message = document.getElementsByClassName("message");

  if (
    (email == null && password == null) ||
    (email.value == "" && password.value == "")
  ) {
    message[0].innerHTML = "No credentials entered";
  } else {
    if (
      (users == null || users == undefined || users.length == 0) &&
      message != null
    ) {
      message[0].innerHTML = "users list is empty";
      return;
    }
    let user = users.find(
      (element) =>
        element.name == email.value && element.password == password.value
    );

    if (user != null && message != null) {
      message[0].innerHTML = "valid credentials";
    } else if (message != null) {
      message[0].innerHTML = "Invalid credentials";
    }
  }
}

function onClear()
{
  /* document objects for DOM  */
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const message = document.getElementsByClassName("message");

  email.value = ""; 
  password.value = ""; 
  message[0].innerHTML = "";
}