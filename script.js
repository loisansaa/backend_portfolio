function toggleMore() {
  const moreText = document.getElementById("more-text")
  const btn = document.getElementById("toggle-text")

  if (moreText.style.display === "none"){
    moreText.style.display = "block";
    btn.textContent = "Show Less";
  }

  else{
    moreText.style.display = "none";
    btn.textContent = "Read More";
  }
}

