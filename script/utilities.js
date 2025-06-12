const getInputValueById=(id)=>{
    const inputValue=document.getElementById(id)
    return inputValue
}

const getTextValueById=(id)=>{
    const textValue=document.getElementById(id).innerText
const textNumber = parseFloat(textValue)
    return textNumber
}