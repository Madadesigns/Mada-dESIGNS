// Hamburger
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
}

// Dark Mode
const themeBtn = document.getElementById("themeBtn");

function toggleTheme() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeBtn.textContent = "☀";
    } else {
        localStorage.setItem("theme", "light");
        themeBtn.textContent = "🌙";
    }
}

window.onload = function() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        themeBtn.textContent = "☀";
    }
};

// Typing
const text = "Designs That Make Brands Powerful";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}
window.addEventListener("load", typeEffect);

// Reveal on scroll
window.addEventListener("scroll", function() {
    document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});

// Counters
const counters = document.querySelectorAll(".counter");

function startCounters() {
    counters.forEach(counter => {
        const target = +counter.dataset.target;
        let count = 0;
        const update = () => {
            count += target / 100;
            if (count < target) {
                counter.innerText = Math.ceil(count);
                setTimeout(update, 20);
            } else {
                counter.innerText = target + "+";
            }
        };
        update();
    });
}

window.addEventListener("scroll", () => {
    if (document.querySelector(".stats").getBoundingClientRect().top < window.innerHeight) {
        startCounters();
    }
});

// Modal
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

document.querySelectorAll(".box img").forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    };
});

document.querySelector(".close").onclick = function() {
    modal.style.display = "none";
};

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("formMessage").textContent = "Message sent successfully!";
    this.reset();
});