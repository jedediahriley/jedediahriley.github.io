/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Global Variables
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
let shuffled = [];
let shuffled2 = [];
let fullDeck = [];
let playerDeal = [];
let compDeal = [];
let compScore;
let playerScore;
let playerValue;
let dealerScore;
let dealerValue;
let playerHit = [];
let compHit = [];
let playerHitValue;
let dealerHitValue;

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
    shuffle(shuffled2)
    fullDeck.push(...shuffled, ...shuffled2)
    
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Dealing the cards
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const deal = () => {

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Enable Hit and Stand Buttons
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    $('#hit').attr('disabled', false);
    $('#stand').attr('disabled', false);

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
    
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Loop that populates the decks
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

for(let i = 0; i < 2; i++) {

playerDeal.push(fullDeck.pop())
compDeal.push(fullDeck.pop())
const $player = $('#player')
$player.append('<div class = "playerCards">' + playerDeal[i].face +'</div>')
$player.append('<div class = "playerCards">' + playerDeal[i].suit +'</div>')
const $dealer = $('#dealer')
$dealer.append('<div class ="dealerCards">' + compDeal[i].face + '</div>')
$dealer.append('<div class ="dealerCards">' + compDeal[i].suit + '</div>')
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Determining Dealer's score if it has an ace
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

if(compDeal[0].face === 'A' && compDeal[1].face ==='A') {
    $('#dealerScore').text('Dealer has 2 or 12')
}else if(compDeal[0].face === 'A') {
    $('#dealerScore').append((compDeal[0].value1 + compDeal[1].value) + ' or ' + (compDeal[0].value11 + compDeal[1].value))
}else if(compDeal[1].face === 'A') { 
    $('#dealerScore').append((compDeal[1].value1 + compDeal[0].value) + ' or ' + (compDeal[1].value11 + compDeal[0].value))

}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Determining Player's score if it has an ace
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
if(playerDeal[0].face === 'A' && playerDeal[1].face ==='A') {
    $('#playerScore').text('Player has 2 or 12')
}else if(playerDeal[0].face === 'A') {
    $('#playerScore').append((playerDeal[0].value1 + playerDeal[1].value) + ' or ' + (playerDeal[0].value11 + playerDeal[1].value))
}else if(playerDeal[1].face === 'A') { 
    $('#playerScore').append((playerDeal[1].value1 + playerDeal[0].value) + ' or ' + (playerDeal[1].value11 + playerDeal[0].value))
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Evaluating if Dealer's first two cards are blackjack
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
compScore = compDeal[0].face + compDeal[1].face
playerScore = playerDeal[0].face + playerDeal[1].face

if(compDeal[0].face + compDeal[1].face === 'AK' || compDeal[0].face + compDeal[1].face === 'KA') {
    
    $('#dealerScore').empty()
    $('#dealerScore').append('Dealer has 21')
    alert('Dealer has 21')
    return
        // $('#dealerScore').empty()
        // $('#playerScore').empty()
    
}else if(compDeal[0].face + compDeal[1].face === 'AQ' || compDeal[0].face + compDeal[1].face === 'QA') {
    
    $('#dealerScore').empty()
    $('#dealerScore').append('Dealer has 21')
    alert('Dealer has 21')
    return
        // $('#dealerScore').empty()
        // $('#playerScore').empty()
    
}else if(compDeal[0].face + compDeal[1].face === 'AJ' || compDeal[0].face + compDeal[1].face === 'JA') {
    
    $('#dealerScore').empty()
    $('#dealerScore').append('Dealer has 21') 
    alert('Dealer has 21')
    return
        // $('#dealerScore').empty()
        // $('#playerScore').empty()
    
}else if(compDeal[0].face + compDeal[1].face === 'A10' || compDeal[0].face + compDeal[1].face === '10A') {
    
    $('#dealerScore').empty()
    $('#dealerScore').append('Dealer has 21') 
    alert('Dealer has 21')
    return
        // $('#dealerScore').empty()
        // $('#playerScore').empty()
    
}else {
    
    dealerValue = compDeal[0].value + compDeal[1].value
    $('#dealerScore').append(dealerValue)
}   
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Evaluating if Player's first two cards are blackjack
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

if(playerDeal[0].face + playerDeal[1].face === 'AK' || playerDeal[0].face + playerDeal[1].face === 'KA') {
    $('#playerScore').empty()
    $('#playerScore').append('Player has 21') 
    alert('Player has Blackjack')
    return
}else if(playerDeal[0].face + playerDeal[1].face === 'AQ' || playerDeal[0].face + playerDeal[1].face === 'QA') {
    $('#playerScore').empty()
    $('#playerScore').append('Player has 21') 
    alert('Player has Blackjack')
    return
}else if(playerDeal[0].face + playerDeal[1].face === 'AJ' || playerDeal[0].face + playerDeal[1].face === 'JA') {
    $('#playerScore').empty()
    $('#playerScore').append('Player has 21')
    alert('Player has Blackjack')
    return
}else if(playerDeal[0].face + playerDeal[1].face === 'A10' || playerDeal[0].face + playerDeal[1].face === '10A') {
    $('#playerScore').empty()
    $('#playerScore').append('Player has 21')
    alert('Player has Blackjack')
    return
}else {
    playerValue = playerDeal[0].value + playerDeal[1].value
    $('#playerScore').append(playerValue)
}


}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Evaluating if Player's score for a hit
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const hit = () => {
    playerHit= [];
    playerHit.push(fullDeck.pop())
    $('#player').append(playerHit[0].face)
    $('#player').append(playerHit[0].suit)
    

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Hit if player has A/A
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
if(playerDeal[0].face === 'A' && playerDeal[1].face ==='A') {
    $('#playerScore').empty()
    $('#playerScore').append((playerDeal[0].value1 + playerHit.value) + ' or ' + (playerDeal[1].value11 + playerHit.value))
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Hit if player has A/off
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
}else if(playerDeal[0].face === 'A') {
    $('#playerScore').empty()
    $('#playerScore').text('Player Score')
    let aOne = (playerDeal[0].value1 + playerDeal[1].value) + playerHit[0].value
    let aTwo = (playerDeal[0].value11 + playerDeal[1].value) + playerHit[0].value
    $('#playerScore').append((aOne) + ' or ' + (aTwo))
}else if(playerDeal[1].face === 'A') {
    $('#playerScore').empty()
    $('#playerScore').text('Player Score')
    let aOne = (playerDeal[1].value1 + playerDeal[0].value) + playerHit[0].value
    let aTwo = (playerDeal[1].value11 + playerDeal[0].value) + playerHit[0].value
    $('#playerScore').append((aOne) + ' or ' + (aTwo))
    
}

    $('#playerScore').empty()
    $('#playerScore').text('Player Score')
    $('#playerScore').append(playerDeal[0].value + playerDeal[1].value + playerHit[0].value)
    playerHitValue = playerDeal[0].value + playerDeal[1].value + playerHit[0].value
    if(playerHitValue > 21) {
        alert('Player Busts!')
        $('#hit').attr('disabled', true);
        $('#stand').attr('disabled', true);
    }
}

const stand = () => {


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Hit if dealer has A/A
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    if(compDeal[0].face === 'A' && compDeal[1].face ==='A') {
       dealerHitValue = fullDeck.pop()
       $('#dealerScore').empty()
       $('#dealerScore').text('Dealer Score')
       $('#dealerScore').append((compDeal[0].value1 + dealerHitValue) + " or "  + (compDeal[1].value11 + dealerHitValue)) 
    
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Hit if player has A/off
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    }else if(compDeal[0].face === 'A') {
        $('#dealerScore').empty()
        $('#dealerScore').text('Player Score')
        let aOne = (compDeal[0].value1 + compDeal[1].value) + compHit[0].value
        let aTwo = (compDeal[0].value11 + compDeal[1].value) + compHit[0].value
        $('#dealerScore').append((aOne) + ' or ' + (aTwo))
        alert('Dealer has 21')
        $('#dealerScore').empty()
        $('#playerScore').empty()
    }else if(compDeal[1].face === 'A') {
        $('#dealerScore').empty()
        $('#dealerScore').text('Player Score')
        let aOne = (compDeal[1].value1 + compDeal[0].value) + compHit[0].value
        let aTwo = (compDeal[1].value11 + compDeal[0].value) + compHit[0].value
        $('#dealerScore').append((aOne) + ' or ' + (aTwo))
        alert('Dealer has 21')
        $('#dealerScore').empty()
        $('#playerScore').empty()
    
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Evaluate to see if dealer hits
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

if(compDeal[0].value + compDeal[1].value < 17) {
    compscore = compDeal[0].value + compDeal[1].value
    compHit.push(fullDeck.pop())
    $('#dealerScore').empty()
$('#dealerScore').append(compScore)
} else {

    alert('dealer stands')

}

    if($('dealerScore') > $('playerScore'))  {
        alert('dealer wins')

    }else {
        alert('player wins')
    }

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

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Hit Button
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const $hit = $('#hit')
$hit.on('click', hit)

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Stand
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const $stand = $('#stand')
$stand.on('click', stand)

});

