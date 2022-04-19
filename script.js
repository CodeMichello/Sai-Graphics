const toggleButton = document.getElementsByClassName('toggle-button')[0]
const brandLinks = document.getElementsByClassName('brand-links')[0]


toggleButton.addEventListener('click',() => {
    brandLinks.classList.toggle('active')
    document.body.classList.toggle('no-scroll')
})