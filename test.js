


// function shuffleArray(x) {
    
//     for (let i = x.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//   }

//   console.log(shuffleArray())

let shuffled = [];
let shuffled2 = [];
let fullDeck = [];
let x;
let playerDeal = [];
let compDeal = [];
let compScore;
let playerScore;

const Deck = [
    ace = {
        value1: 1, 
        value11: 11,
        face: 'A',
        suit: 'Heart'

    },

    two = {
        value: 2,
        face: "2",
        suit: 'Heart'
    },

    three = {
        value: 3,
        face: '3',
        suit: 'Heart'
    },

    four = {
        value: 4,
        face: '4',
        suit: 'Heart'
    },

    five = {
        value: 5,
        face: "5",
        suit: 'Heart'
    },

    six = {
        value: 6,
        face: '6',
        suit: 'Heart'
    },

    seven = {
        value: 7,
        face: '7',
        suit: 'Heart'
    },

    eight = {
        value: 8,
        face: '8',
        suit: 'Heart'
    },

    nine = {
        value: 9,
        face: '9',
        suit: 'Heart'
    },

    ten = {
        value: 10,
        face: '10',
        suit: 'Heart'
    },

    jack = {
        value: 10,
        face: 'J',
        suit: 'Heart'
    },

    queen = {
        value: 10,
        face: 'Q',
        suit: 'Heart'
    },

    king = {
        value: 10,
        face: 'K',
        suit: 'Heart'
    },

    ace = {
        value1: 1, 
        value11: 11,
        face: 'A',
        suit: 'Diamond'

    },

    two = {
        value: 2,
        face: "2",
        suit: 'Diamond'
    },

    three = {
        value: 3,
        face: '3',
        suit: 'Diamond'
    },

    four = {
        value: 4,
        face: '4',
        suit: 'Diamond'
    },

    five = {
        value: 5,
        face: "5",
        suit: 'Diamond'
    },

    six = {
        value: 6,
        face: '6',
        suit: 'Diamond'
    },

    seven = {
        value: 7,
        face: '7',
        suit: 'Diamond'
    },

    eight = {
        value: 8,
        face: '8',
        suit: 'Diamond'
    },

    nine = {
        value: 9,
        face: '9',
        suit: 'Diamond'
    },

    ten = {
        value: 10,
        face: '10',
        suit: 'Diamond'
    },

    jack = {
        value: 10,
        face: 'J',
        suit: 'Diamond'
    },

    queen = {
        value: 10,
        face: 'Q',
        suit: 'Diamond'
    },

    king = {
        value: 10,
        face: 'K',
        suit: 'Diamond'
    },

    ace = {
        value1: 1, 
        value11: 11,
        face: 'A',
        suit: 'Club'

    },

    two = {
        value: 2,
        face: "2",
        suit: 'Club'
    },

    three = {
        value: 3,
        face: '3',
        suit: 'Club'
    },

    four = {
        value: 4,
        face: '4',
        suit: 'Club'
    },

    five = {
        value: 5,
        face: "5",
        suit: 'Club'
    },

    six = {
        value: 6,
        face: '6',
        suit: 'Club'
    },

    seven = {
        value: 7,
        face: '7',
        suit: 'Club'
    },

    eight = {
        value: 8,
        face: '8',
        suit: 'Club'
    },

    nine = {
        value: 9,
        face: '9',
        suit: 'Club'
    },

    ten = {
        value: 10,
        face: '10',
        suit: 'Club'
    },

    jack = {
        value: 10,
        face: 'J',
        suit: 'Club'
    },

    queen = {
        value: 10,
        face: 'Q',
        suit: 'Club'
    },

    king = {
        value: 10,
        face: 'K',
        suit: 'Club'
    },

    ace = {
        value1: 1, 
        value11: 11,
        face: 'A',
        suit: 'Spade'

    },

    two = {
        value: 2,
        face: "2",
        suit: 'Spade'
    },

    three = {
        value: 3,
        face: '3',
        suit: 'Spade'
    },

    four = {
        value: 4,
        face: '4',
        suit: 'Spade'
    },

    five = {
        value: 5,
        face: "5",
        suit: 'Spade'
    },

    six = {
        value: 6,
        face: '6',
        suit: 'Spade'
    },

    seven = {
        value: 7,
        face: '7',
        suit: 'Spade'
    },

    eight = {
        value: 8,
        face: '8',
        suit: 'Spade'
    },

    nine = {
        value: 9,
        face: '9',
        suit: 'Spade'
    },

    ten = {
        value: 10,
        face: '10',
        suit: 'Spade'
    },

    jack = {
        value: 10,
        face: 'J',
        suit: 'Spade'
    },

    queen = {
        value: 10,
        face: 'Q',
        suit: 'Spade'
    },

    king = {
        value: 10,
        face: 'K',
        suit: 'Spade'
    }
]


// function shuffle (deck) {
//     var i = 0
//       , j = 0
//       , temp = null
  
//     for (i = deck.length - 1; i > 0; i -= 1) {
//       j = Math.floor(Math.random() * (i + 1))
//       temp = deck[i]
//       deck[i] = deck[j]
//       deck[j] = temp
//       shuffled.push(temp)  
        
//     }
//     console.log(shuffled)
//   }

  



// function fisherYates ( deck ) {
    
//     let i = deck.length;

