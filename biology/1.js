document.body.innerHTML = `
<p id="ques"></p>

<div id="parent" class="text">
  
  <span class="word green">START</span>
    
   
</div>
`;
var dataa={}
fetch('./biology/'+'1'+'.json') // Replace 'data.json' with the path to your JSON file
  .then(response => response.json()) // Parse the JSON response
  .then(data => {
    // 'data' now contains the parsed JSON data
    var datak=data;
    console.log(Object.keys(datak))

    let num = Math.floor(Math.random() * Object.keys(datak).length);
    
    var dataa= datak[Object.keys(datak)[num]]// You can access and use the data here
  console.log(typeof dataa)
  console.log(dataa)
    console.log(dataa.length)
document.getElementById('ques').innerHTML=dataa[0]
    
    for(let ii = 0; ii < dataa.length; ii++){
 // alert(arr[i]);
      
  let span = document.createElement("span");

span.setAttribute('class', 'word');
  let r = Math.floor(Math.random() * 5) + 1;
if(r==1){
  span.classList.add("wisteria")
}else if(r==2){
  span.classList.add("belize")
}else if(r==3){
  span.classList.add("pomegranate")
}else if(r==4){
  span.classList.add("green")
}else{
  span.classList.add("midnight")
}
span.innerText = dataa[ii];
      if(ii!=0){ 
document.getElementById('parent').append(span);}
  };
      //-------------------



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
setInterval(changeWord, 4000);


      //------------



    
  })
  .catch(error => {
    console.error('Error:', error);
  });



var arr=['one j','gh','three','for'];




    
var newLink = document.createElement("link");

newLink.rel = "stylesheet"; // Example: Adding a stylesheet
newLink.type = "text/css"; // Type of the link (CSS in this case)
newLink.href = "./biology/text1.css"; // URL to your stylesheet


document.head.appendChild(newLink);

//---------------------------

var words = document.getElementsByClassName('word');



//------------------


