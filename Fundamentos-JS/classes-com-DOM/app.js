import { Form } from './form.js'
import { Input } from './input.js'
import { Label } from './label.js'

let form = new Form('form','mainForm')
let input = new Input('input', 'input', 'input-title')
let label = new Label ('Crie o Título','input','label','label')

form.addElement(input.element,label.element)
console.log(form)
console.log(input)
console.log(label)
form.render()
label.render()
input.render()