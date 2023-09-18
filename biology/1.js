document.body.innerHTML = `
<span id="ques">dna list</span>
<div class="text">
  <p class="main1">
    <span class="word wisteria">tasty.</span>
    <span class="word belize">কসাই .</span>
    <span class="word pomegranate">fancy.</span>
    <span class="word green">beautiful.</span>
    <span class="word midnight">cheap.</span>
  </p>
  <p></p>
</div>
`;
  

    
var newLink = document.createElement("link");

newLink.rel = "stylesheet"; // Example: Adding a stylesheet
newLink.type = "text/css"; // Type of the link (CSS in this case)
newLink.href = "./biology/text1.css"; // URL to your stylesheet


document.head.appendChild(newLink);

//---------------------------

var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}


function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
    cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
    nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 2000);
delay(7000);




