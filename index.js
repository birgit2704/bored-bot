document.getElementById("btn").addEventListener("click", () => {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("activity").textContent = data.activity;
      document.querySelector("h1").textContent = "🦾 HappyBot🦿";
      document.body.classList.add("fun");
    });
});
