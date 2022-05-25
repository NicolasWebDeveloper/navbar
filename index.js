let menuButtons = document.querySelectorAll(".navbar-item")
let currentNavigationButton = 0;
let animationMainTimeout = false;

for (let i = 0; i < menuButtons.length; i++) {
  menuButtons[i].addEventListener("click", function() {
    animateMain();
    let currentButton = this;
    currentNavigationButton = i;
    for (let x = 0; x < menuButtons.length; x++) {
      menuButtons[x].classList.remove("navbar-item-activated");
    }
    currentButton.classList.toggle("navbar-item-activated");
  })
}

document.addEventListener("wheel", function(event) {
  if (event.deltaY === 100) {
    mouseDown();
  } else {
    mouseUp();
  }
})

function mouseDown() {
  if (currentNavigationButton === menuButtons.length - 1) return;
  currentNavigationButton++;
  menuButtons[currentNavigationButton - 1].classList.toggle("navbar-item-activated");
  menuButtons[currentNavigationButton].classList.toggle("navbar-item-activated");
  animateMain();
}

function mouseUp() {
  if (currentNavigationButton === 0) return;
  currentNavigationButton--;
  menuButtons[currentNavigationButton].classList.toggle("navbar-item-activated");
  menuButtons[currentNavigationButton + 1].classList.toggle("navbar-item-activated");
  animateMain();
}

function loadPage(number) {
  
}

function animateMain() {
  if (animationMainTimeout) return;
  $("main").fadeToggle(450).fadeToggle(450);
  animationMainTimeout = true;
  setTimeout(function() {
    animationMainTimeout = false;
  }, 900)
}
