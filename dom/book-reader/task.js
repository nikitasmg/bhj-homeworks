const fsLinks = document.querySelectorAll('.font-size');
const colorLinks = document.querySelectorAll('.color');
const bgColorLinks = document.querySelectorAll('.bg-color');
const book = document.getElementById('book');

fsLinks.forEach(el => el.addEventListener('click',(event) => {
    event.preventDefault();
    activate(fsLinks,'font-size',event);
    changeParam(event,book,'data-size','fs');
}))
colorLinks.forEach(el => el.addEventListener('click',(event) => {
    event.preventDefault();
    activate(colorLinks,'color',event);
    changeParam(event,book,'data-text-color','color');
}))
bgColorLinks.forEach(el => el.addEventListener('click',(event) => {
    event.preventDefault();
    activate(bgColorLinks,'bg-color',event);
    changeParam(event,book,'data-bg-color','bg');
}))




/**
 * Изменяет класс на активный текущего элемента в переданной коллекции элементов
 * @param {HTMLAllCollection} list 
 * @param {string} atribute 
 * @param {variable} event 
 */
const activate = (list,atribute,event) => {
    list.forEach( el => el.classList.remove(`${atribute}_active`));
    event.currentTarget.classList.add(`${atribute}_active`);
}   

/**
 * Добавляет класс в в замвисти от переданного атрибута
 * @param {variable} event 
 * @param {HTMLElement} book 
 * @param {string} attribute 
 * @param {string} type 
 */
const changeParam = (event,book,attribute,type) => {
    let value = event.currentTarget.getAttribute(attribute);

    const regExp = new RegExp('book_' + type +  '-.*');
    let str = book.classList.value.match(regExp);
    if (value === null) {
        console.log(regExp)
        book.classList.toggle(str)
    }
    else {
        book.classList.remove(str);
        book.classList.add(`book_${type}-${value}`)
    }
    
}