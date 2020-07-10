/*window.addEventListener("scroll", function () {
  let nav_bar = document.getElementById("nav-bar");
  let links = document.getElementsByClassName("link");

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
}*/
const nav_bar = document.querySelector(".nav-bar");
const banner = document.querySelector("header");
const g = document.querySelector("img");
console.log(g);

interserctionOptions = { rootMargin: "0px 0px 0px 0px " };
const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav_bar.classList.add("nav-bar-fixed");
      nav_bar.classList.remove("nav-bar");
      g.src = "../../dist/img/logo.svg";
    } else {
      nav_bar.classList.remove("nav-bar-fixed");
      nav_bar.classList.add("nav-bar");

      g.src = "../../dist/img/logo-dark.svg";
    }
  });
},
interserctionOptions);
sectionOneObserver.observe(banner);
