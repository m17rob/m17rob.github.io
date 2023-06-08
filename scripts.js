// Funcția pentru afișarea secțiunii showcaseWeb și ascunderea secțiunii showcaseLogo
function showWeb() {
  document.querySelector(".showcaseWeb").classList.remove("dnone");
  document.querySelector(".showcaseLogo").classList.add("dnone");

  // Adăugăm clasa selectbtn pe butonul web și o eliminăm de pe butonul logo
  document.querySelector(".web").classList.add("selectbtn");
  document.querySelector(".logo").classList.remove("selectbtn");
}

// Funcția pentru afișarea secțiunii showcaseLogo și ascunderea secțiunii showcaseWeb
function showLogo() {
  document.querySelector(".showcaseWeb").classList.add("dnone");
  document.querySelector(".showcaseLogo").classList.remove("dnone");

  // Adăugăm clasa selectbtn pe butonul logo și o eliminăm de pe butonul web
  document.querySelector(".logo").classList.add("selectbtn");
  document.querySelector(".web").classList.remove("selectbtn");
}

// Apelăm funcția showWeb pentru a afișa secțiunea showcaseWeb și a ascunde secțiunea showcaseLogo ca default
showWeb();

const beneButtons = document.querySelectorAll(".benebtn");
const beneContents = document.querySelectorAll(".benecontent");

beneButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const isOpen = !beneContents[index].classList.contains("dnone");

    // Ascunde toate conținuturile
    beneContents.forEach((content) => {
      content.classList.add("dnone");
    });

    if (!isOpen) {
      // Șterge clasa 'dnone' de la conținutul corespunzător butonului apăsat
      beneContents[index].classList.remove("dnone");
    }
  });
});
