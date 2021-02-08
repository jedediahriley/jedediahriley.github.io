/* 

[x] Generate 1 decks of cards
    [] later generate 2 decks
    [] later generate 6 decks
    [] later generate 8 decks



[x] display decks of cards with suits

[] shuffle cards
    - randomize numbers to mix up the cards
    - make sure that the number doesn't repeat
    - associate the number with the deck value and place in a shuffle value 

[] deal cards

[] write rules for the cards
    -write win/loss parameters

[] create buttons 
    - deal
    - hit
    - stand
    - bet

*/


let randomNumber;
let deck = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];


const EventHandlers= {
    generateDeck: (deck) => {
    for( let card of deck) {
        console.log(card)
        App.deck1.push($('<div>' + card + " " + App.suitH + '</div>'));
        App.deck2.push($('<div>' + card + " " + App.suitD + '</div>'));
        App.deck3.push($('<div>' + card + " " + App.suitC + '</div>'));
        App.deck4.push($('<div>' + card + " " + App.suitD + '</div>'));
        App.preShuffle.push(...App.deck1, ...App.deck2, ...App.deck3, ...App.deck4)
        $('#deck').append(App.preShuffle)
        // $('#deck').append(App.deck1)
        // $('#deck').append(App.deck2)
        // $('#deck').append(App.deck3)
        // $('#deck').append(App.deck4)
           
        //    console.log(App.deck1)
        // $('#deck').append($suit2)
        // $('#deck').append($suit3)
        // $('#deck').append($suit4)
        
        }
    },

// pulled the Fisher-Yates function from https://www.frankmitchell.org/2015/01/fisher-yates/
    shuffleDeck: 
        

          (deck) => {
             console.log(deck)
             let i = 0
               , j = 0
               , temp = null
          
             for (i = App.preShuffle.length - 1; i > 0; i -= 1) {
               j = Math.floor(Math.random() * (i + 1))
               temp = deck[i]
               deck[i] = deck[j]
               deck[j] = temp
               $('#deck').append(temp)
               
             }
             console.log(App.shuffle)
           }

        }            



const UI = {
    a: false
}

const App = {
    fullDeck:  ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'],
    suitH: 'heart',
    suitD: 'diamond',
    suitC: 'club',
    suitS: 'spade',
    deck1: [],
    deck2: [],
    deck3: [],
    deck4: [],
    shuffle: [],
    preShuffle: []

}

$( () => {

    // EventHandlers.generateDeck()
    // EventHandlers.generateDeck()
     
      EventHandlers.generateDeck(App.fullDeck)
     EventHandlers.shuffleDeck(App.preShuffle)
    

});