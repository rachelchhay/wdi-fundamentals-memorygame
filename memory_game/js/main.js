var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
var shuffleCards = [];
var cardsInPlay = [];
shuffleCards = shuffle(cards);

var checkForMatch = function () {

  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
    } else {
      alert("Sorry, try again.");
    }
  }
}

var flipCard = function () {
  var cardId = this.getAttribute('data-id');
  this.setAttribute('src', shuffleCards[cardId].cardImage);
  cardsInPlay.push(shuffleCards[cardId].rank);
  setTimeout(function(){checkForMatch()}, 100);
  console.log("User flipped " + shuffleCards[cardId].rank);
  console.log(shuffleCards[cardId].cardImage);
  console.log(shuffleCards[cardId].suit);
}

var createBoard = function () {
  for(var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', "images/back.png");
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}
createBoard();

var reset = function () {
  cardsInPlay = [];
  shuffleCards = shuffle(cards);
  var imgArr = document.querySelectorAll('img');
  for(var i = 0; i < imgArr.length; i++) {
    imgArr[i].setAttribute('src', "images/back.png");
  }
}

var button = document.querySelector('button');
button.addEventListener('click', reset);

//Fisher-Yates Shuffle

function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
