//console.log('It works!')



function updateHeader() {
    document.getElementById("secondary heading").innerHTML="it changed"
}

function updateCustom() {
    const formChange = document.querySelector('.changeIsGood')
    const formChangeText = formChange.value;
    document.getElementById("thisHeading").innerHTML=formChangeText
    event.preventDefault()
}

const button = addEventListener('submit',updateCustom)




