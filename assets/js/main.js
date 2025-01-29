document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const cards = Array.from(track.children);
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  const cardWidth = cards[0].getBoundingClientRect().width; // Get the width of a card
  const visibleCards = 3; // Number of cards visible at one time
  let currentIndex = 0;

  // Set the width of the track dynamically
  track.style.width = `${cards.length * cardWidth}px`;

  const updateTrackPosition = () => {
    const newTransformValue = `-${currentIndex * (cardWidth / visibleCards)}px`;
    track.style.transform = `translateX(${newTransformValue})`;
  };

  const moveToNextSet = () => {
    currentIndex = Math.min(currentIndex + 1, cards.length - visibleCards); // Prevent overflow
    updateTrackPosition();
  };

  const moveToPrevSet = () => {
    currentIndex = Math.max(currentIndex - 1, 0); // Prevent underflow
    updateTrackPosition();
  };

  // Auto-rotate every 3 seconds
  const autoRotate = setInterval(() => {
    if (currentIndex < cards.length - visibleCards) {
      moveToNextSet();
    } else {
      currentIndex = 0; // Reset to the first card
      updateTrackPosition();
    }
  }, 3000);

  // Add event listeners for navigation buttons
  nextButton.addEventListener("click", () => {
    clearInterval(autoRotate); // Stop auto-rotation on manual interaction
    moveToNextSet();
  });

  prevButton.addEventListener("click", () => {
    clearInterval(autoRotate); // Stop auto-rotation on manual interaction
    moveToPrevSet();
  });
});

// 
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const cards = Array.from(track.children);
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  let currentIndex = 0;

  const updateTrackPosition = () => {
    const newTransformValue = `-${currentIndex * 100}%`;
    track.style.transform = `translateX(${newTransformValue})`;
  };

  const moveToNextCard = () => {
    currentIndex = (currentIndex + 1) % cards.length; // Loop to the start
    updateTrackPosition();
  };

  const moveToPrevCard = () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length; // Loop to the end
    updateTrackPosition();
  };

  // Auto-rotate every 3 seconds
  const autoRotate = setInterval(moveToNextCard, 3000);

  // Add event listeners for navigation buttons
  nextButton.addEventListener("click", () => {
    clearInterval(autoRotate); // Stop auto-rotation on manual interaction
    moveToNextCard();
  });

  prevButton.addEventListener("click", () => {
    clearInterval(autoRotate); // Stop auto-rotation on manual interaction
    moveToPrevCard();
  });
});
