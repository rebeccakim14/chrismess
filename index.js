const button1 = document.querySelector('update button')

function updateHeader() {
    const heading = document.getElementById("secondary heading")
    heading.textContent = "it changed"
}

class App {
    constructor() {
        this.flicks=[] //making an array
        const form = document.querySelector('form#flickForm')
        form.addEventListener('submit', (ev) => {
            ev.preventDefault() //prevents from refreshing
            this.updateFlicks(ev)
        })
    }

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
    //const favButton = this.renderButton('fave','fave') //created favorite button

    deleteButton.addEventListener('click',(ev) => { //button to work with deleteItem function
        this.deleteItem(ev)
    })

    /*favButton.addEventListener('click', (ev) => {
        this.favItem(ev)
    })
    */

    item.appendChild(deleteButton) //appending delete button to list items
    //item.appendChild(favButton)

    return item

}

renderButton(name,value) { //function for creating button kind of like span function
    const button2 = document.createElement('button')
    button2.classList.add(name)
    button2.textContent = value
    return button2
}

/*favItem(ev) {
    const list3 = document.getElementById('flicks')
    if (list3.hasChildNodes()) {
        list3.childNodes.textContent = ' this is your favorite' 
    }
}
*/

deleteItem(ev) { //deleting function
    const list2 = document.getElementById('flicks')
    if (list2.hasChildNodes()) {
        list2.removeChild(list2.childNodes[0]);
    }
    const i = this.flicks.indexOf(flick) //deleting from array
    this.flicks.splice(i,1)
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


