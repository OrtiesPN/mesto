export default class Section {
    constructor( {items, renderer }, sectionSelector,  ) {
        this._items = items;
        this._renderer = renderer;
        this._section = document.querySelector(sectionSelector);
    }

    addInitialItems () {
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