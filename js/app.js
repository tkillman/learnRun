import MainController from './controllers/MainController.js'
const tag = '[app.js]'

document.addEventListener("DOMContentLoaded", () => {
    console.log(tag, 'addEventListener');
    MainController.init()
})


