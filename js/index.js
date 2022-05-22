const BTN_MENU = document.getElementById('btn-menu')
const NAV_MENU = document.getElementById('nav-menu')
BTN_MENU.addEventListener('click', () => {
    NAV_MENU.classList.toggle('show-menu')
})
const MAIN = document.getElementById('main')
const MODAL = document.getElementById('modal')
const show_modal = () => {
    MODAL.classList.add('modal-show')
    MAIN.classList.add('overflow-hidden')
}
const IMG_VIEW_ARRAY = [
    document.getElementById('img-view-1'),
    document.getElementById('img-view-2'),
    document.getElementById('img-view-3'),
    document.getElementById('img-view-4'),
]
IMG_VIEW_ARRAY.forEach((item, i) => {
    item.addEventListener('click', () => {
        MODAL_DETAIL_ARRAY[i].classList.add('modal-show')
        show_modal()
    })
})
const close_modal = () => {
    MODAL.classList.remove('modal-show')
    MODAL_DETAIL_ARRAY.forEach(item => {
        item.classList.remove('modal-show')
    })
    MAIN.classList.remove('overflow-hidden')
}
const MODAL_CLOSE = document.getElementById('modal-close')
MODAL_CLOSE.addEventListener('click', () => {
    close_modal()
})
const MODAL_VIEW = document.getElementById('modal-view')
const MODAL_DETAIL_ARRAY = [
    document.getElementById('modal-detail-1'),
    document.getElementById('modal-detail-2'),
    document.getElementById('modal-detail-3'),
    document.getElementById('modal-detail-4'),
]
MODAL_VIEW.addEventListener('click', () => {
    MODAL.classList.toggle('overflow-auto')
    MODAL_DETAIL_ARRAY.forEach(item => {
        item.classList.toggle('zoom-img')
    })
})