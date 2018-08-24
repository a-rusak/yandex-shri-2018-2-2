'use strict'

document.addEventListener('DOMContentLoaded', () => {
  const addPage = section => {
    let buffer = []
    section.querySelectorAll('.devices-pager__card-holder').forEach(item => {
      if (item && item.offsetHeight === 0) {
        buffer.push(item)
      }
    })
    if (buffer.length > 0) {
      const newSection = document.createElement('div')
      newSection.classList.add('devices-pager__page')
      buffer.forEach(item => {
        newSection.appendChild(item)
      })
      wrapper.appendChild(newSection)
      addPage(newSection)
    }
  }

  const wrapper = document.querySelector('.devices-pager__wrapper')
  if (wrapper === null) {
    return
  }
  let section = wrapper.querySelector('.devices-pager__page')
  const w = wrapper.offsetWidth
  section.style.width = w + 'px'
  // document.querySelector('.layout__main').style.width = w + 'px'
  addPage(section)

  //

  let currentPage = 0
  const nextButton = document.querySelector('#devices-page-next')
  nextButton.addEventListener('click', evt => {
    if (currentPage < wrapper.children.length - 1) {
      currentPage++
      wrapper.style.transform = `translate3d(-${wrapper.offsetWidth *
      currentPage}px, 0, 0)`
    }
  })
  const prevButton = document.querySelector('#devices-page-prev')
  prevButton.addEventListener('click', evt => {
    if (currentPage > 0) {
      currentPage--
      wrapper.style.transform = `translate3d(-${wrapper.offsetWidth *
      currentPage}px, 0, 0)`
    }
  })
})
