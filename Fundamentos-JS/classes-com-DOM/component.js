export class Component{
    #tag
    #className
    constructor(tag, className){
        this.#tag = tag
        this.#className = className
        this.element = this.build()
    }
    build(){
        let newElement = document.createElement(this.#tag) 
        newElement.className = this.#className
        return newElement
    }
    render(){
        let body = document.getElementsByTagName('body')[0]
        body.appendChild(this.element)
    }
}