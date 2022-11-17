var div = document.createElement("div");
var div2 = document.createElement("div");
var div3 = document.createElement("div");
var a = document.createElement("a");
var button = document.createElement("button");
var h4 = document.createElement("h4");
var img = document.createElement("img");
var hr = document.createElement("hr");
var h7 = document.createElement("h7");
var order = document.createElement("button");


var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");





div.setAttribute('id', 'cs')
div2.setAttribute('id', 'cont')
div3.setAttribute('id', 'intro')
img.setAttribute('id', 'lp')
button.setAttribute('id', 'me')
button.setAttribute('id', 'buttt')
button1.setAttribute('class', 'but4')
button2.setAttribute('class', 'but4')
button3.setAttribute('class', 'but4')
button4.setAttribute('class', 'but4')
button1.setAttribute('id', 'but1')
button2.setAttribute('id', 'but2')
button3.setAttribute('id', 'but3')
button4.setAttribute('id', 'but4')
hr.setAttribute('id', 'hr')
order.setAttribute('id', 'order')
h4.setAttribute('id', 'h4')








button.setAttribute('onclick', 'me()')

button1.setAttribute('onclick', 'mcu()')
button2.setAttribute('onclick', 'mcus()')
button3.setAttribute('onclick', 'mar()')
button4.setAttribute('onclick', 'other()')
img.setAttribute('onclick', 'home()')


order.setAttribute('onclick', 'order()')






button.innerText = 'Contact me?/Movie request'
h4.innerText = 'Henry Cavill is back!!!!'
button1.innerText = 'Marvel'
button2.innerText = 'Marvel-Seris'
button3.innerText = 'fox & sony'
button4.innerText = 'Others'
order.innerText = 'Magic!'




button1.style.display = 'none'
button2.style.display = 'none'
button3.style.display = 'none'
button4.style.display = 'none'
hr.style.display = 'none'
button.style.display = 'none'
order.style.display = 'none'







a.append(img)
div.append(a, button, hr, h7, button1, button2, button3, button4)



document.body.append(div, h4,order,div3,div2)



 
document.body.style.cssText = 'background-color: #0F0F0F;color: rgb(255, 255, 255);margin: 0px;padding: 0px;margin-left: 1.2%;margin-right: 1.2%;';

div.style.cssText = 'background-color: #373737;height: calc(100vh*.144);position: sticky;top: 0;'

img.style.cssText = 'height:calc(100vh*.144*.5) ;padding-left:calc(100vw*.045) ;'

button.style.cssText = 'float: right;padding: calc(100vh*.144*.07);background-color: #acacac;font-size: 10px;'

button1.style.cssText = 'height: calc(100vh*.056);font-size: calc(100vh*.056*.3);padding: 0   calc(100vw*.06) 0 calc(100vw*.06);'
button2.style.cssText = 'height: calc(100vh*.056);font-size: calc(100vh*.056*.3);padding: 0   calc(100vw*.04) 0 calc(100vw*.04);'
button3.style.cssText = 'height: calc(100vh*.056);font-size: calc(100vh*.056*.3);padding: 0   calc(100vw*.04) 0 calc(100vw*.04);'
button4.style.cssText = 'height: calc(100vh*.056);font-size: calc(100vh*.056*.3);padding: 0   calc(100vw*.06) 0 calc(100vw*.06);'

// order.style.cssText = 'padding: 8px   calc(100vw*.06) 15px calc(100vw*.06);background-color: rgb(154, 238, 29);margin-bottom: 45px;border-radius:10px ;'
order.style.cssText = 'padding: 8px   calc(100vw*.06) 15px calc(100vw*.06); background-color:rgba(0, 0, 0, 0.1);color: rgba(255, 255, 255, 0.4);margin-bottom: 165px; outline: none !important;border: none !important;box-shadow: none !important;'

hr.style.cssText = 'margin: 0;border-color: #473737;'

h4.style.cssText = 'opacity: 0.3;'

document.getElementById('but1').style.display = ''
document.getElementById('but1').style.backgroundColor = 'grey'
document.getElementById('but2').style.display = ''
document.getElementById('but3').style.display = ''
document.getElementById('but4').style.display = ''
document.getElementById('hr').style.display = ''
document.getElementById('buttt').style.display = ''
document.getElementById('order').style.display = ''



document.getElementById('buttt').style.float = 'right'
var op = document.getElementById('lp')
op.src = './logoimg/log.png'



var scriptElement=document.createElement('script');

scriptElement.type = 'text/javascript';

scriptElement.src = './1.js';

script.setAttribute('id', 'scr1')

document.body.appendChild(scriptElement);













