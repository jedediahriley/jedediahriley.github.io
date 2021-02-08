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
    generateDeck: () => {
    for( let card of App.fullDeck) {
        
        App.deck1.push($('<div>' + card + " " + App.suitH + '</div>'));
        // const $suit2 = $('<div>' + card + " " + App.suitD + '</div>');
        // const $suit3 = $('<div>' + card + " " + App.suitC + '</div>');
        // const $suit4 = $('<div>' + card + " " + App.suitS + '</div>');
        $('#deck').append(App.deck1)
           
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
        //     var i = 0
        //       , j = 0
        //       , temp = null
          
        //     for (i = deck.length - 1; i > 0; i -= 1) {
        //       j = Math.floor(Math.random() * (i + 1))
        //       temp = array[i]
        //       array[i] = array[j]
        //       array[j] = temp
        //     }
        //     console.log(temp)
           }

        }            



const UI = {
    a: false
}

const App = {
    fullDeck:  ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', /*'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'*/],
    suitH: 'heart',
    suitD: 'diamond',
    suitC: 'club',
    suitS: 'spade',
    deck1: [],
    deck2: [],
    shuffle: []

}

$( () => {

    // EventHandlers.generateDeck()
    // EventHandlers.generateDeck()
    EventHandlers.shuffleDeck()


});