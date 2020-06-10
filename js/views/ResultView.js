import View from './View.js'

const tag = '[ResultView.js]';
const ResultView = Object.create(View);

ResultView.setup = function (el){
    this.init(el)
}

ResultView.render = function (data = []) {
    console.log(tag, 'render()', data, this.el);    
    this.el.innerHTML = data.length ? this.getSearchResultHtml(data) : '검색 결과가 없습니다.';
}

ResultView.getSearchResultHtml = function (data) {
     console.log(tag, 'getSearchResultHtml()', data);
    return data.reduce((html, item) => {
        html += this.getSearchItemHtml(item)
        return html
    }, '<ul>') + '</ul>'   
}

ResultView.getSearchItemHtml = function (item) {
    return `<li><img src="${item.image}"><p>${item.name}</p></li>`
}

export default ResultView;