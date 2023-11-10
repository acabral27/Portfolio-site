// Fuction for mobile view
// - hides nav options under bars icon
function navbarMobileMenu() {
    let x = document.getElementById("myNav");
    if (x.className === "navbar") {
      x.classList.add('responsive');
    }
    else {
      x.classList.remove('responsive');
    }
}

// Adds the active class to nav bar options
function addActiveClass(navLink) {
    document.querySelector('.active').classList.remove('active')
    navLink.classList.add('active');
}