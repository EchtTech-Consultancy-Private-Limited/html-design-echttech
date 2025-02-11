//=============================== date and time ====================================
function updateDateTime() {
  const now = new Date();
  const formattedTime = now.toLocaleTimeString();
  const formattedDate = now.toDateString();
  document.getElementById('datetime').textContent = formattedDate + "  |  " + formattedTime;
}

updateDateTime(); // Initial call
setInterval(updateDateTime, 1000); // Update every second

//================================ font resize ======================================
// font size changes
let defaultSize = 16// Default font size

function changeSize(change) {
  let elements = document.documentElement;
  let currentSize = parseInt(window.getComputedStyle(elements).fontSize);
  elements.style.fontSize = (currentSize + change) + "px";
}

function resetSize() {
  let elements = document.documentElement;
  elements.style.fontSize = defaultSize + "px";
};


//=============================== banner carosuel ===================================
document.addEventListener("DOMContentLoaded", function () {
  let carousel = document.querySelector(".carousel");
  let items = carousel.querySelectorAll(".item");
  let dotsContainer = document.querySelector(".dots");
  let autoSlideInterval;
  const autoSlideTime = 3000; // Time in milliseconds

  // Insert dots into the DOM
  items.forEach((_, index) => {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
  });

  let dots = document.querySelectorAll(".dot");

  // Function to show a specific item
  function showItem(index) {
    items.forEach((item, idx) => {
      item.classList.remove("active");
      dots[idx].classList.remove("active");
      if (idx === index) {
        item.classList.add("active");
        dots[idx].classList.add("active");
      }
    });
  }

  // Function to get current active index
  function getCurrentIndex() {
    return [...items].findIndex((item) => item.classList.contains("active"));
  }

  // Function to go to next item
  function nextItem() {
    let index = getCurrentIndex();
    showItem((index + 1) % items.length);
  }

  // Start auto-slide
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextItem, autoSlideTime);
  }

  // Stop auto-slide
  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Event listeners for buttons
  document.querySelector(".prev1").addEventListener("click", () => {
    stopAutoSlide();
    let index = getCurrentIndex();
    showItem((index - 1 + items.length) % items.length);
    startAutoSlide();
  });

  document.querySelector(".next1").addEventListener("click", () => {
    stopAutoSlide();
    nextItem();
    startAutoSlide();
  });

  // Event listeners for dots
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      stopAutoSlide();
      let index = parseInt(dot.dataset.index);
      showItem(index);
      startAutoSlide();
    });
  });

  // Start auto-slide on page load
  startAutoSlide();
});

