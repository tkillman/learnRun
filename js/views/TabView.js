import View from './View.js'

const tag = '[TabView]';

const TabView = Object.create(View);

TabView.setup = function (el) {
    this.init(el);
    
    this.liEl = el.querySelectorAll('li');
    this.bindEvents();
    return this
}

TabView.setActiveTab = function (tabName) {
    console.log(tag, 'setActiveTab()', tabName, this.el.querySelector('li'));
    Array.from(this.el.querySelectorAll('li')).forEach(li => {
        console.log(tag, 'forEach()', li.innerHTML);
        li.className = li.innerHTML === tabName ? 'active' : ''
    })
}

TabView.bindEvents = function () {
    console.log(tag, 'bindEvents()');
    Array.from(this.el.querySelectorAll('li')).forEach(li => {
        li.addEventListener('click', (e) => this.onTabClick(li.innerHTML));
    })
}

TabView.onTabClick = function (activeTabName) {
    console.log(tag, 'onTabClick()', activeTabName);
    this.setActiveTab(activeTabName);
    this.emit('@changeTab');
}

TabView.render = function (data = []) {
    console.log(tag, 'render()', data, this.el);    
}
export default TabView;