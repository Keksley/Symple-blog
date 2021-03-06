import { Component } from '../core/component';
import { apiService } from '../services/api.service';
import { renderPost } from '../templates/post.template';


export class FavoritComponent extends Component {
    constructor(id, {loader}){
        super(id);
        this.loader = loader;
    }

    init() {
        this.$el.addEventListener('click', linkClickHandler.bind(this));
    }

    onShow() {
        const favorites = JSON.parse(localStorage.getItem('favorites'));
        const html = renderList(favorites);
        this.$el.insertAdjacentHTML('afterbegin', html)
    }
    onHide() {
        this.$el.innerHTML = '';
    }
}

function renderList(list = []) {
    if(list && list.length) {
        return `
        <ul>
            ${list.map(item => `<li><a href="#" class="js-link" data-id="${item.id}">${item.title}</a></li>`).join(' ')}
        </ul>
        `
    }

    return `<p class="center"></p>`
}

async function linkClickHandler(event) {
    event.preventDefault();
    
    if(event.target.classList.contains('js-link')) {
        const id = event.target.dataset.id;
        this.$el.innerHTML = '';
        this.loader.show();
        const post = await apiService.fetchPostById(id);
        this.$el.insertAdjacentHTML('afterbegin', renderPost(post, {withButton: false}));
        this.loader.hide();
    }
}