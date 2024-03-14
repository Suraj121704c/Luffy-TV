// for navbar
window.addEventListener("resize", function () {
  // Check if the collapse is open and the screen size is large
  if (
    window.innerWidth > 900 &&
    document.querySelector("#navbarToggleExternalContent.show")
  ) {
    // Close the collapse
    var collapseElement = document.getElementById(
      "navbarToggleExternalContent"
    );
    var collapse = new bootstrap.Collapse(collapseElement);
    collapse.hide();
  }
});


document.getElementById('one').addEventListener('click', function() {
  document.querySelector('#first').style.display = 'flex';
  document.querySelector('#second').style.display = 'none';
});

document.getElementById('two').addEventListener('click', function() {
  console.log("two")
  document.querySelector('#first').style.display = 'none';
  document.querySelector('#second').style.display = 'block';
});