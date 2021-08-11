const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarlinks = document.getElementsByClassName('topO')[0]

toggleButton.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
})

