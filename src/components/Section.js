export default class Section {
    constructor( renderer, sectionSelector ) {
        this._renderer = renderer;
        this._section = document.querySelector(sectionSelector);
    }

    addInitialItems (items) {
        this._items = items;
        this._items.forEach((card) => {
            this.appendItem(card);
        })
    }

    appendItem (element) {
       this._section.append(this._renderer(element)); 
    }

    prependItem (element) {
        this._section.prepend(this._renderer(element));
    }
}