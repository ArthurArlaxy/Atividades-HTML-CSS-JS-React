import { Component } from "./component.js";

export class Form extends Component {
    constructor(className) {
        super('form',className)
    }
    addElement(...elements){
        elements.forEach(element => {
            this.element.append(element)
        })
    }
}

