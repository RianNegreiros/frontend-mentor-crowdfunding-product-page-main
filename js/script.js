const bookmark = document.querySelector('.rightBtn')
const circle = document.querySelector('circle')
const path = document.querySelector('path')

const backProject = document.querySelector('.leftBtn')

const btnSelectReward1 = document.querySelector('.btnSelectReward1')
const btnSelectReward2 = document.querySelector('.btnSelectReward2')

const modalContainer = document.querySelector('.modal-container')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.closeModal')

const inputRadio1 = document.querySelector('.inputRadio1')
const inputRadio2 = document.querySelector('.inputRadio2')
const inputRadio3 = document.querySelector('.inputRadio3')

const inputRadioChecked1 = document.querySelector('.inputRadioChecked1')
const inputRadioChecked2 = document.querySelector('.inputRadioChecked2')
const inputRadioChecked3 = document.querySelector('.inputRadioChecked3')

const modalArticle1 = document.querySelector('.modalArticle1')
const modalArticle2 = document.querySelector('.modalArticle2')
const modalArticle3 = document.querySelector('.modalArticle3')

const btnContinue = document.querySelectorAll('.btnContinue')

const modalArticleFooterClose1 = document.querySelector('.modalArticleFooterClose1')
const modalArticleFooterClose2 = document.querySelector('.modalArticleFooterClose2')
const modalArticleFooterClose3 = document.querySelector('.modalArticleFooterClose3')

const closeModalThanks = document.querySelector('.close-modalThanks')

const modalThanksContainer = document.querySelector('.modalThanks-container')
const modalThanks = document.querySelector('.modalThanks')

const NumberSpan75 = document.querySelectorAll('.NumberSpan75')
const NumberSpan25 = document.querySelectorAll('.NumberSpan25')

const pledgeInput25 = document.getElementById('pledgeInput25').value
const pledgeInput75 = document.getElementById('pledgeInput75').value

const backedNumber = document.querySelector('.backedNumber')
const backersNumber = document.querySelector('.backersNumber')

const totalBacked = document.querySelector('.totalBacked')
const progress = document.querySelector('.progress')

bookmark.addEventListener('click', () =>
bookmark.classList.toggle('rightBtnMarked')
)

bookmark.addEventListener('click', () => {
    if(bookmark.lastElementChild.innerHTML === 'Bookmark') {
        return bookmark.lastElementChild.innerHTML = 'Bookmarked'
    }
    return bookmark.lastElementChild.innerHTML = 'Bookmark'
})

inputRadio1.addEventListener('click', () => {
    inputRadioChecked1.classList.toggle('inputRadioCheckedSeleted1')
    modalArticleFooterClose1.classList.toggle('modalArticleFooterClose1')
    modalArticle1.classList.toggle('modalArticleSelected')
})

inputRadio2.addEventListener('click', () => {
    inputRadioChecked2.classList.toggle('inputRadioCheckedSeleted2')
    modalArticleFooterClose2.classList.toggle('modalArticleFooterClose2')
    modalArticle2.classList.toggle('modalArticleSelected')
})


inputRadio3.addEventListener('click', () => {
    inputRadioChecked3.classList.toggle('inputRadioCheckedSeleted3')
    modalArticleFooterClose3.classList.toggle('modalArticleFooterClose3')
    modalArticle3.classList.toggle('modalArticleSelected')
})

closeModal.addEventListener('click', () => {
    modal.style.display = 'none'
    modalContainer.style.display = 'none'
})

backProject.addEventListener('click', () => {
    modalContainer.style.display = 'flex'
    modal.style.display = 'block'
})

btnSelectReward1.addEventListener('click', () => {
    modalContainer.style.display = 'flex'
    modal.style.display = 'block'
    inputRadioChecked2.classList.toggle('inputRadioCheckedSeleted2')
    modalArticleFooterClose2.classList.toggle('modalArticleFooterClose2')
    modalArticle2.classList.toggle('modalArticleSelected')
})

btnSelectReward2.addEventListener('click', () => {
    modalContainer.style.display = 'flex'
    modal.style.display = 'block'
    inputRadioChecked3.classList.toggle('inputRadioCheckedSeleted3')
    modalArticleFooterClose3.classList.toggle('modalArticleFooterClose3')
    modalArticle3.classList.toggle('modalArticleSelected')
})

closeModalThanks.addEventListener('click', () => {
    modalThanksContainer.style.display = 'none'
    modalThanks.style.display = 'none'
})

btnContinue.forEach((button) => {
    button.addEventListener('click', () => {
        modal.style.display = 'none'
        modalContainer.style.display = 'none'
        modalThanksContainer.style.display = 'flex'
        modalThanks.style.display = 'flex'
        if(button.parentElement.firstElementChild.lastElementChild.id === 'pledgeInput25') {
            NumberSpan25.forEach((number) => number.innerHTML = parseInt(number.textContent) - 1)
            const insertAt = (str, sub, pos) => `${str.slice(0, pos)}${sub}${str.slice(pos)}`
            const number = parseFloat(backedNumber.textContent.substr(1).replace(/\,/g, '') ) + parseFloat(pledgeInput25)
            backedNumber.innerHTML = insertAt(number.toString(), ',', 2)
            const backersNumberToConvert = parseFloat(backersNumber.textContent.replace(/\,/g, '')) + 1
            backersNumber.innerHTML = insertAt(backersNumberToConvert.toString(), ',', 1)
        } else if (button.parentElement.firstElementChild.lastElementChild.id === 'pledgeInput75') {
            NumberSpan75.forEach((number) => number.innerHTML = parseInt(number.textContent) - 1)
            const insertAt = (str, sub, pos) => `${str.slice(0, pos)}${sub}${str.slice(pos)}`
            const number = parseFloat(backedNumber.textContent.substr(1).replace(/\,/g, '') ) + parseFloat(pledgeInput75)
            backedNumber.innerHTML = insertAt(number.toString(), ',', 2)
            const backersNumberToConvert = parseFloat(backersNumber.textContent.replace(/\,/g, '')) + 1
            backersNumber.innerHTML = insertAt(backersNumberToConvert.toString(), ',', 1)
        }
    })
})

progress.style.width = parseInt(backedNumber.textContent.substr(1)) + '%'