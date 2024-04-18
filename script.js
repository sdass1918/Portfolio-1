// Get the modal
var modal = document.getElementById('popup');

// Get the link that opens the modal
var link = document.getElementById("openPopup");

// Get the <span> element that closes the modal
var span = document.getElementById("closePopup");

// When the user clicks on the link, open the modal
link.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
