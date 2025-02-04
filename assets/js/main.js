
$(document).ready(function () {
  $('.gallery-item').magnificPopup({
    type: 'image',
    gallery: { enabled: true }
  });
});


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

