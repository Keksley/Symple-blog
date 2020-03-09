export class Component {
    constructor(id) {     //id - идентификатор компонента в html разметке
        this.$el = document.getElementById(id); //самый быстрый метод для доступа к html элементу
        //$ - классический идентификатор для DOM-элементов
        this.init();
    } 

    init() {} // Метод вызывается только после инициализации компонента элементом html

    onHide() {};
    onShow() {};

    hide() {
        this.$el.classList.add('hide');
        this.onHide();
    }

    show() {
        this.$el.classList.remove('hide');
        this.onShow();
    }
}