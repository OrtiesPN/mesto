export default class Section {
    constructor( {items, renderer }, sectionSelector,  ) {
        this._items = items;
        this._renderer = renderer;
        this._section = document.querySelector(sectionSelector);
    }

    addInitialItems () {
        this._items.forEach((element) => {
            this.appendItem(this._renderer(element));
        })
    }

    appendItem (domElement) {
       this._section.append(domElement); 
    }

    prependItem (domElement) {
        this._section.prepend(domElement);
    }
}