//     if ( i == 0 ) return false;
//     while ( --i ) {
//        let j = Math.floor( Math.random() * ( i + 1 ) );
//        let tempi = deck[i];
//        let tempj = deck[j];
//        deck[i] = tempj;
//        deck[j] = tempi;
       

       
       
//      }
     
//   }

//   fisherYates(Deck)

//   const generateDeck =  (deck) => {
//     for( let card in deck) {
        
//         Deck.suit = card[1] = "heart";
//         // App.deck2.push($('<div>' + card + " " + App.suitD + '</div>'));
//         // App.deck3.push($('<div>' + card + " " + App.suitC + '</div>'));
//         // App.deck4.push($('<div>' + card + " " + App.suitS + '</div>'));
//         // App.preShuffle.push(...App.deck1, ...App.deck2, ...App.deck3, ...App.deck4)
//         // $('#deck').append(App.preShuffle)
         
//         }
//         console.log(Deck)
//     }
// generateDeck()

//  shuffle(Deck)
// console.log(Deck)


// console.log(Deck)
// const shuffle = (arr) => {
//     for(let card of Deck) {
//         let pop = card
//         let randNum = Math.floor(Math.random() * 53)
//             arr.splice(randNum, 0, pop)
            
        

            
//     }
    
   
// }

// shuffle(shuffled)
// console.log(shuffled)
// shuffle(shuffled2)
// console.log(shuffled2)
// fullDeck.push(...shuffled, ...shuffled2)
// console.log(fullDeck)

const deal = () => {
        
             $('#player').empty()
             $('#player').text('Player')
             playerDeal = [];
            // $('#dealer > div:first').remove().appendTo($('discard'))

    for(let i = 0; i < 2; i++) {
        console.log(fullDeck)
        playerDeal.push(fullDeck.pop())
        compDeal.push(fullDeck.pop())
        const $player = $('#player')
        $player.append('<div class = "playerCards">' + playerDeal[i].face +'</div>')
        const $dealer = $('#dealer')
        $dealer.append('<div class ="dealerCards">' + compDeal[i].face + '</div>')
        }
        console.log(playerDeal)
        console.log(compDeal)
}

// deal()
// console.log(fullDeck)

const evaluate = () => {
    compScore = compDeal[0].face + compDeal[1].face
    playerScore = playerDeal[0].face + playerDeal[1].face
    
        if(compDeal[0].face + compDeal[1].face === 'AK' || compDeal[0].face + compDeal[1].face === 'KA') {
            console.log('Computer has 21')
        }else if(compDeal[0].face + compDeal[1].face === 'AQ' || compDeal[0].face + compDeal[1].face === 'QA') {
            console.log('Computer has 21')
        }else if(compDeal[0].face + compDeal[1].face === 'AJ' || compDeal[0].face + compDeal[1].face === 'JA') {
            console.log('Computer has 21') 
        }else if(compDeal[0].face + compDeal[1].face === 'A10' || compDeal[0].face + compDeal[1].face === '10A') {
            console.log('Computer has 21') 
        }else 
            console.log('Computer has ' + compScore)
    
        if(playerDeal[0].face + playerDeal[1].face === 'AK' || playerDeal[0].face + playerDeal[1].face === 'KA') {
            console.log('Player has 21')
        }else if(playerDeal[0].face + playerDeal[1].face === 'AQ' || playerDeal[0].face + playerDeal[1].face === 'QA') {
            console.log('Player has 21')
        }else if(playerDeal[0].face + playerDeal[1].face === 'AJ' || playerDeal[0].face + playerDeal[1].face === 'JA') {
            console.log('Player has 21')
        }else if(playerDeal[0].face + playerDeal[1].face === 'A10' || playerDeal[0].face + playerDeal[1].face === '10A') {
            console.log('Player has 21')
        }else 
            console.log('Player has ' + playerScore)

        
            

}       

// evaluate()

const playerHit = () => {
    playerDeal.push(fullDeck.pop())
    console.log(playerDeal)
    let hit = playerDeal[2].face
    const $player = $('#player')
    $player.append(hit)
    let playerValue = 0;

    for(i = 0; i < playerDeal.length; i++) {
        playerValue += playerDeal[i].value
        if(playerValue > 21 ) {
            console.log('Player Busted!')
            return
        }else
            console.log(playerScore)
    }
} 

// playerHit()

const computerHit = () => {
    compDeal.push(fullDeck.pop())
    console.log(compDeal)
    compScore = compScore + compDeal[2].face
    

    if(playerDeal[0].value + playerDeal[1].value + playerDeal[2].value > 21 ) {
        console.log('Dealer Busted!')
    }else
        console.log(compScore)

}

// computerHit()

const begin = () => {
    const shuffle = (arr) => {
        for(let card of Deck) {
            let pop = card
            let randNum = Math.floor(Math.random() * 53)
                arr.splice(randNum, 0, pop)
                
            
    
                
        }
    
    }
    
    shuffle(shuffled)
    console.log(shuffled)
    shuffle(shuffled2)
    console.log(shuffled2)
    fullDeck.push(...shuffled, ...shuffled2)
    console.log(fullDeck)
}

const stand = () => {

}


$( () => {
    const $begin = $('#begin')
    $begin.on('click', begin)

    const $deal = $('#deal')
    $deal.on('click', deal)

    const $hit = $('#hit')
    $hit.on('click', playerHit)
    

})

