/**
 * Initial value for the columns and rows
 * @param {number} row
 * @param {number} col
 */

function Board(row, col) {
  this.row = row || 12
  this.col = col || 12
  this.grid = []
  this.board = null
  this.table = null
}

Board.prototype.createBoard = function () {
  this.table = this.table || document.createElement('table')
  this.table.className = 'grid'
  for (let i = 0; i < this.row; i++) {
    const tr = document.createElement('tr')
    tr.id = 'row' + (i + 1)
    this.grid.push([])
    for (let j = 0; j < this.col; j++) {
      const td = document.createElement('td')
      td.id = 'col' + j
      tr.appendChild(td)
      this.grid[i].push(td)
    }
    this.table.appendChild(tr)
  }
  this.board = document.getElementById('board')
  this.board.appendChild(this.table)
}

Board.prototype.clear = function () {
  this.table.innerHTML = ''
  this.grid = []
  this.createBoard()
}

Board.prototype.gridSettings = function (config) {
  config = config || {}
  this.row = config.rows || 20
  this.col = config.cols || 20
  this.clear()
}

export default Board
