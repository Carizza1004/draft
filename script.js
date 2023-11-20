function upDate(previewPic) {
  var imageDiv = document.getElementById('image');

  imageDiv.innerHTML = previewPic.alt;
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  imageDiv.setAttribute('tabindex', '0');

  imageDiv.addEventListener('focus', function () {
    // Mimic hover effect when focused
    imageDiv.style.border = '2px solid blue';
  });

  imageDiv.addEventListener('blur', function () {
    // Revert to original state when blurred
    imageDiv.style.border = '';
  });
}

function unDo() {
  var imageDiv = document.getElementById('image');

  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Hover over an image below or use the Tab key to navigate.";
  imageDiv.removeAttribute('tabindex');
}

function handleKeyPress(event) {
  var images = document.querySelectorAll('.preview');
  var currentTabIndex = parseInt(event.target.getAttribute('tabindex'));
  
  if (event.key === 'Tab' && event.shiftKey) {
    // Shift + Tab: Move to the previous image
    event.preventDefault();
    var prevImage = document.querySelector('[tabindex="' + (currentTabIndex - 1) + '"]');
    if (prevImage) {
      prevImage.focus();
    }
  } else if (event.key === 'Tab') {
    // Tab: Move to the next image
    event.preventDefault();
    var nextImage = document.querySelector('[tabindex="' + (currentTabIndex + 1) + '"]');
    if (nextImage) {
      nextImage.focus();
    }
  }
}