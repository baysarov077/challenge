const main = document.getElementById('main')
const body = document.body
const list = document.getElementById('list')
const addHeading = () =>{
   let heading = document.createElement('h1')
   heading.innerHTML = 'Работа с DOM'
   document.body.prepend(heading)
} 
const addLink = () => {
    let link = document.createElement('a')
    link.innerHTML = 'статья о DOM'
    link.href = 'https://ru.wikipedia.org/wiki/Document_Object_Model#:~:text=DOM%20(от%20англ.%20Document%20Object,накладывает%20ограничений%20на%20структуру%20документа'
    link.target = '_blank'
    main.append(link)
}
const bgColor = (str) => body.style.background = str

const addListItem = (str) => {
    let li = document.createElement('li')
    li.innerHTML = str
    list.append(li)
}
const removeDiv = () => {
    let rem = document.getElementById('copyright')
    rem.remove()
}

//Тег script нужно писать в конце body, потому что браузер читает документ сверху вниз,  и если поставить скрипт вверху файл, сайт будет грузиться дольше