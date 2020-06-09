
const FormView = {};

FormView.setup = function (el) {
    this.resetEl = el.querySelector('[type=reset]')
    this.showResetBtn(false);
}

FormView.showResetBtn = function (show = true){
    this.resetEl.style.display = show ? 'block' : 'none'
}

export default FormView