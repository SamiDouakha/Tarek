window.addEventListener("scroll", function () {
  let nav_bar = document.getElementById("nav-bar");
  if (window.pageYOffset > 0) {
    nav_bar.classList.add("cus-nav-bar");
  } else {
    nav_bar.classList.remove("cus-nav-bar");
  }
});
let links = document.getElementsByClassName("link");
console.log(links.length);
for (var i = 0; i < links.length; i++) {
  links[i].onclick = function (event) {
    console.log("i: ", i);
    console.log(event);
  };
}
