import { Component } from "./component.js";

export class Form extends Component {
    constructor(tag, className) {
        super(tag,className)
    }
    addElement(element){
        this.element.appendChild(element)
    }
}

