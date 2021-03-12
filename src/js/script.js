
const hamburgerButton = document.querySelector('.hamburger-button')
const sideBar = document.querySelector('.sidebar')

hamburgerButton.addEventListener('click', function(event) {
  sideBar.classList.toggle('active')
}) 