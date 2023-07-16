const rating = document.getElementById("rating")
const rates = document.getElementById("rate")

  rates.forEach((rate) => {
    rate.addEventListener("click", () => {
      rating.innerHTML = rate.innerHTML
    })
  })