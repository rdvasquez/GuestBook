const form = document.querySelector("form");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = new formData("form");
  const formValues = Object.fromEntries(formData);
  console.log(formValues);

  const response = await fetch("http://localhost:8080/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });

  const data = await response.json();
  console.log(data);
});
