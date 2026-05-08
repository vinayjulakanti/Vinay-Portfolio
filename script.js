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

// Certificate modal functionality
const internshipCertCard = document.getElementById("internshipCertCard");
const certModal = document.getElementById("certModal");
const certClose = document.getElementById("certClose");
const certBackdrop = document.getElementById("certBackdrop");
const certModalTitle = document.getElementById("certModalTitle");
const certModalSubtitle = document.getElementById("certModalSubtitle");
const certDownloadBtn = document.getElementById("certDownloadBtn");
const certOpenBtn = document.getElementById("certOpenBtn");
const certImage = document.getElementById("certImage");

if (internshipCertCard && certModal && certClose && certBackdrop && certModalTitle && certModalSubtitle && certDownloadBtn && certOpenBtn && certImage) {
  const openCertModal = () => {
    const certSrc = internshipCertCard.dataset.certSrc;
    const certTitle = internshipCertCard.dataset.certTitle;
    const certSubtitle = internshipCertCard.dataset.certSubtitle;

    certModalTitle.textContent = certTitle;
    certModalSubtitle.textContent = certSubtitle;
    certDownloadBtn.href = certSrc;
    certOpenBtn.href = certSrc;
    certImage.src = certSrc;
    certImage.alt = `${certTitle} preview`;

    certModal.classList.add("open");
    certModal.setAttribute("aria-hidden", "false");
  };

  const closeCertModal = () => {
    certModal.classList.remove("open");
    certModal.setAttribute("aria-hidden", "true");
  };

  internshipCertCard.addEventListener("click", openCertModal);
  internshipCertCard.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openCertModal();
    }
  });

  certClose.addEventListener("click", closeCertModal);
  certBackdrop.addEventListener("click", closeCertModal);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && certModal.classList.contains("open")) {
      closeCertModal();
    }
  });
}

