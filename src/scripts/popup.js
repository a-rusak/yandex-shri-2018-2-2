import {fillPopup} from './popup-data'

document.addEventListener('DOMContentLoaded', () => {
  const popup  = document.querySelector('.popup__container')
  const fader = document.querySelector('.popup__fader')

  if (popup === null || fader === null) {
    return
  }

  document.querySelectorAll('.popup__checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', togglePopup)
  })
  fader.addEventListener('click', evt => {
    evt && evt.target && evt.target.dataset.cardId && document.querySelector(`#${evt.target.dataset.cardId}`).click()
  })

  const popupTransition = getComputedStyle(popup).transition
  popup.style.transition = 'none'

  function togglePopup(evt) {
    evt &&
    evt.target &&
    evt.target.dataset.cardId &&
    (evt.target.checked ? openPopup(evt.target.dataset.cardId) : closePopup(evt.target.dataset.cardId))
  }

  function openPopup(id) {
    const el = document.querySelector(`#${id}`)
    const elDim = el.getBoundingClientRect()

    fillPopup(popup, el)

    const pWidth = popup.offsetWidth
    const pHeight = popup.offsetHeight
    const pLeft = (document.documentElement.clientWidth - pWidth) / 2
    const pTop = (document.documentElement.clientHeight - pHeight) / 2
    // popup.style.top = `${pTop}px`
    // popup.style.left = `${pLeft}px`

    // requestAnimationFrame(() => {
      popup.style.width = `${elDim.width * 2}px`
      popup.style.height = `${elDim.height * 2}px`
      popup.style.top = `${elDim.top}px`
      popup.style.left = `${elDim.left - elDim.width / 2}px`

      requestAnimationFrame(() => {
        document.body.classList.add('is-popup-open')
        fader.dataset.cardId = id
        popup.style.transition = popupTransition
        popup.style.width = `${pWidth}px`
        popup.style.height = `${pHeight}px`
        popup.style.top = `${pTop}px`
        popup.style.left = `${pLeft}px`
      })
    // })
  }
  function closePopup(id) {
    const el = document.querySelector(`#${id}`)
    const elDim = el.getBoundingClientRect()

    // requestAnimationFrame(() => {
      document.body.classList.remove('is-popup-open')
      popup.style.width = `${elDim.width * 2}px`
      popup.style.height = `${elDim.height * 2}px`
      popup.style.top = `${elDim.top}px`
      popup.style.left = `${elDim.left - elDim.width / 2}px`

      fader.dataset.cardId = ''

      popup.addEventListener('transitionend', () => {
        popup.style.transition = 'none'
        // document.body.classList.remove('is-popup-open')
        popup.style.width = null
        popup.style.height = null
        popup.style.top = null
        popup.style.left = null
      }, { once: true })
    // })
  }
})
