const bookmark = document.querySelector('.rightBtn')
const circle = document.querySelector('circle')
const path = document.querySelector('path')
const webSiteName = document.querySelector('.webSiteName')

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

const modalArticleFooter1 = document.querySelector('.modalArticleFooter1')
const modalArticleFooter2 = document.querySelector('.modalArticleFooter2')
const modalArticleFooter3 = document.querySelector('.modalArticleFooter3')

const modalArticleFooterClose1 = document.querySelector('.modalArticleFooterClose1')
const modalArticleFooterClose2 = document.querySelector('.modalArticleFooterClose2')
const modalArticleFooterClose3 = document.querySelector('.modalArticleFooterClose3')

const closeModalThanks = document.querySelector('.close-modalThanks')

const modalThanksContainer = document.querySelector('.modalThanks-container')
const modalThanks = document.querySelector('.modalThanks')

const NumberSpan75 = document.querySelectorAll('.NumberSpan75')
const NumberSpan25 = document.querySelectorAll('.NumberSpan25')

const pledgeInput = document.getElementById('pledgeInput').value
const pledgeInput25 = document.getElementById('pledgeInput25').value
const pledgeInput75 = document.getElementById('pledgeInput75').value

const backedNumber = document.querySelector('.backedNumber')
const backersNumber = document.querySelector('.backersNumber')

const totalBacked = document.querySelector('.totalBacked')
const progress = document.querySelector('.progress')

const hamburgerContainer = document.querySelector('.hamburger-container')
const navModalContainer = document.querySelector('.navModal-container')

const closeNavModal = document.querySelector('.closeNavModal')
const navModalHeader = document.querySelector('.navModalHeader')

bookmark.addEventListener('click', () =>
    bookmark.classList.toggle('rightBtnMarked')
)

bookmark.addEventListener('click', () => {
    if (bookmark.lastElementChild.innerHTML === 'Bookmark') {
        return bookmark.lastElementChild.innerHTML = 'Bookmarked'
    }
    return bookmark.lastElementChild.innerHTML = 'Bookmark'
})

inputRadio1.addEventListener('click', () => {
    inputRadioChecked1.classList.toggle('inputRadioCheckedSeleted1')
    inputRadioChecked2.classList.remove('inputRadioCheckedSeleted2')
    inputRadioChecked3.classList.remove('inputRadioCheckedSeleted3')

    modalArticleFooter1.classList.toggle('modalArticleFooterClose1')
    modalArticleFooter2.classList.add('modalArticleFooterClose2')
    modalArticleFooter3.classList.add('modalArticleFooterClose3')

    modalArticle1.classList.toggle('modalArticleSelected')
    modalArticle2.classList.remove('modalArticleSelected')
    modalArticle3.classList.remove('modalArticleSelected')
})

inputRadio2.addEventListener('click', () => {
    inputRadioChecked2.classList.toggle('inputRadioCheckedSeleted2')
    inputRadioChecked1.classList.remove('inputRadioCheckedSeleted1')
    inputRadioChecked3.classList.remove('inputRadioCheckedSeleted3')

    modalArticleFooter2.classList.toggle('modalArticleFooterClose2')
    modalArticleFooter1.classList.add('modalArticleFooterClose1')
    modalArticleFooter3.classList.add('modalArticleFooterClose3')

    modalArticle2.classList.toggle('modalArticleSelected')
    modalArticle1.classList.remove('modalArticleSelected')
    modalArticle3.classList.remove('modalArticleSelected')
})


inputRadio3.addEventListener('click', () => {
    inputRadioChecked3.classList.toggle('inputRadioCheckedSeleted3')
    inputRadioChecked1.classList.remove('inputRadioCheckedSeleted1')
    inputRadioChecked2.classList.remove('inputRadioCheckedSeleted2')

    modalArticleFooter3.classList.toggle('modalArticleFooterClose3')
    modalArticleFooter1.classList.add('modalArticleFooterClose1')
    modalArticleFooter2.classList.add('modalArticleFooterClose2')

    modalArticle3.classList.toggle('modalArticleSelected')
    modalArticle1.classList.remove('modalArticleSelected')
    modalArticle2.classList.remove('modalArticleSelected')
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

        switch (button.parentElement.firstElementChild.lastElementChild.id) {
            case 'pledgeInput':
                const newBackedNumber1 = parseInt(backedNumber.textContent.replace(',', '').substr(1)) + parseInt(pledgeInput)
                const newBackersNumber1 = parseInt(backersNumber.textContent.replace(',', '')) + 1
                backedNumber.innerHTML = `$${newBackedNumber1.toLocaleString()}`
                backersNumber.innerHTML = newBackersNumber.toLocaleString()
                break;
            case 'pledgeInput25':
                const newBackedNumber2 = parseInt(backedNumber.textContent.replace(',', '').substr(1)) + parseInt(pledgeInput25)
                const newBackersNumber2 = parseInt(backersNumber.textContent.replace(',', '')) + 1
                backedNumber.innerHTML = `$${newBackedNumber2.toLocaleString()}`
                backersNumber.innerHTML = newBackersNumber2.toLocaleString()
                break;
            case 'pledgeInput75':
                const newBackedNumber3 = parseInt(backedNumber.textContent.replace(',', '').substr(1)) + parseInt(pledgeInput75)
                const newBackersNumber3 = parseInt(backersNumber.textContent.replace(',', '')) + 1
                backedNumber.innerHTML = `$${newBackedNumber3.toLocaleString()}`
                backersNumber.innerHTML = newBackersNumber3.toLocaleString()
                break;
        }
    })
})

hamburgerContainer.addEventListener('click', () => {
    navModalContainer.style.display = 'flex'
    webSiteName.style.display = 'none'
    hamburgerContainer.style.display = 'none'
})

closeNavModal.addEventListener('click', () => {
    navModalContainer.style.display = 'none'
    webSiteName.style.display = 'flex'
    hamburgerContainer.style.display = 'flex'
})

progress.style.width = parseInt(backedNumber.textContent.substr(1)) + '%'