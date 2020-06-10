import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import SearchModel from '../models/SearchModel.js'
import TabView from '../views/TabView.js'

const tag = '[MainController]'

export default {
    init(){
        console.log(tag, 'init()');
        FormView.setup(document.querySelector('form'))
            .on('@submit', e => this.onSubmit(e.detail.input))
            .on('@reset', e => this.onResetForm())
        ResultView.setup(document.querySelector('#search-result'));    
        TabView.setup(document.querySelector('#tabs'))
            .on('@changeTab', e => this.onChangeTab());

        this.selectedTab = '추천 검색어';
        this.renderView();
    },
    renderView() {
        TabView.setActiveTab(this.selectedTab);
    },
    onSubmit(input){
        console.log(tag, 'onSubmit()', input);
        this.search(input);
    },
    onResetForm(){
       console.log(tag, 'onResetForm()');
       ResultView.hide();
    },
    search(query){
        console.log(tag, 'search()', query);
        //search api
        SearchModel.list(query).then(data => {
            console.log(tag, 'list()', data);
            this.onSearchResult(data);
        })
    },
    onSearchResult(data){
        ResultView.render(data);
    },
    onChangeTab(){
        console.log(tag, 'onChangeTab()');
    }
}