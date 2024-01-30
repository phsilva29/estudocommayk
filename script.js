function toggleMode() {
  const html = document.documentElement
  if (html.classList.contains("litgh")) {
    html.classList.remove("litgh")
  } else {
    html.classList.add("litgh")
  }

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a image
  if (html.classList.contains("litgh")) {
    //se tiver litgh mode, adicionar a imagem litgh
    img.setAttribute("src", "./assets/avatar-litgh.png")
  } else {
    //se tiver em litgh mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
