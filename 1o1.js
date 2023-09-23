var header = document.createElement("div");
var a = document.createElement("a");
var img = document.createElement("img");
var contact = document.createElement("button");
var hr = document.createElement("hr");
var order = document.createElement("button");
var movieDiv = document.createElement("div");
var h4 = document.createElement("h4");
var mcuListDiv = document.createElement("div");


var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");





header.setAttribute('id', 'cs')
movieDiv.setAttribute('id', 'cont')
mcuListDiv.setAttribute('id', 'mcuListDiv')
img.setAttribute('id', 'lp')
contact.setAttribute('id', 'contact')
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








contact.setAttribute('onclick', 'me()')

button1.setAttribute('onclick', 'mcu()')
button2.setAttribute('onclick', 'mcus()')
button3.setAttribute('onclick', 'mar()')
button4.setAttribute('onclick', 'other()')
img.setAttribute('onclick', 'home()')


order.setAttribute('onclick', 'order()')






contact.innerText = 'Movies!'
// contact.innerText = ''

h4.innerText = 'amake  help korte deuar jonno tnx.jani senti kheye jai .but tnx.'
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
contact.style.display = 'none'
order.style.display = 'none'







a.append(img)
header.append(a, contact, hr, button1, button2, button3, button4)



document.body.append(header, h4,order,mcuListDiv,movieDiv)





 
document.body.style.cssText = 'background-color: #0F0F0F;color: rgb(255, 255, 255);margin: 0px;padding: 0px;margin-left: 1.2%;margin-right: 1.2%;';

header.style.cssText = 'background-color: #373737;height: calc(100vh*.144);position: sticky;top: 0;z-index: 1;'

img.style.cssText = 'height:calc(100vh*.144*.5) ;padding-left:calc(100vw*.045) ;'

contact.style.cssText = 'float: right;padding: calc(100vh*.144*.07);background-color: #acacac;font-size: 10px;'

// contact.style.cssText = 'float: right;padding: calc(100vh*.144*.07);background-color: #373737;font-size: 10px; outline: none !important;border: none !important;box-shadow: none !important;'


button1.style.cssText = 'height: calc(100vh*.056);font-size: calc(100vh*.056*.3);padding: 0   calc(100vw*.06) 0 calc(100vw*.06);'
button2.style.cssText = 'height: calc(100vh*.056);font-size: calc(100vh*.056*.3);padding: 0   calc(100vw*.04) 0 calc(100vw*.04);'
button3.style.cssText = 'height: calc(100vh*.056);font-size: calc(100vh*.056*.3);padding: 0   calc(100vw*.04) 0 calc(100vw*.04);'
button4.style.cssText = 'height: calc(100vh*.056);font-size: calc(100vh*.056*.3);padding: 0   calc(100vw*.06) 0 calc(100vw*.06);'


order.style.cssText = 'padding: 8px   calc(100vw*.06) 15px calc(100vw*.06); background-color:rgba(0, 0, 0, 0.1);color: rgba(255, 255, 255, 0.4);margin-bottom: 15px; outline: none !important;border: none !important;box-shadow: none !important;position:relative'

hr.style.cssText = 'margin: 0;border-color: #473737;'

h4.style.cssText = 'opacity: 0.8;'

// mcuListDiv.style.cssText = 'overflow: hidden;'




document.getElementById('but1').style.display = ''
document.getElementById('but1').style.backgroundColor = 'grey'
document.getElementById('but2').style.display = ''
document.getElementById('but3').style.display = ''
document.getElementById('but4').style.display = ''
document.getElementById('hr').style.display = ''
document.getElementById('contact').style.display = ''
document.getElementById('order').style.display = ''



document.getElementById('contact').style.float = 'right'
var op = document.getElementById('lp')
op.src = './logoimg/log.png'



var scriptElement=document.createElement('script');

scriptElement.type = 'text/javascript';

scriptElement.src = './1.js';

script.setAttribute('id', 'scr1')

document.body.appendChild(scriptElement);













