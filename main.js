const urlTwitter = "https://twitter.com/Rickinbsb";
const urlGithub = "https://github.com/rickinbsb";
const urlLinkedin = "https://www.linkedin.com/in/rickinbsb/";
const urlGmail = "mailto:rickinbsb@gmail.com";
const urlWhatsapp = "https://api.whatsapp.com/send/?phone=%2B55061993268419&text&app_absent=0";

window.onload = function () {
  resizeAllContainers();
  applyTheme(false);
};

window.addEventListener(
  "resize",
  () => {
    resizeAllContainers();
  },
  true
);

function resizeAllContainers() {
  [...document.getElementsByClassName("nes-container")].forEach(container => {
    container.removeAttribute("style");
    container.style.width = 2 * Math.round(container.offsetWidth / 2) + "px";
  });
}

function applyTheme(change) {
  let isDark = localStorage.getItem("dark") === "true";
  let button = document.getElementById("day-night");
  let loading = document.getElementById("loading");
  if (change) {
    window.localStorage.setItem("dark", !isDark);
    isDark = !isDark;
  }
  [...document.getElementsByClassName("themed")].forEach(element => {
    if (isDark) {
      element.classList.add("is-dark");
      button.classList.remove("is-primary");
      loading.classList.remove("is-primary");
      button.classList.add("is-warning");
      loading.classList.add("is-warning");
      button.style.backgroundImage = "url('images/moon.png')";
    } else {
      element.classList.remove("is-dark");
      button.classList.add("is-primary");
      loading.classList.add("is-primary");
      button.classList.remove("is-warning");
      loading.classList.remove("is-warning");
      button.style.backgroundImage = "url('images/sun.png')";
    }
  });

  document.getElementById("btn-twitter").href = urlTwitter;
  document.getElementById("btn-github").href = urlGithub;
  document.getElementById("btn-linkedin").href = urlLinkedin;
  document.getElementById("btn-gmail").href = urlGmail;
  document.getElementById("btn-whatsapp").href = urlWhatsapp;
}
