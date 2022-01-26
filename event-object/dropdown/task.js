const btn = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list')
const items = document.querySelectorAll('.dropdown__item')
const value = document.querySelector('.dropdown__value')
const links = document.querySelectorAll('.dropdown__link')

links.forEach(el => el.addEventListener('click', event => {
    event.preventDefault();
}))
btn.addEventListener('click', () => {
    list.classList.toggle('dropdown__list_active')
})

items.forEach( el => el.addEventListener('click', (event) => {
    list.classList.remove('dropdown__list_active')
    value.textContent = event.currentTarget.textContent;
}))
