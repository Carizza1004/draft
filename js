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
  imageDiv.innerHTML = "Hover over an image below to display here.";
  imageDiv.removeAttribute('tabindex');
}
