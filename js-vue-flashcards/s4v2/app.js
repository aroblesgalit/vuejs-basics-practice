const cards = [
    {
      front: 'The "First Computer Programmer"',
      back: 'Ada Lovelace',
      flipped: false,
    },
    {
      front: 'Invented the "Clarke Calculator"',
      back: 'Edith Clarke',
      flipped: false,
  
    },
    {
      front: 'Famous World War II Enigma code breaker',
      back: 'Alan Turing',
      flipped: false,
    },
    {
      front: 'Created satellite orbit analyzation software for NASA',
      back: 'Dr. Evelyn Boyd Granville',
      flipped: false,
    },
  ]; 

  // Get info for new cards from the user 
  // Add new card when user hits enter or clicks button 
  // Delete cards
  // Animated card flip 
  // Display an error message if form fields are left blank 

  new Vue({
    el: '#flashcard-app',
    data: {
      cards: cards,
    },
    methods: {
      toggleCard: function(card){
        card.flipped = !card.flipped;
      }
    }
  });