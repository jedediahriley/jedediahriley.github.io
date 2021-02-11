/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Global Variables
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
let shuffled = [];
let shuffled2 = [];
let fullDeck = [];
let x;
let playerDeal = [];
let compDeal = [];
let compScore;
let playerScore;
let playerValue;
let dealerScore;
let dealerValue;

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
The Deck of Cards
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
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

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Starts the Game and Shuffles the cards
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
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

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Dealing the cards
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const deal = () => {

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Emptying the player/dealer areas and the player/dealer score
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    
    $('#player').empty()
    $('#dealer').empty()
    $('#player').text('Player')
    $('#dealer').text('Dealer')
    $('#playerScore').empty()
    $('#dealerScore').empty()
    $('#playerScore').text('Player Score')
    $('#dealerScore').text('Dealer Score')
    playerDeal = [];
    compDeal = [];
    

for(let i = 0; i < 2; i++) {
console.log(fullDeck)
playerDeal.push(fullDeck.pop())
compDeal.push(fullDeck.pop())
const $player = $('#player')
$player.append('<div class = "playerCards">' + playerDeal[i].face +'</div>')
$player.append('<div class = "playerCards">' + playerDeal[i].suit +'</div>')
const $dealer = $('#dealer')
$dealer.append('<div class ="dealerCards">' + compDeal[i].face + '</div>')
$dealer.append('<div class ="dealerCards">' + compDeal[i].suit + '</div>')
}

playerValue = playerDeal[0].value + playerDeal[1].value
$('#playerScore').append(playerValue)
dealerValue = compDeal[0].value + compDeal[1].value
$('#dealerScore').append(dealerValue)

console.log(playerDeal)
console.log(compDeal)
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Calling the Buttons
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
$( () => {

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Begin Game Button
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const $begin = $('#begin')
$begin.on('click', begin)

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Deal Button
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const $deal = $('#deal')
$deal.on('click', deal)




})