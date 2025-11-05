const img = document.querySelector("#profile img")

function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/vitogatrist.png")
  } else {
    img.setAttribute("src", "./assets/cleitoga.png")
  }
}
console.log("oi")
