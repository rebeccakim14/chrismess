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
