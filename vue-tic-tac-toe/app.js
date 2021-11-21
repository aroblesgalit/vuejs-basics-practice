// Create data properties for title, instructions, playerTurn
// Add properties to vue template

new Vue({
  el: '#app',
  data: {
    title: 'tic tac toe',
    instructions: 'x goes first',
    playerTurn: 'x',
    turns: 0,
    winner: null
  },
  methods: {
    markCell: function () {
      // Mark cell accordingly
      if (!event.target.innerText && this.turns < 9) {
        event.target.append(this.playerTurn)
        // if (this.playerTurn === 'x' && this.turns < 8) {
        //   this.playerTurn = 'o'
        //   this.instructions = "o's turn"
        // } else if (this.playerTurn === 'o' && this.turns < 8) {
        //   this.playerTurn = 'x'
        //   this.instructions = "x's turn"
        // } else {
        //   this.instructions = '??? wins!'
        // }
      }
      // Check if winner
      const cells = document.querySelectorAll('.cell')
      const cellMarks = []
      cells.forEach(function (cell) {
        cellMarks.push(cell.innerText)
      })
      console.log(cellMarks)
      if (this.turns >= 5) {
        if (
          (cellMarks[0] === cellMarks[1] && cellMarks[0] === cellMarks[2]) ||
          (cellMarks[3] === cellMarks[4] && cellMarks[3] === cellMarks[5]) ||
          (cellMarks[6] === cellMarks[7] && cellMarks[6] === cellMarks[8])
        ) {
          this.winner = this.playerTurn
        }
      }
      if (this.playerTurn === 'x' && this.turns < 8) {
        this.playerTurn = 'o'
        this.instructions = "o's turn"
      } else if (this.playerTurn === 'o' && this.turns < 8) {
        this.playerTurn = 'x'
        this.instructions = "x's turn"
      } else {
        this.instructions = '??? wins!'
      }
      this.turns += 1
    },
    reset: function () {
      this.instructions = 'x goes first'
      this.playerTurn = 'x'
      const cells = document.querySelectorAll('.cell')
      cells.forEach(function (cell) {
        cell.innerText = ''
      })
    }
  }
})
