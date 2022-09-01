function me(){
    var xhttp = new XMLHttpRequest();
    
    xhttp.open("GET",'------------------------------------fb---------------fb-----', true);
    xhttp.send();
    window.open('https://www.facebook.com/zafar.niloy')

}




function imgdiv(bname,bimg,func,renmo,clck,donw,srce){
    var w = window.innerWidth;
    var h = window.innerHeight;
    var g=w*.3939


   var chidiv= document.createElement("div");
   var iiidiv= document.createElement("div");
   var p= document.createElement("p");
   p.innerText=bname
   var image= document.createElement("img");

   chidiv.classList.add('chi');
   iiidiv.classList.add('iii');
   image.src=bimg

   iiidiv.append(image)
   chidiv.append(iiidiv,p)
   var con=document.getElementById('cont')
   con.appendChild(chidiv)

   if(h-w<0){

   chidiv.style.backgroundColor='#000000';
   chidiv.style.padding='0px'
   chidiv.style.marginTop='14px'
   chidiv.style.float='left'
   chidiv.style.height=h*.9+'px'
   chidiv.style.width=g*.6+'px'

image.style.width=g*.6+'px'

iiidiv.style.height=h*.7+'px'
iiidiv.style.overflow='hidden'

   }else{
    chidiv.style.backgroundColor='#000000';
    chidiv.style.padding='0px'
    chidiv.style.marginTop='14px'
    chidiv.style.float='left'
    chidiv.style.height=h*.55+'px'
    chidiv.style.width=g+'px'

    image.style.width=g+'px'

    iiidiv.style.height=h*.4+'px'
    iiidiv.style.overflow='hidden'

   }

chidiv.onclick=() => {
    var con=document.getElementById('cont')
    con.style.display='none'
     
     var req=bimg+'--------------------'+bimg+'------------------'+bimg
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET",req, true);
    xhttp.send();





    var video= document.createElement("video");
    var source= document.createElement("source");
    var button= document.createElement("button");
    
    
    func()
    

    donw()



    

    video.setAttribute('controls','true')
    video.setAttribute('id','viddd')
    video.setAttribute('controlsList','nodownload')
    video.setAttribute('oncontextmenu','return false;')




    source.setAttribute('id','srcc')
    button.setAttribute('id','butt')

    





    video.width=w*.94
    source.src=srce

    
    button.innerText='Home'


    button.style.padding='20px'






    video.append(source)

    // document.body.append(button)

    var ff=document.getElementById('epi1')


    document.body.insertBefore(video, ff)
    document.body.insertBefore(button,ff)




// down7.onclick=() => {
//     if(q7pp=='' || q7pp==undefined || q7pp==null){
//      alert('Not available bro')
//     }else{
//         var viedeo = document.getElementById("viddd");
        
//         if ( viedeo.readyState === 4 ) {
//             // it's loaded
//             // alert('loaded')
//             var xhttp = new XMLHttpRequest();
    
//             xhttp.open("GET",'------------------------------------download'+bimg+'--------------------', true);
//             xhttp.send();
//             // window.open(downl)
//             window.open(downl,'_self')
//         }else{
//          alert('Plz wait few second for download ')
//         }

//     }

// }
clck()





button.onclick=() => {
    var con=document.getElementById('cont')
    con.style.display=''
    var srcc=document.getElementById('srcc')
    srcc.parentElement.remove()
    var butt=document.getElementById('butt')
    butt.remove()


    // var qmobn=document.getElementById('qmob18k')
    // qmobn.remove()

    renmo()



}


}

}



