class App {
    constructor() {
        const form = document.querySelector('form#flickForm')
        form.addEventListener('submit', (ev) => {
            ev.preventDefault() //prevents from refreshing
            this.updateFlicks(ev)
        })
    }

/*updateHeader() {
    document.getElementById("secondary heading").innerHTML="it changed" 
}

updateCustom() {
    const formChange = document.querySelector('.changeIsGood') //gets the content of the textbox selected
    const formChangeText = formChange.value; //store the text in a variable
    document.getElementById("thisHeading").innerHTML=formChangeText //have the heading change
    event.preventDefault() //prevents from refreshing
    formChange.value='' //makes the text dissapear after written
}
const button = addEventListener('submit',updateCustom) //does the change
*/

renderProperty(name,value) {
    const span = document.createElement('span')
    span.classList.add(name)
    span.textContent = value
    return span
}

renderItem(flick) {
    const item = document.createElement('li')
    item.classList.add('flick')

    const properties = Object.keys(flick)

    properties.forEach((propertyName) => {
        const span = this.renderProperty(propertyName,flick[propertyName])
        item.appendChild(span)
    })
    return item
}

updateFlicks(ev) {
    const f = ev.target //takes in parameter

    const flick = {
        name: f.flickName.value,
        year: f.yearOfMovie.value,
    }
  
    const item = this.renderItem(flick)
    //item.textContent = flickName //gets the content
  
    const list = document.querySelector('#flicks') //finding the things with the content
    list.appendChild(item) //making a list 

    f.reset() //after the whole function reset 
    f.flickName.focus()
  }
}
const app = new App()



