/* 

[x] Generate 1 decks of cards
    [] later generate 2 decks
    [] later generate 6 decks
    [] later generate 8 decks



[x] display decks of cards with suits

[x] shuffle cards
    - randomize numbers to mix up the cards
    - make sure that the number doesn't repeat
    - associate the number with the deck value and place in a shuffle value 

[] deal cards

[] write rules for the cards
    -write win/loss parameters

[] create buttons 
    [x] deal
        [] display scores (i.e 'player has 20')
    [] hit
    [] stand
    [] bet

[] create cut function

*/


let randomNumber;
// let deck = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

// const deal = () => {
//     console.log('test')
//     for(let i = 0; i < 2; i++) {
//         let shiftedPlayer = $('#deck > div:first').remove()
//         let shiftedComp = $('#deck > div:first').remove()
//         $('#player').append(shiftedPlayer)
//         $('#dealer').append(shiftedComp)
        
//         }
        
// }


const EventHandlers= {
    // create deck
    generateDeck: (deck) => {
    for( let card of deck) {
        
        App.deck1.push($('<div>' + card + " " + App.suitH + '</div>'));
        App.deck2.push($('<div>' + card + " " + App.suitD + '</div>'));
        App.deck3.push($('<div>' + card + " " + App.suitC + '</div>'));
        App.deck4.push($('<div>' + card + " " + App.suitS + '</div>'));
        App.preShuffle.push(...App.deck1, ...App.deck2, ...App.deck3, ...App.deck4)
        $('#deck').append(App.preShuffle)
        
        
        }
    },

// pulled the Fisher-Yates function from https://www.frankmitchell.org/2015/01/fisher-yates/
    shuffleDeck: 
        

        (deck) => {
              
             
            let i = 0
               , j = 0
               , temp = null
          
            for (i = App.preShuffle.length - 1; i > 0; i -= 1) {
               
               j = Math.floor(Math.random() * (i + 1))
               temp = deck[i]
               deck[i] = deck[j]
               deck[j] = temp
               App.shuffle.push(temp)
               $('#deck').append(App.shuffle)
              
              
            }
             
        },
    
    deal: () => {
        
        for(let i = 0; i < 2; i++) {
            App.shiftedPlayer.push($('#deck > div:first').remove())
            App.shiftedComp = $('#deck > div:first').remove()
            $('#player').append(App.shiftedPlayer)
            $('#dealer').append(App.shiftedComp)
            }
            EventHandlers.evaluate()
    },

    evaluate: () => {
        console.log(App.shiftedComp[0])
        let eValStr = App.shiftedComp.toString().valueOf()
        console.log(eValStr)
        let x = App.shiftedPlayer.values()
            for(let a of x) {
                console.log(a)
            }
        
    },


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
    preShuffle: [],
    shift: [],
    cEval: [],
    shiftedComp: [],
    shiftedPlayer: [],

}







$( () => {
    $('#deal').click(EventHandlers.deal)
    EventHandlers.generateDeck(App.fullDeck)
    EventHandlers.shuffleDeck(App.preShuffle)
    
    
    
    // EventHandlers.deal($('#deck'))
    //  $('#deal').on('click', deal());
    
    
});

