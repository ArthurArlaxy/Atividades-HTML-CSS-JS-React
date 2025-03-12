import { Component } from "./component.js"

export class Input extends Component {
    #id
    constructor(id,className){
        super(id,"input",className)
        this.#id = id
    }
}
