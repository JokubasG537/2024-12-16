


const hangmanWords = ["javascript", "hangman", "coding", "development", "array", "function", "variable", "object", "algorithm", "syntax"];
const randomArrItem = randomArr();
const hearts = ['❤️', '❤️', '❤️', '❤️', '❤️', '❤️', '❤️'];
let maskedWord = randomArrItem.split('').map(() => '_').join(' ');
console.log(`The word to guess is: ${maskedWord}`);

function randomArr() {
  return hangmanWords[Math.floor(Math.random() * hangmanWords.length)];
}

function stringBreak() {
  return [...randomArrItem];
}

function wordHide() {
  return randomArrItem.split('').map(() => '_').join(' ');
}

function removeAHeart() {
  hearts.pop();
}

function gameLogic(letter) {
  if (hearts.length > 0) {
    if (randomArrItem.includes(letter)) {
      let newMaskedWord = "";
      for (let i = 0; i < randomArrItem.length; i++) {
        if (randomArrItem[i] === letter) {
          newMaskedWord += letter;
        } else {
          newMaskedWord += maskedWord[i];
        }
      }
      maskedWord = newMaskedWord;
      console.log(`Current word: ${maskedWord}`);
      if (!maskedWord.includes('_')) {
        gameWon();
      }
    } else {
      removeAHeart();
      alert('You just lost one life');
      if (hearts.length === 0) {
        gameOver();
      }
    }
  }
}


function gameOver() {
  alert('Game over!');
}

function gameWon() {
  alert('You\'ve won the game!');
}

while (hearts.length > 0 && maskedWord.includes('_')) {
  let wordEnter = prompt('Please enter a letter');
  if (typeof wordEnter === 'string' && wordEnter.length === 1) {
    gameLogic(wordEnter);
  } else {
    alert('Please enter a single letter.');
  }
}
