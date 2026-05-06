// Navbar background change on scroll

window.addEventListener("scroll", () => {

  const nav = document.querySelector("nav");

  if(window.scrollY > 50){

    nav.style.background = "linear-gradient(135deg,#0a1278,#1d4ed8)";

  }
  else{

    nav.style.background = "linear-gradient(135deg,#0a1278,#1d4ed8)";

  }

});


// Button hover animation

const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {

  btn.addEventListener("mouseenter", () => {

    btn.style.transform = "scale(1.05)";

  });

  btn.addEventListener("mouseleave", () => {

    btn.style.transform = "scale(1)";

  });

});


// Console Message

console.log("Portfolio Website Loaded Successfully 🚀");

// Resume modal functionality
const viewResumeBtn = document.getElementById("view-resume-btn");
const resumeModal = document.getElementById("resumeModal");
const resumeClose = document.getElementById("resumeClose");
const resumeBackdrop = document.getElementById("resumeBackdrop");

if (viewResumeBtn && resumeModal && resumeClose && resumeBackdrop) {
  const closeResumeModal = () => {
    resumeModal.classList.remove("open");
    resumeModal.setAttribute("aria-hidden", "true");
  };

  const openResumeModal = () => {
    resumeModal.classList.add("open");
    resumeModal.setAttribute("aria-hidden", "false");
  };

  viewResumeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    openResumeModal();
  });

  resumeClose.addEventListener("click", closeResumeModal);
  resumeBackdrop.addEventListener("click", closeResumeModal);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && resumeModal.classList.contains("open")) {
      closeResumeModal();
    }
  });
}
