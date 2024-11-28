import './index.css'

function toggleDropdown (event) {
  event.target.parentElement.classList.toggle('open')
}

document.querySelectorAll('.dropdown > button').forEach(dropdownButton => dropdownButton.addEventListener('click', toggleDropdown))
