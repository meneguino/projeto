function toggleMode() {
  const html = document.documentElement

  /*
  //if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
*/

  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a img
  if (html.classList.contains("light")) {
    //se tiver o light mode, substituir a img
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem o light mode, manter a img normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
