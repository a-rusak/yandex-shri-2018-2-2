'use strict'

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.popup__checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', togglePopup)
  })

  function togglePopup(evt) {
    evt &&
    evt.target &&
    evt.target.dataset.cardId &&
    (evt.target.checked ? openPopup(evt.target.dataset.cardId) : closePopup(evt.target.dataset.cardId))
  }

  function openPopup(id) {
    const el = document.querySelector(`#${id}`)
    const {width, height, top, left} = el.getBoundingClientRect()

    const elementTransition = el.style.transition
    el.style.transition = ''
    requestAnimationFrame(() => {
      el.style.position = 'fixed'
      el.style.width = `${width}px`
      el.style.height = `${height}px`
      el.style.top = `${top}px`
      el.style.left = `${left}px`
      el.style.transition = elementTransition

      requestAnimationFrame(() => {
        el.style.width = `630px`
        el.style.height = `238px`
        el.addEventListener('transitionend', done, { once: true })
      })
    })
  }
  function closePopup(id) {
    console.log(card)
  }
})
