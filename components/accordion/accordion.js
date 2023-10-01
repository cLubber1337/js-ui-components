import { slideUp, slideDown } from './slide-animation.js'

function accordion() {
  const items = document.querySelectorAll('.accordion-item')
  const headers = document.querySelectorAll('.accordion-header')
  const body = document.querySelectorAll('.accordion-body')

  headers.forEach((header, idx) => {
    if (items[0].classList.contains('accordion-item__active')) {
      slideDown(body[0])
    }

    header.addEventListener('click', () => {
      const parent = header.parentNode

      if (!parent.classList.contains('accordion-item__active')) {
        parent.classList.add('accordion-item__active')
        slideDown(body[idx])

        items.forEach((item, i) => {
          if (i !== idx) {
            item.classList.remove('accordion-item__active')
            slideUp(body[i])
          }
        })
      } else {
        parent.classList.remove('accordion-item__active')
        slideUp(body[idx])
      }
    })
  })
}

accordion()
