

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var navbar = document.getElementById("navbar");
  var navbar_left = document.getElementById("navbar-left");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.classList.add("scrolled");
    navbar_left.classList.add("navbar-left-sc");
  } else {
    navbar.classList.remove("scrolled");
    navbar_left.classList.remove("navbar-left-sc");
  }
}

function activateLink(linkId) {
  const navLinks = document.querySelectorAll('.navbar-links');
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  const clickedLink = document.getElementById(linkId);
  clickedLink.classList.add('active');
  if (linkId=="home") {
    window.scrollTo(0, 0);
  }
  else if (linkId=="about") {
    window.scrollTo(0, 900);
  }
  else if (linkId=="contact") {
    window.scrollTo(0, 1800);
  }

}

function curtainRaise() {
  var panel_left = document.querySelector('.panel-left');
  var panel_right = document.querySelector('.panel-right');
  var curtain_wrapper = document.querySelector('.curtain-wrapper');
  var curtain = document.querySelector('.curtain');
  panel_left.classList.remove('panel-left');
  panel_right.classList.remove('panel-right');
  panel_left.classList.add('panel-left__move');
  panel_right.classList.add('panel-right__move');
  curtain_wrapper.style.setProperty('z-index', -100);
  curtain.style.setProperty('display', 'none');
}
