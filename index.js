const button1 = document.querySelector('update button')

function updateHeader() {
    const heading = document.getElementById("secondary heading")
    heading.textContent = "it changed"
}

class App {
    constructor() {
        const form = document.querySelector('form#flickForm')
        form.addEventListener('submit', (ev) => {
            ev.preventDefault() //prevents from refreshing
            this.updateFlicks(ev)
        })

        this.flicks=[] //making an array
    }

/*const button1 = document.querySelector('update button')
updateHeader() {
    const heading = document.getElementById("secondary heading")
    heading.textContent = "it changed"
}
//button1.addEventListener('click',updateHeader)

/*updateCustom() {
    const formChange = document.querySelector('.changeIsGood') //gets the content of the textbox selected
    const formChangeText = formChange.value; //store the text in a variable
    document.getElementById("thisHeading").innerHTML=formChangeText //have the heading change
    event.preventDefault() //prevents from refreshing
    formChange.value='' //makes the text dissapear after written
}
const button = addEventListener('submit',updateCustom) //does the change
*/

renderProperty(name,value) { //creating span function
    const span = document.createElement('span')
    span.classList.add(name)
    span.textContent = value
    return span
}

renderItem(flick) { //items in the list function 
    const item = document.createElement('li')
    item.classList.add('flick')

    const properties = Object.keys(flick)

    properties.forEach((propertyName) => {
        const span = this.renderProperty(propertyName,flick[propertyName])
        item.appendChild(span)
    })

    const deleteButton = this.renderButton('delete','delete') //created delete button

    deleteButton.addEventListener('click',(ev) => { //button to work with deleteItem function
        this.deleteItem(ev)
    })

    item.appendChild(deleteButton) //appending button to list items

    return item

}

renderButton(name,value) { //function for creating button kind of like span function
    const button2 = document.createElement('button')
    button2.classList.add(name)
    button2.textContent = value
    return button2
}

deleteItem(ev) { //deleting from function
    ev.parentNode.parentNode.removeChild(ev.parentNode)
}

updateFlicks(ev) {
    const f = ev.target //takes in parameter

    const flick = {
        name: f.flickName.value,
        year: f.yearOfMovie.value,
    }

    this.flicks.push(flick) //adding flick objects to array hopefully
  
    const item = this.renderItem(flick)
  
    const list = document.querySelector('#flicks') //finding the things with the content
    list.appendChild(item) //making a list 

    f.reset() //after the whole function reset 
    f.flickName.focus()
  }
}
const app = new App()

button1.addEventListener('click',updateHeader)


