import { Component } from "./component.js"

export class Label extends Component {
    #for
    constructor(text,setFor,className){
        super("label",className)
        this.text = text
        this.#for = setFor
        this.setText()
    }
    setText(){
        this.element.innerText = this.text
        this.element.setAttribute('for',this.#for)
    }
}
