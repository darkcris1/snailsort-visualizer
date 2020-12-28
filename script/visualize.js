import Board from './board.js'
import snailSort from './snailSortAlgo.js'
;(function () {
  let board = new Board(30, 30)
  board.createBoard()
  let arrayOfSorted, lastEl
  function init() {
    arrayOfSorted = snailSort(board.grid).filter((val) => val !== undefined)
    lastEl = arrayOfSorted[arrayOfSorted.length - 1]
    lastEl.style.background = 'blue'
    lastEl.style.clipPath = 'circle(100%)'
  }
  init()
  let i = 0
  let isVisualize = false
  let interval = null
  let speed = 20

  const visBtn = document.getElementById('visualize')
  const clearBtn = document.getElementById('clearBoard')

  function visualize() {
    if (arrayOfSorted[i] === undefined) {
      return clearTimeout(interval)
    }

    arrayOfSorted[i].className = 'tip'
    ;(arrayOfSorted[i - 1] || arrayOfSorted[i]).className = 'visited'
    i += 1
    interval = setTimeout(visualize, 600 / speed)
  }

  visBtn.addEventListener('click', function () {
    if (isVisualize) return
    isVisualize = true
    visualize()
  })

  clearBtn.addEventListener('click', function () {
    board.clear()
    isVisualize = false
    init()
    i = 0
    clearTimeout(interval)
  })

  // Input events

  const row = document.getElementById('row')
  const column = document.getElementById('column')
  const speedElement = document.getElementById('speed')
  const color = document.getElementById('color')

  function changeSpeed() {
    speed = this.value
  }
  function changeColor() {
    document
      .querySelector(':root')
      .style.setProperty('--visited-color', this.value)
  }
  function initGrid() {
    if (this.value === '' || this.value > 70) return
    clearBtn.click()
    board.gridSettings({
      rows: row.value,
      cols: column.value,
    })
    init()
  }
  row.addEventListener('change', initGrid)
  column.addEventListener('change', initGrid)
  speedElement.addEventListener('change', changeSpeed)
  color.addEventListener('change', changeColor)
})()
