import { Component } from "./component.js"

export class Input extends Component {
    #id
    constructor(id,tag,className){
        super(tag,className)
        this.#id = id
    }
}
