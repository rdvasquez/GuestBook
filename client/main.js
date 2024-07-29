const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const form = require("form");
  const myObject = Object.fromEntries(data);
  console.log(myObject);

  fetch("http://localhost:8080/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(myObject),
  });
});
