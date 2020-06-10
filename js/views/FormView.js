import View from './View.js'

const tag = '[FormView.js]';
const FormView = Object.create(View);

FormView.setup = function (el) {
    this.init(el);
    this.resetEl = el.querySelector('[type=reset]')
    this.inputEl = el.querySelector('[type=text]')
    this.showResetBtn(false);
    this.bindEvents();
    return this;
}

FormView.showResetBtn = function (show = true) {
    this.resetEl.style.display = show ? 'block' : 'none'
}

FormView.bindEvents = function () {
    console.log('bindEvents');
    this.on('submit', e => e.preventDefault())
    this.inputEl.addEventListener('keyup', (e) => this.onKeyup(e));
    this.resetEl.addEventListener('click', (e) => this.onClickReset(e));
}

FormView.onKeyup = function (e) {
    console.log(tag, 'onKeyup()', this.inputEl.value.length);
    const enter = 13;
    this.showResetBtn(this.inputEl.value.length);
    console.log('enter before', e.keyCode)
    if (!this.inputEl.value.length) {
        this.emit('@reset')
    }
    if (e.keyCode !== enter) return

    console.log('enter after')
    //todo.. enter
    this.emit('@submit', { input: this.inputEl.value })
}

FormView.onClickReset = function (e) {
    console.log(tag, 'onClickReset', e);
    this.emit('@reset');
    this.showResetBtn(false);
}

export default FormView