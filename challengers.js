var scores, roundScore, activePlayer;

scores =[0,0];
roundScore = 0;
activePlayer = 0;



document.querySelector('#dice-2').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';



document.querySelector('.btn-roll').addEventListener('click', function(){
// RANDOM NUMBER
    var dice = Math.floor(Math.random() * 6 )+ 1;

// DISPLAY THE RESULT
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

  // UPDATE ROUND SCORE IF NOT 1
  if(dice !== 1) {
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;

  } else {
    //NEXT PLAYER
    nextPlayer();
  }

});

document.querySelector('.btn-hold').addEventListener('click', function() {
    // ADD CURRENT SCORE TO GLOBAL SCORE
    scores[activePlayer] += roundScore;

    // UPDATE THE UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // Check if palyer winner
    if(scores[activePlayer] >= 20 ) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

    } else {
      //NEXT PLAYER
      nextPlayer();
    }
});


// document.querySelector("#current-" + activePlayer).innerHTML = '<em>' + dice + "</em>"



function nextPlayer() {
  // NEXT PLAYER
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  // document.querySelector('.player-0-panel').classList.remove('active');
  // document.querySelector('.player-1-panel').classList.add('active');

  document.querySelector('.dice').style.display = 'none';
}


















//
