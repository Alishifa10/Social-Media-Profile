const followBtn = document.getElementById("followBtn");

followBtn.addEventListener("click", () => {
  if (followBtn.textContent === "Follow") {
    followBtn.textContent = "Following";
    followBtn.style.backgroundColor = "#888";
  } else {
    followBtn.textContent = "Follow";
    followBtn.style.backgroundColor = "#1da1f2";
  }
});
