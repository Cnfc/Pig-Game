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
  var diceDom = document.querySelector('.dice')
  diceDom.style.display = 'block';
  diceDom.src = 'dice-' + dice + '.png'

  //3. Update the round score
})












// document.querySelector('#current-' + activePlayer).textContent = dice;
// //document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x = document.querySelector('#score-1').textContent;
