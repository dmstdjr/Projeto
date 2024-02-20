function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar img
  const img = document.querySelector("#profile img")

  // Substituir img
  if (html.classList.contains("light")) {
    // if light, change
    img.setAttribute("src", "./assets/avatar1-light.png")
    img.setAttribute(
      "alt",
      "Foto de Dimas usando terno, com fundo azul, e uma flor em sua frente e sorrindo"
    )
  } else {
    // if not light, keep
    img.setAttribute("src", "./assets/avatar1.png")
    img.setAttribute(
      "alt",
      "Foto de Dimas usando terno, com fundo azul, e uma flor em sua frente"
    )
  }
}