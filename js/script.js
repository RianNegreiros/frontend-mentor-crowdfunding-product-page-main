const bookmark = document.querySelector('.rightBtn')
const circle = document.querySelector('circle')
const path = document.querySelector('path')

const backProject = document.querySelector('.leftBtn')

const modalContainer = document.querySelector('.modal-container')
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.closeModal')

const inputRadioChecked1 = document.querySelector('.inputRadioChecked1')
const inputRadioChecked2 = document.querySelector('.inputRadioChecked2')
const inputRadioChecked3 = document.querySelector('.inputRadioChecked3')

const modalArticle1 = document.querySelector('.modalArticle1')
const modalArticle2 = document.querySelector('.modalArticle2')
const modalArticle3 = document.querySelector('.modalArticle3')

const modalArticleFooterClose1 = document.querySelector('.modalArticleFooterClose1')
const modalArticleFooterClose2 = document.querySelector('.modalArticleFooterClose2')
const modalArticleFooterClose3 = document.querySelector('.modalArticleFooterClose3')

bookmark.addEventListener('click', () =>
bookmark.classList.toggle('rightBtnMarked')
)

bookmark.addEventListener('click', () => {
    if(bookmark.lastElementChild.innerHTML === 'Bookmark') {
        return bookmark.lastElementChild.innerHTML = 'Bookmarked'
    }
    return bookmark.lastElementChild.innerHTML = 'Bookmark'
})

modalArticle1.addEventListener('click', () => {
    inputRadioChecked1.classList.toggle('inputRadioCheckedSeleted1')
    modalArticleFooterClose1.classList.toggle('modalArticleFooterClose1')
    modalArticle1.classList.toggle('modalArticleSelected')
})

modalArticle2.addEventListener('click', () => {
    inputRadioChecked2.classList.toggle('inputRadioCheckedSeleted2')
    modalArticleFooterClose2.classList.toggle('modalArticleFooterClose2')
    modalArticle2.classList.toggle('modalArticleSelected')
})


modalArticle3.addEventListener('click', () => {
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
