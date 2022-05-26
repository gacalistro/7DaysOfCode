window.addEventListener("scroll", onScroll);
onScroll();

function onScroll() {
  showNavOnScroll();
  backToTopButtonShow();
  activeMenuAtCurrentSection(home);
  activeMenuAtCurrentSection(carreer);
  activeMenuAtCurrentSection(comments);
}

function showNavOnScroll() {
  const nav = document.querySelector("#navigation");

  if (scrollY > 0) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
}

function backToTopButtonShow() {
  const backToTopBtn = document.querySelector("#backToTopButton");

  if (scrollY > 450) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

function activeMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionBottom = sectionTop + sectionHeight;
  const sectionId = section.getAttribute("id");

  const passedTop = targetLine >= sectionTop;
  const passedBottom = targetLine >= sectionBottom;
  const sectionBoundaries = passedTop && !passedBottom;

  const menuElement = document.querySelector(
    `#navigation .menu a[href*=${sectionId}]`
  );

  menuElement.classList.remove("active");

  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(`
  #home,
  #home .user,
  #home .cards,
  #home .card,
  #carreer,
  #carreer .carreers,
  #carreer .jobs,
  #carreer .job,
  #comments,
  footer`);
