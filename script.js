const formulario = document.querySelector("form")
const idade = document.querySelector("#idade")
const atributo = document.querySelectorAll(".attribute")
const ageError = document.querySelector("#ageError")
const attributeError = document.querySelector("#attributeError")
const foto = document.querySelector("#foto")
const photoError = document.querySelector("#photoError")
const itemsContainer = document.querySelector(".items-container")
const addItem = document.querySelector("#addItem")
const toast = document.querySelector("#toast")

formulario.addEventListener("submit", function (event) {
    event.preventDefault()

    //Age Verification

    const ageValue = Number(idade.value)

    if (ageValue < 18) {
        ageError.textContent = "Não permitimos menores de 18 anos."
        return
    }

    ageError.textContent = ""

    //Attribute Sum and Error

    let attributesSum = 0

    atributo.forEach((element) => {
        const valorAttribute = Number(element.value)

        attributesSum += valorAttribute
    })

    if (attributesSum > 75) {
        attributeError.textContent = "Limite de 75 pontos atingido"
        return
    }

    attributeError.textContent = ""

    //Photo Error

    if (foto.files[0] && foto.files[0].size > 5 * 1024 * 1024) {
        photoError.textContent = "Tamanho máximo de 5MB"

        return
    }
    photoError.textContent = ""

    toast.classList.add("show")

    setTimeout(() => {
        toast.classList.remove("show")
    }, 3000)
})

//Add Item Button

function updateItemNumbers() {
    const itemRows = itemsContainer.querySelectorAll(".item-row")

    itemRows.forEach((row, index) => {
        row.firstElementChild.textContent = index + 1
    })
}

let i = 2
let newId = 2

addItem.addEventListener("click", function () {
    const newLine = document.createElement("div")
    newLine.classList.add("item-row")

    const newCell = document.createElement("span")

    const newInput = document.createElement("input")

    const newQtdInp = document.createElement("input")
    const numberInput = document.createElement("div")
    const numberControls = document.createElement("div")
    const upButton = document.createElement("button")
    const downButton = document.createElement("button")

    const newDescriptionInp = document.createElement("input")

    const newRemoveButton = document.createElement("button")
    const trashIcon = document.createElement("i")

    const newItemField = document.createElement("div")
    const newQtdField = document.createElement("div")
    const newDescriptionField = document.createElement("div")

    const itemLabel = document.createElement("label")
    const qtdLabel = document.createElement("label")
    const descriptionLabel = document.createElement("label")

    itemLabel.textContent = "Nome"
    qtdLabel.textContent = "Quantidade"
    descriptionLabel.textContent = "Descrição"

    newRemoveButton.setAttribute("type", "button")
    trashIcon.classList.add("fa-solid", "fa-trash")
    newRemoveButton.appendChild(trashIcon)

    newItemField.classList.add("item-field")
    newQtdField.classList.add("item-field")
    newDescriptionField.classList.add("item-field")

    let newIdNumber = newId++
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

    numberInput.classList.add("number-input")
    numberControls.classList.add("number-controls")

    upButton.classList.add("number-up")
    downButton.classList.add("number-down")

    upButton.setAttribute("type", "button")
    downButton.setAttribute("type", "button")

    upButton.setAttribute("aria-label", "Aumentar quantidade")
    downButton.setAttribute("aria-label", "Diminuir quantidade")

    upButton.textContent = "▲"
    downButton.textContent = "▼"

    newDescriptionInp.setAttribute("type", "text")
    newDescriptionInp.setAttribute("name", "description")
    newDescriptionInp.setAttribute("id", "description" + newIdNumber)
    newDescriptionInp.setAttribute("placeholder", "Descrição do item")

    itemLabel.setAttribute("for", "item" + newIdNumber)
    qtdLabel.setAttribute("for", "quantity" + newIdNumber)
    descriptionLabel.setAttribute("for", "description" + newIdNumber)

    newItemField.appendChild(itemLabel)
    newItemField.appendChild(newInput)

    newQtdField.appendChild(qtdLabel)

    numberControls.appendChild(upButton)
    numberControls.appendChild(downButton)

    numberInput.appendChild(newQtdInp)
    numberInput.appendChild(numberControls)

    newQtdField.appendChild(numberInput)

    newDescriptionField.appendChild(descriptionLabel)
    newDescriptionField.appendChild(newDescriptionInp)

    newLine.appendChild(newCell)
    newLine.appendChild(newItemField)
    newLine.appendChild(newQtdField)
    newLine.appendChild(newDescriptionField)
    newLine.appendChild(newRemoveButton)

    itemsContainer.appendChild(newLine)

    upButton.addEventListener("click", () => {
        newQtdInp.stepUp()
    })

    downButton.addEventListener("click", () => {
        newQtdInp.stepDown()
    })

    newRemoveButton.addEventListener("click", () => {
        newRemoveButton.parentElement.remove()
        updateItemNumbers()
    })
})

const numberInputs = document.querySelectorAll(".number-input")

numberInputs.forEach((numberInput) => {
    const input = numberInput.querySelector("input")
    const upButton = numberInput.querySelector(".number-up")
    const downButton = numberInput.querySelector(".number-down")

    upButton.addEventListener("click", () => {
        input.stepUp()
    })

    downButton.addEventListener("click", () => {
        input.stepDown()
    })
})
