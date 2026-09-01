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

    const newQtdTd = document.createElement("td")
    const newQtdInp = document.createElement("input")

    const newDescriptionTd = document.createElement("td")
    const newDescriptionInp = document.createElement("input")

    const newRemoveTd = document.createElement("td")
    const newRemoveButton = document.createElement("button")




    newCell.setAttribute("scope", "row")

    let newIdNumber = i
    newCell.textContent = i++
    
    newInput.setAttribute("type", "text")
    newInput.setAttribute("placeholder", "Adicione um item")
    newInput.setAttribute("name", "item")
    newInput.setAttribute("id", "item" + newIdNumber)

    newQtdInp.setAttribute("type", "number")
    newQtdInp.setAttribute("name", "quantity")
    newQtdInp.setAttribute("id", "quantity" + newIdNumber)
    newQtdInp.setAttribute("min", "0")
    newQtdInp.setAttribute("max", "99")
    newQtdInp.value = 0

    newDescriptionInp.setAttribute("type", "text")
    newDescriptionInp.setAttribute("name", "description")
    newDescriptionInp.setAttribute("id", "description" + newIdNumber)
    newDescriptionInp.setAttribute("placeholder", "Descrição do item")

    newRemoveButton.setAttribute("type", "button")
    newRemoveButton.textContent = "Remover"


    itemCell.appendChild(newInput)
    newLine.appendChild(newCell)

    newLine.appendChild(itemCell)

    newQtdTd.appendChild(newQtdInp)
    newLine.appendChild(newQtdTd)

    newDescriptionTd.appendChild(newDescriptionInp)
    newLine.appendChild(newDescriptionTd)

    newRemoveTd.appendChild(newRemoveButton)
    newLine.appendChild(newRemoveTd)

    itemsTable.appendChild(newLine)


    newRemoveButton.addEventListener("click", () => newRemoveButton.parentElement.parentElement.remove())
})

