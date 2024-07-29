const form = document.querySelector("form");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const formValue = Object.fromEntries(formData);

  const response = await fetch("http://localhost:8080/DATABASE_URL", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });

  const data = await response.json();
  console.log(data);
});

fetchData();

async function fetchData() {
  const result = await fetch(
    "https://api.globalgiving.org/api/public/projectservice/all/projects/ids"
  );
  const data = await result.json();
  generateData(data);
}
