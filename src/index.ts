import {add} from './add.js'

const button = document.querySelector('button')!
const input1 = document.getElementById('num1')! as HTMLInputElement
const input2 = document.getElementById('num2')! as HTMLInputElement
const paragraph = document.querySelector('p')!

// function add(num1:number, num2:number):number {
//     return num1 + num2
// }

button.addEventListener('click', ()=>{
    console.log('input1 ', input1)
    console.log('input2 ', input2)
    const result =add(+input1.value, +input2.value)
    console.log(result)
    paragraph.innerHTML = result.toString()
    
})