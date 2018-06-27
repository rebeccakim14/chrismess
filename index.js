function updateHeader() {
    document.getElementById("secondary heading").innerHTML="it changed" 
}

function updateCustom() {
    const formChange = document.querySelector('.changeIsGood') //gets the content of the textbox selected
    const formChangeText = formChange.value; //store the text in a variable
    document.getElementById("thisHeading").innerHTML=formChangeText //have the heading change
    event.preventDefault() //prevents from refreshing
    formChange.value='' //makes the text dissapear after written
}
const button = addEventListener('submit',updateCustom) //does the change


const form = document.querySelector('form#flickForm')
function updateFlicks(ev) {
    ev.preventDefault() //prevents from refreshing 
    const f = ev.target //takes in parameter
  
    const flickName = f.flickName.value //gets the content of the form
    const item = document.createElement('li') //create a list element
    item.textContent = flickName //gets the content
  
    const list = document.querySelector('#flicks') //finding the things with the content
    list.appendChild(item) //making a list 

    const mYear = f.yearOfMovie.value //getting the value of the year
    const item2 = document.createElement('li')
    item2.textContent = mYear //text box content

    list.appendChild(item2)

    f.reset() //after the whole function reset 
}
form.addEventListener('submit',updateFlicks)



