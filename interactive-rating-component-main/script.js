const mainBox = document.querySelector(".box")
const thankBox = document.querySelector(".box2")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".rate")
const submitButton = document.getElementById("submit")

submitButton.addEventListener("click", () => {
  thankBox.classList.remove("hidden")
  mainBox.style.display = "none"
})
  rates.forEach((rate) => {
    rate.addEventListener("click", () => {
      rating.innerHTML = rate.innerHTML
    })
  })