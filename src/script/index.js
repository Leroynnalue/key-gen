const info = document.querySelector('[info-toggler]')
const infoTab = document.querySelector('[info-tab]')

const Form = document.getElementsByName("myForm")[0]
const generateBtn = document.getElementById('submit')
const copyBtn = document.getElementById('copy')
const displayField = document.getElementById('display')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const lowerAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const upperAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const special = ['!', '@', '$', '#', ':', '%', '-', '_']


// Event Listeners
document.addEventListener('keydown', handleKeyboard)
info.addEventListener('click', toggleInfo)
generateBtn.addEventListener('click', generateKey)
copyBtn.addEventListener('click', copyBtnKey)


function toggleInfo() {
    infoTab.classList.toggle('show')
}

function generateKey(event) {

    if (event) {
        event.preventDefault()
    }

    const targetCharacters = new Array()

    const keylength = document.querySelector('[key-length]').value
    const specialKey = document.querySelector('[key-special]').checked
    const numberKey = document.querySelector('[key-number]').checked
    const uppercasekey = document.querySelector('[key-uppercase]').checked
    const lowercasekey = document.querySelector('[key-lowercase]').checked

    if (!uppercasekey && !lowercasekey && !numberKey && !specialKey) {

        upperAlpha.forEach(character => {
            targetCharacters.push(character)
        })

        lowerAlpha.forEach(character => {
            targetCharacters.push(character)
        })

        numbers.forEach(character => {
            targetCharacters.push(character)
        })

        special.forEach(character => {
            targetCharacters.push(character)
        })

    }

    if (uppercasekey) {
        upperAlpha.forEach(character => {
            targetCharacters.push(character)
        })
    }

    if (lowercasekey) {
        lowerAlpha.forEach(character => {
            targetCharacters.push(character)
        })
    }

    if (numberKey) {
        numbers.forEach(character => {
            targetCharacters.push(character)
        })
    }

    if (specialKey) {
        special.forEach(character => {
            targetCharacters.push(character)
        })
    }

    let randomNumber = function (start, range) {
        let number = Math.floor((Math.random() * range) + start)

        while (number > range) {
            number = Math.floor((Math.random() * range) + start)
        }

        return number
    }

    let random = (keylength > 4) ? keylength : randomNumber(8, 20)

    let key = []

    for (let x = 0; x < random; x++) {
        let i = randomNumber(8, targetCharacters.length)
        key[x] = targetCharacters[i]
    }

    displayField.value = key.join("")
    copyBtn.value = 'COPY'

}

function copyBtnKey(event) {

    if (event) {
        event.preventDefault()
    }

    if (displayField.value == '----') {
        alert(`GENERATE A KEY`)
    } else {
        displayField.select()
        displayField.setSelectionRange(0, 20)
        navigator.clipboard.writeText(displayField.value)
        copyBtn.value = 'Copied!'
    }

}

function handleKeyboard(key) {
    if ((key.key == 'c' || key.key == 'C') && key.ctrlKey) {
        copyBtnKey()
    } else if ((key.key == 'z' || key.key == 'Z') && key.ctrlKey) {
        generateKey()
    } else if ((key.key == 'x' || key.key == 'X') && key.ctrlKey) {
        toggleInfo()
    } else {
        return
    }
}