setTimeout(() => {

    // imgdiv(name,img,q720,q1080,m1080,q4k,q3d)
    

    imgdiv('Moonknight 1080p','./logoimg/moon.jpg',
    function a(){
       var one= document.createElement("button");
       var two= document.createElement("button");
       var thr= document.createElement("button");
       var four= document.createElement("button");
       var five= document.createElement("button");
       var six= document.createElement("button");

        one.setAttribute('id','o')
        two.setAttribute('id','t')
        thr.setAttribute('id','th')
        four.setAttribute('id','f')
        five.setAttribute('id','fi')
        six.setAttribute('id','si')


        one.innerText='Episode 1'
        two.innerText='Episode 2'
        thr.innerText='Episode 3'
        four.innerText='Episode 4'
        five.innerText='Episode 5'
        six.innerText='Episode 6'

        one.style.padding='20px'
        two.style.padding='20px'
        thr.style.padding='20px'
        four.style.padding='20px'
        five.style.padding='20px'
        six.style.padding='20px'

        one.style.backgroundColor='rgb(121, 121, 121)'

        document.body.append(one,two,thr,four,five,six)


        


        },
        function r(){
            document.getElementById('o').remove()
            document.getElementById('t').remove()
            document.getElementById('th').remove()
            document.getElementById('f').remove()
            document.getElementById('fi').remove()
            document.getElementById('si').remove()

            document.getElementById('epi1').remove()
            document.getElementById('epi2').remove()
            document.getElementById('epi3').remove()
            document.getElementById('epi4').remove()
            document.getElementById('epi5').remove()
            document.getElementById('epi6').remove()

        },
        function oncl(){
            o.onclick=() => {
                    document.getElementById('o').style.backgroundColor='rgb(121, 121, 121)'
                    document.getElementById('th').style.backgroundColor='white'
                    document.getElementById('t').style.backgroundColor='white'
                    document.getElementById('f').style.backgroundColor='white'
                    document.getElementById('fi').style.backgroundColor='white'
                    document.getElementById('si').style.backgroundColor='white'


                var sourceee=document.getElementById('srcc')
                var vidddd=document.getElementById('viddd')
                vidddd.pause()
                sourceee.src='https://abcu.bdff.workers.dev/0:/moon1.mp4'
                vidddd.load()
                vidddd.play()

            }
            t.onclick=()=>{
                document.getElementById('t').style.backgroundColor='rgb(121, 121, 121)'
                document.getElementById('o').style.backgroundColor='white'
                document.getElementById('th').style.backgroundColor='white'
                document.getElementById('f').style.backgroundColor='white'
                document.getElementById('fi').style.backgroundColor='white'
                document.getElementById('si').style.backgroundColor='white'

                var sourceee=document.getElementById('srcc')
                var vidddd=document.getElementById('viddd')
                vidddd.pause()
                sourceee.src='https://abcu.bdff.workers.dev/0:/moon2.mp4'
                vidddd.load()
                vidddd.play()
            }
            th.onclick=()=>{
                document.getElementById('th').style.backgroundColor='rgb(121, 121, 121)'
                document.getElementById('o').style.backgroundColor='white'
                document.getElementById('t').style.backgroundColor='white'
                document.getElementById('f').style.backgroundColor='white'
                document.getElementById('fi').style.backgroundColor='white'
                document.getElementById('si').style.backgroundColor='white'
            }
            f.onclick=()=>{
                document.getElementById('f').style.backgroundColor='rgb(121, 121, 121)'
                document.getElementById('o').style.backgroundColor='white'
                document.getElementById('t').style.backgroundColor='white'
                document.getElementById('th').style.backgroundColor='white'
                document.getElementById('fi').style.backgroundColor='white'
                document.getElementById('si').style.backgroundColor='white'
            }
            fi.onclick=()=>{
                document.getElementById('fi').style.backgroundColor='rgb(121, 121, 121)'
                document.getElementById('o').style.backgroundColor='white'
                document.getElementById('t').style.backgroundColor='white'
                document.getElementById('f').style.backgroundColor='white'
                document.getElementById('th').style.backgroundColor='white'
                document.getElementById('si').style.backgroundColor='white'
            }
            si.onclick=()=>{
                document.getElementById('si').style.backgroundColor='rgb(121, 121, 121)'
                document.getElementById('o').style.backgroundColor='white'
                document.getElementById('t').style.backgroundColor='white'
                document.getElementById('f').style.backgroundColor='white'
                document.getElementById('fi').style.backgroundColor='white'
                document.getElementById('th').style.backgroundColor='white'
            }


            var ep1=document.getElementById('epi1')
            ep1.onclick=()=>{
                window.open('https://abcu.bdff.workers.dev/0:/moon1.mp4','_self')
            }
            var ep2=document.getElementById('epi2')
            ep2.onclick=()=>{
                window.open('https://abcu.bdff.workers.dev/0:/moon2.mp4','_self')
            }
        
        },
        function io(){
    var ep1= document.createElement("button");
    var ep2= document.createElement("button");
    var ep3= document.createElement("button");
    var ep4= document.createElement("button");
    var ep5= document.createElement("button");
    var ep6= document.createElement("button");

    ep1.setAttribute('id','epi1')
    ep2.setAttribute('id','epi2')
    ep3.setAttribute('id','epi3')
    ep4.setAttribute('id','epi4')
    ep5.setAttribute('id','epi5')
    ep6.setAttribute('id','epi6')

    ep1.innerText='Download(Episode 1)'
    ep2.innerText='Download(Episode 2)'
    ep3.innerText='Download(Episode 3)'
    ep4.innerText='Download(Episode 4)'
    ep5.innerText='Download(Episode 5)'
    ep6.innerText='Download(Episode 6)'



    ep1.style.padding='20px'
    ep2.style.padding='20px'
    ep3.style.padding='20px'
    ep4.style.padding='20px'
    ep5.style.padding='20px'
    ep6.style.padding='20px'

    document.body.append(ep1,ep2,ep3,ep4,ep4,ep5,ep6)
        
        },'https://abcu.bdff.workers.dev/0:/moon1.mp4'

        )



}, 1);
