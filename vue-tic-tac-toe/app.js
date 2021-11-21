const cellMarks = [
  {
    mark: '',
    color: ''
  },
  {
    mark: '',
    color: ''
  },
  {
    mark: '',
    color: ''
  },
  {
    mark: '',
    color: ''
  },
  {
    mark: '',
    color: ''
  },
  {
    mark: '',
    color: ''
  },
  {
    mark: '',
    color: ''
  },
  {
    mark: '',
    color: ''
  },
  {
    mark: '',
    color: ''
  }
]

new Vue({
  el: '#app',
  data: {
    cellMarks: cellMarks,
    title: 'tic tac toe',
    instructions: 'x goes first',
    playerTurn: 'x',
    turns: 0,
    xwins: 0,
    owins: 0,
    ties: 0,
    winner: null
  },
  methods: {
    markCell: function (cell) {
      // If there's a winner or the cell is already marked, do nothing
      if (this.winner || event.target.innerText) return
      // Increment the turn count
      this.turns += 1
      // update the cell with the correct mark and color
      cell.mark = this.playerTurn
      cell.color = this.playerTurn === 'x' ? 'orange' : 'blue'

      // Check if winner
      if (this.turns >= 5) {
        if (
          (this.cellMarks[0]['mark'] &&
            this.cellMarks[0]['mark'] === this.cellMarks[1]['mark'] &&
            this.cellMarks[0]['mark'] === this.cellMarks[2]['mark']) ||
          (this.cellMarks[3]['mark'] &&
            this.cellMarks[3]['mark'] === this.cellMarks[4]['mark'] &&
            this.cellMarks[3]['mark'] === this.cellMarks[5]['mark']) ||
          (this.cellMarks[6]['mark'] &&
            this.cellMarks[6]['mark'] === this.cellMarks[7]['mark'] &&
            this.cellMarks[6]['mark'] === this.cellMarks[8]['mark']) ||
          (this.cellMarks[0]['mark'] &&
            this.cellMarks[0]['mark'] === this.cellMarks[3]['mark'] &&
            this.cellMarks[0]['mark'] === this.cellMarks[6]['mark']) ||
          (this.cellMarks[1]['mark'] &&
            this.cellMarks[1]['mark'] === this.cellMarks[4]['mark'] &&
            this.cellMarks[1]['mark'] === this.cellMarks[7]['mark']) ||
          (this.cellMarks[2]['mark'] &&
            this.cellMarks[2]['mark'] === this.cellMarks[5]['mark'] &&
            this.cellMarks[2]['mark'] === this.cellMarks[8]['mark']) ||
          (this.cellMarks[0]['mark'] &&
            this.cellMarks[0]['mark'] === this.cellMarks[4]['mark'] &&
            this.cellMarks[0]['mark'] === this.cellMarks[8]['mark']) ||
          (this.cellMarks[2]['mark'] &&
            this.cellMarks[2]['mark'] === this.cellMarks[4]['mark'] &&
            this.cellMarks[2]['mark'] === this.cellMarks[6]['mark'])
        ) {
          this.winner = this.playerTurn
          if (this.winner === 'x') {
            this.xwins += 1
          } else {
            this.owins += 1
          }
        }
      }
      // Update instruction
      if (this.playerTurn === 'x' && this.turns < 9) {
        this.playerTurn = 'o'
        this.instructions = "o's turn"
      } else if (this.playerTurn === 'o' && this.turns < 9) {
        this.playerTurn = 'x'
        this.instructions = "x's turn"
      } else {
        this.instructions = "It's a tie!"
        this.ties += 1
      }
    },
    reset: function () {
      // Choose player who goes first randomly
      const randomNum = Math.floor(Math.random() * 2)
      if (randomNum === 0) {
        this.instructions = 'x goes first'
        this.playerTurn = 'x'
      } else {
        this.instructions = 'o goes first'
        this.playerTurn = 'o'
      }
      // Reset all data to initial
      this.turns = 0
      this.winner = null
      this.cellMarks.forEach(function (cell) {
        cell.mark = ''
        cell.color = ''
      })
    }
  }
})
