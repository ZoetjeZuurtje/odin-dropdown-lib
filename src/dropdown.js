import './index.css'

function fitFirstChild (element, dimensions = 'both') {
  const firstChildSize = element.children[0].getBoundingClientRect()

  if (dimensions !== 'width') {
    element.style.height = `${firstChildSize.height}px`
  }
  if (dimensions !== 'height') {
    element.style.width = `${firstChildSize.width}px`
  }
}

function toggleDropdown (event) {
  const dropdown = event.target.parentElement

  try {
    if (dropdown.style.height === 'fit-content') {
      fitFirstChild(dropdown)
    } else {
      dropdown.style.height = 'fit-content'
      dropdown.style.width = 'fit-content'
    }
  } catch (err) {
    console.error(err)
  }
}

document.querySelectorAll('.dropdown > button').forEach(dropdownButton => {
  dropdownButton.addEventListener('click', toggleDropdown)
  fitFirstChild(dropdownButton.parentElement); // collapse it by default
})
