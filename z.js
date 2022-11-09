var but=document.getElementById('but')



function debounce(fn,delay){
    var timeou
    
    return function (){
        // console.log(timeou)
        
        clearTimeout(timeou)
        
        
        timeou = setTimeout(() => {fn()}, delay);

    }



}


but.addEventListener('click',
debounce(function (){console.log('clicked')},400)

)



