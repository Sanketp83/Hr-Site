// // Toggle dark mode
// function toggleDarkMode() {
//   document.body.classList.toggle("dark-mode");
// }

const darkToggle = document.getElementById("dark-toggle");
const body = document.body;

// 🔁 Load dark mode preference
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// 🌗 Toggle dark mode
darkToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  const isDark = body.classList.contains("dark-mode");

  localStorage.setItem("theme", isDark ? "dark" : "light");

  // Swap icon
  darkToggle.innerHTML = isDark
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});
// menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Toggle menu on button click
menuToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // 🛑 Prevents click from bubbling to window
  navLinks.classList.toggle("active");
});

// Close menu on clicking outside of menu & button
document.addEventListener("click", (e) => {
  const isClickInsideMenu = navLinks.contains(e.target);
  const isClickOnToggle = menuToggle.contains(e.target);

  if (!isClickInsideMenu && !isClickOnToggle) {
    navLinks.classList.remove("active");
  }
});

// Optional: Auto-close menu on resize to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 600) {
    navLinks.classList.remove("active");
  }
});

// ===== LOGO TEXT ANIMATION =====
function breakTheText() {
  const h1 = document.querySelector(".logo-text");
  const h1Text = h1.textContent.trim();
  const words = h1Text.split(" "); // ["Pandikar", "Clinic"]
  let clutter = "";

  words.forEach((word, wordIndex) => {
    const className = wordIndex === 0 ? "a" : "b";
    word.split("").forEach((letter) => {
      clutter += `<span class="${className}">${letter}</span>`;
    });
    clutter += `<span class="space">&nbsp;</span>`;
  });

  h1.innerHTML = clutter;
}

breakTheText();

// ===== GSAP Animation =====
gsap.from(".logo-text .a", {
  y: -50,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: -0.1,
});

gsap.from(".logo-text .b", {
  y: 50,
  opacity: 0,
  duration: 0.6,
  delay: 0.5,
  stagger: 0.1,
});
