'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const TRANSITION = 'all .4s'
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
    const {width, height, top, left} = el.getBoundingClientRect()

    requestAnimationFrame(() => {
      popup.style.width = `${width}px`
      popup.style.height = `${height}px`
      popup.style.top = `${top}px`
      popup.style.left = `${left}px`

      requestAnimationFrame(() => {
        document.body.classList.add('is-popup-open')
        fader.dataset.cardId = id
        popup.style.transition = popupTransition
        popup.style.width = null
        popup.style.height = null
        popup.style.top = null
        popup.style.left = null
      })
    })
  }
  function closePopup(id) {
    const el = document.querySelector(`#${id}`)
    const {width, height, top, left} = el.getBoundingClientRect()

    requestAnimationFrame(() => {
      popup.style.width = `${width}px`
      popup.style.height = `${height}px`
      popup.style.top = `${top}px`
      popup.style.left = `${left}px`

      fader.dataset.cardId = ''

      popup.addEventListener('transitionend', () => {
        popup.style.transition = 'none'
        document.body.classList.remove('is-popup-open')
        popup.style.width = null
        popup.style.height = null
        popup.style.top = null
        popup.style.left = null
      }, { once: true })
    })
  }
})
