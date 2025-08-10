// Animated typewriter effect for skills
const skillsText = "Skills: UI/UX Design, Web Design, Front-End & Back-End Development";
const skillsIntroElem = document.getElementById("skills-intro");

let idx = 0;
function typeSkills() {
  if (idx < skillsText.length) {
    skillsIntroElem.textContent += skillsText.charAt(idx);
    idx++;
    setTimeout(typeSkills, 50);
  }
}
typeSkills();

// Animate skill bars when they come into view
const skillLevels = document.querySelectorAll(".skill-level");

function animateSkills() {
  skillLevels.forEach(bar => {
    const level = bar.getAttribute("data-level");
    bar.style.width = level;
  });
}

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

window.addEventListener("scroll", () => {
  const skillsSection = document.getElementById("skills");
  if (isInViewport(skillsSection)) {
    animateSkills();
  }
});

// Simple contact form handler
function handleSubmit(e) {
  e.preventDefault();
  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  const message = e.target.message.value.trim();
  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return false;
  }
  alert(`Thank you, ${name}! Your message has been received.`);
  e.target.reset();
  return false;
}
