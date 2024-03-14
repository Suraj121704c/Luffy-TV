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

var disqus_config = function () {
  this.page.url = "http://127.0.0.1:5500/movie_detail.html"; // Replace PAGE_URL with your page's canonical URL variable
  this.page.identifier = "http://127.0.0.1:5500/movie_detail.html"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

(function () {
  // DON'T EDIT BELOW THIS LINE
  var d = document,
    s = d.createElement("script");
  s.src = "https://demo-rwbytrkrcl.disqus.com/embed.js";
  s.setAttribute("data-timestamp", +new Date());
  (d.head || d.body).appendChild(s);
})();
