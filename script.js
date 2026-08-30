const formulario = document.querySelector("form")
const idade = document.querySelector("#idade")
const atributo = document.querySelectorAll(".attribute")
const ageError = document.querySelector("#ageError")
const attributeError = document.querySelector("#attributeError")
const foto = document.querySelector("#foto")
const photoError = document.querySelector("#photoError")
const itemsTable = document.querySelector("#itemsTable")
const addItem = document.querySelector("#addItem")

formulario.addEventListener("submit", function(event){
    event.preventDefault()

    //Age Verification

    const ageValue = Number(idade.value)

    if(ageValue < 18){
        ageError.textContent = "Não permitimos menores de 18 anos."
        return 
    }

    ageError.textContent = ""

    //Attribute Sum and Error
    

    let attributesSum = 0

    atributo.forEach(element => {
        const valorAttribute = Number(element.value)

        attributesSum += valorAttribute

    });

    if(attributesSum > 75){
        attributeError.textContent = "Limite de 75 pontos atingido"
        return
    }

    attributeError.textContent = ""

    //Photo Error

    if(foto.files[0].size > 5 * 1024 * 1024){
        photoError.textContent = "Tamanho máximo de 5MB"

        return
    }
    photoError.textContent = ""

    
    
    
    
})

//Add Item Button

let i = 4

addItem.addEventListener("click", function(){
    const newLine = document.createElement("tr")
    const newCell = document.createElement("th")
    const itemCell = document.createElement("td")
    const newInput = document.createElement("input")

    newCell.setAttribute("scope", "row")
    newCell.textContent = i++
    
    newInput.setAttribute("type", "text")

    itemCell.appendChild(newInput)
    newLine.appendChild(newCell)
    newLine.appendChild(itemCell)
    itemsTable.appendChild(newLine)
})

