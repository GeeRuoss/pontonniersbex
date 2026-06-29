/* Pontonniers de Bex — main.js */
(function () {
  "use strict";

  var nav = document.querySelector(".nav");
  var burger = document.querySelector(".nav__burger");
  var menu = document.querySelector(".nav__pill");

  function onScroll() { if (nav) nav.classList.toggle("scrolled", window.scrollY > 40); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (burger && menu) {
    burger.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      burger.classList.toggle("open", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menu.classList.remove("open"); burger.classList.remove("open"); document.body.style.overflow = "";
      });
    });
  }

  /* Scroll reveal */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else { reveals.forEach(function (el) { el.classList.add("in"); }); }

  /* Galerie lightbox */
  var gallery = document.querySelector(".gallery");
  if (gallery) {
    var imgs = Array.prototype.slice.call(gallery.querySelectorAll("img"));
    var box = document.createElement("div");
    box.className = "lightbox";
    box.innerHTML =
      '<button class="lightbox__close" aria-label="Fermer">&times;</button>' +
      '<button class="lightbox__nav prev" aria-label="Précédent">&#8249;</button>' +
      '<img alt="">' +
      '<button class="lightbox__nav next" aria-label="Suivant">&#8250;</button>';
    document.body.appendChild(box);
    var bigImg = box.querySelector("img");
    var current = 0;
    function show(i) { current = (i + imgs.length) % imgs.length; bigImg.src = imgs[current].getAttribute("data-full") || imgs[current].src; }
    function open(i) { show(i); box.classList.add("open"); document.body.style.overflow = "hidden"; }
    function close() { box.classList.remove("open"); document.body.style.overflow = ""; }
    imgs.forEach(function (img, i) { img.addEventListener("click", function () { open(i); }); });
    box.querySelector(".lightbox__close").addEventListener("click", close);
    box.querySelector(".next").addEventListener("click", function (e) { e.stopPropagation(); show(current + 1); });
    box.querySelector(".prev").addEventListener("click", function (e) { e.stopPropagation(); show(current - 1); });
    box.addEventListener("click", function (e) { if (e.target === box) close(); });
    document.addEventListener("keydown", function (e) {
      if (!box.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") show(current + 1);
      if (e.key === "ArrowLeft") show(current - 1);
    });
  }
})();
