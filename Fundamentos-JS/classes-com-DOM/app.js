import { Component } from './component.js'
import { Form } from './form.js'
import { Input } from './input.js'
import { Label } from './label.js'

let form = new Form('mainForm')
let input = new Input( 'input', 'input-title')
let label = new Label ('Crie o Título','input','label')

form.addElement(input.element,label.element)
console.log(form)
console.log(input)
console.log(label)
form.render()
label.render()
input.render()