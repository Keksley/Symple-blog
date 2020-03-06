import {Component} from '../core/component';

export class HeaderComponent extends Component {
    constructor(id){
        super(id);
    }
    init() {
        if(localStorage.getItem('visited')){ //Проверяем была ли нажата кнопка "приступить"
            this.hide(); //И если да, скрываем header.component
        } 

        const btn = this.$el.querySelector('.js-header-start')
        btn.addEventListener('click', buttonHandler.bind(this))
    }
}
// Приватные функции для работы с компонентом
function buttonHandler() {
    localStorage.setItem('visited', JSON.stringify(true))
    this.hide();
}