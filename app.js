var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;


document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';



document.querySelector('.btn-roll').addEventListener('click', function() {
  //1. Random number
  var dice = Math.floor(Math.random() * 6) + 1;

  //2. Display the result
  var diceDom = document.querySelector('.dice');
  diceDom.style.display = 'block';
  diceDom.src = 'dice-' + dice + '.png';

  //3. Update the round score
  if (dice !== 1 ) {
    //Add score
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;

  } else {
    nextPlayer();
  }

});

document.querySelector('.btn-hold').addEventListener('click', function() {
  // Add Current score to Global score
  scores[activePlayer] += roundScore;
  //scores[activePlayer] = scores[activePlayer] + roundScore;
  // Update the UI
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

  // Check if player won the game
  if (scores[activePlayer] >= 10) {
    document.querySelector('#name-' + activePlayer).textContent = "Winner!"
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
  } else {
    //Next player
    nextPlayer();

  }



});


function nextPlayer() {
  //Next player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  // document.querySelector('.player-0-panel').classList.remove('active');
  // document.querySelector('.player-1-panel').classList.add('active');

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';

}






//
// //document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x = document.querySelector('#score-1').textContent;
