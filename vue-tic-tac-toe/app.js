// Create data properties for title, instructions, playerTurn
// Add properties to vue template

new Vue({
  el: '#app',
  data: {
    title: 'tic tac toe',
    instructions: 'x goes first',
    playerTurn: 'x',
    turns: 0
  },
  methods: {
    markCell: function () {
      // Mark cell accordingly
      if (!event.target.innerText) {
        if (this.playerTurn === 'x') {
          event.target.append('x')
          this.playerTurn = 'o'
          this.instructions = "o's turn"
        } else {
          event.target.append('o')
          this.playerTurn = 'x'
          this.instructions = "x's turn"
        }
      }
      this.turns += 1
      // Check if winner
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
