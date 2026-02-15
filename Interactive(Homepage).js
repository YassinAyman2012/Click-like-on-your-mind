function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

function toggleImage() {
  const logo = document.getElementById("logo");

  if (logo.src.includes("logo.jpg")) {
    logo.src = "logo-dark.jpg";
  } 
  else {
    logo.src = "logo.jpg";
  }
}
