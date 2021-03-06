'use strict'

document.addEventListener('DOMContentLoaded', () => {
  let cache = new Map()
  const req = require.context('@/images/', true, /^\.\/.*\.svg$/)
  ;[...document.querySelectorAll('.svg-icon')].forEach(mount)

  async function mount(icon) {
    const name = icon.getAttribute('name')
    let currPath = req(`./${name}.svg`)
    if (!cache.has(currPath)) {
      try {
        cache.set(currPath, fetch(currPath).then(r => r.text()))
      } catch (e) {
        console.error(e)
        cache.delete(currPath)
      }
    }
    if (cache.has(currPath)) {
      icon.innerHTML = await cache.get(currPath)
      icon.children[0].style.fill = icon.getAttribute('fill')
      icon.children[0].style.width = icon.getAttribute('size')
      icon.children[0].style.height = icon.getAttribute('size')
    }
  }
})
