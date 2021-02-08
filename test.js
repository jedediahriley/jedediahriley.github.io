


// function shuffleArray(x) {
    
//     for (let i = x.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//   }

//   console.log(shuffleArray())

// function shuffle (array) {
//     var i = 0
//       , j = 0
//       , temp = null
  
//     for (i = array.length - 1; i > 0; i -= 1) {
//       j = Math.floor(Math.random() * (i + 1))
//       temp = array[i]
//       array[i] = array[j]
//       array[j] = temp
//     }
//   }

//   console.log(shuffle())



function fisherYates ( deck ) {
    
    let i = deck.length;

    if ( i == 0 ) return false;
    while ( --i ) {
       let j = Math.floor( Math.random() * ( i + 1 ) );
       let tempi = deck[i];
       let tempj = deck[j];
       deck[i] = tempj;
       deck[j] = tempi;

       console.log(deck)
     }
  }

  fisherYates(['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'])