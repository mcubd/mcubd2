function order(){
    // var xhttp = new XMLHttpRequest();
    // xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    // xhttp.setRequestHeader('reqs', 'Why-so-serious')
    // xhttp.send();

    // document.getElementById('cont').style.display = 'none'
    // document.getElementById('order').remove();


    // var video = document.createElement("video");
    // var source = document.createElement("source");


    // video.setAttribute('controls', 'true')
    // video.setAttribute('autoplay', 'true')
    // video.setAttribute('id', 'viddd')

    // source.setAttribute('id', 'srcc')

    
    // video.width = '96%'
    // video.style.marginTop = '20px'
    // source.src = 'https://share.bdff.workers.dev/0:/OTHERS/joker.mp4'

    // video.append(source)

    // document.body.append(video)

    // if (video.requestFullscreen) {
    //     video.requestFullscreen();
    //   }



    // sig('why-so-serious','9000','9s')
    // sig('why-so-serious','20000','20s')
    // sig('why-so-serious','40000','40s')


}


function me() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    xhttp.setRequestHeader('reqs', 'fb')
    xhttp.send();

    window.open('https://www.facebook.com/zafar.niloy','_self')

}

function mcus() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    xhttp.setRequestHeader('reqs', 'mcu-seris-clicked')
    xhttp.send();


    window.open('https://mcubd.netlify.app/mcu-seris/index','_self')

}

function mcu() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    xhttp.setRequestHeader('reqs', 'mcu--clicked')
    xhttp.send();

    window.open('https://mcubd.netlify.app', '_self')
}
 
function home() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    xhttp.setRequestHeader('reqs', 'logo')
    xhttp.send();


    window.open('https://mcubd.netlify.app', '_self')
}

function mar() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    xhttp.setRequestHeader('reqs', 'Marvel-clicked')
    xhttp.send();
    window.open('https://mcubd.netlify.app/marvel/index','_self')
    
}

function other() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    xhttp.setRequestHeader('reqs', 'other')
    xhttp.send();

    window.open('https://mcubd.netlify.app/others','_self')


}



// imgdiv('Chhichhore (2019) [1.4GB] & 720','chi',{q720p:'',q1080p:''},{size720:'',size1080:''})

// function imgdiv(bname, bimg, q7pp,size,t1,t2) {


function imgdiv(bname, bimg,videolink,size) {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var g = w * .3939


    var chidiv = document.createElement("div");
    var iiidiv = document.createElement("div");
    var p = document.createElement("p");


    p.innerText = bname
        

    
    var image = document.createElement("img");

    chidiv.classList.add('chi');
    iiidiv.classList.add('iii');
    image.src = '../logoimg/'+bimg+'.jpg'

    iiidiv.append(image)


    chidiv.append(iiidiv, p)
    var con = document.getElementById('cont')
    con.appendChild(chidiv)

    if (h - w < 0) {
        chidiv.style.backgroundColor = '#000000';
        chidiv.style.padding = '0px'
        chidiv.style.marginTop = '14px'
        chidiv.style.float = 'left'
        chidiv.style.height = h * .9 + 'px'
        chidiv.style.width = g * .6 + 'px'

        image.style.width = g * .6 + 'px'

        iiidiv.style.height = h * .7 + 'px'
        iiidiv.style.overflow = 'hidden'

    } 
    else {
        chidiv.style.backgroundColor = '#000000';
        chidiv.style.padding = '0px'
        chidiv.style.marginTop = '14px'
        chidiv.style.float = 'left'
        chidiv.style.height = h * .55 + 'px'
        chidiv.style.width = g + 'px'

        image.style.width = g + 'px'

        iiidiv.style.height = h * .4 + 'px'
        iiidiv.style.overflow = 'hidden'

    }

    chidiv.onclick = () => {
        var con = document.getElementById('cont')
        con.style.display = 'none'

        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", 'https://nodebd.vercel.app/', true);
        xhttp.setRequestHeader('reqs', bimg)
        xhttp.send();


        var q720 = document.createElement("button");
        var q1080 = document.createElement("button");
        var downonly = document.createElement("button");

        
        q720.setAttribute('id', 'q720')
        q1080.setAttribute('id', 'q1080')
        downonly.setAttribute('id', 'downonly')


        q720.innerText = '720p ('+size.size720+')'
        q1080.innerText = '1080p ('+size.size1080+')'
        downonly.innerText = 'Download only ('+size.sizedown+')'


        q1080.style.display = 'block'
        q1080.style.width = '100%'
        q1080.style.padding ='50px'
        q1080.style.marginBottom = '10px'

        
        q720.style.display = 'block'
        q720.style.width = '100%'
        q720.style.padding = '50px'
        q720.style.marginBottom = '10px'

        downonly.style.display = 'block'
        downonly.style.width = '100%'
        downonly.style.padding = '50px'
        downonly.style.marginBottom = '10px'

        // if(videolink.q720p==undefined || videolink.q720p=='' ){
        //     if(videolink.q1080p==undefined || videolink.q1080p=='' ){}else{
        //         document.body.append(q1080)
        //     }
        // }else{
        //     if(videolink.q1080p==undefined || videolink.q1080p=='' ){document.body.append(q720)}else{
        //         document.body.append(q720,q1080)
        //     }
        // }

    



        if(videolink.q720p==undefined || videolink.q720p=='' ){
            if(videolink.q1080p==undefined || videolink.q1080p=='' ){
                if(videolink.downonly==undefined || videolink.downonly=='' ){
                }else{document.body.append(downonly)}
            }else{
                if(videolink.downonly==undefined || videolink.downonly=='' ){
                    document.body.append(q1080)
                }else{document.body.append(downonly,q1080)}
            }
        }else{
            if(videolink.q1080p==undefined || videolink.q1080p=='' ){
                if(videolink.downonly==undefined || videolink.downonly=='' ){
                    document.body.append(q720)
                }else{
                    document.body.append(downonly,q720)
                }
            }
            else{

                if(videolink.downonly==undefined || videolink.downonly==''){
                document.body.append(q720,q1080)
                }else{
                    document.body.append(downonly,q720,q1080)
                }

            }






        }


        q720.onclick = () => {

            var q720 = document.getElementById('q720')
            if(q720==null){}else{q720.remove()}
            var q1080 = document.getElementById('q1080')
            if(q1080==null){}else{q1080.remove()}
            var downonly = document.getElementById('downonly')
            if(downonly==null){}else{downonly.remove()}


        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", 'https://nodebd.vercel.app/', true);
        xhttp.setRequestHeader('reqs', bimg+'720-click')
        xhttp.send();

        var onli = document.createElement("button");
        var down7 = document.createElement("button");
        
        onli.setAttribute('id', 'onli')
        down7.setAttribute('id', 'down')

        onli.innerText = 'Watch Online'
        down7.innerText = 'Download (' + size.size720 + ')'

        down7.style.display = 'block'
        down7.style.width = '100%'
        down7.style.padding ='50px'
        
        onli.style.display = 'block'
        onli.style.width = '100%'
        onli.style.padding = '50px'
        onli.style.marginBottom = '10px'

        // document.body.append(video, button)
        document.body.append(onli,down7)
    



onli.onclick = () => {
        var onli = document.getElementById('onli')
        onli.remove()
        var dow = document.getElementById('down')
        dow.remove()


        var video = document.createElement("video");
        var source = document.createElement("source");


        video.setAttribute('controls', 'true')
        video.setAttribute('autoplay', 'true')
        video.setAttribute('id', 'viddd')
        video.setAttribute('controlsList', 'noplaybackrate nodownload ')
        video.setAttribute('oncontextmenu', 'return false;')

        source.setAttribute('id', 'srcc')

        
        video.width = w * .94
        video.style.marginTop = '20px'
        source.src = videolink.q720p

        video.append(source)

        document.body.append(video)



        sig(bimg,'9000','9s')
        sig(bimg,'20000','20s')
        sig(bimg,'40000','40s')
        sig(bimg,'120000','2m')
        sig(bimg,'300000','5m')
        sig(bimg,'900000','15m')
        sig(bimg,'1200000','20m')
        sig(bimg,'1800000','30m')
        sig(bimg,'2400000','40m')
        sig(bimg,'3000000','50m')
        sig(bimg,'3600000','1h')
        sig(bimg,'4200000','1h-10m')
        sig(bimg,'4800000','1h-20m')
        sig(bimg,'5400000','1h-30m')
        sig(bimg,'6000000','1h-40m')
        sig(bimg,'6600000','1h-50m')
        sig(bimg,'7200000','2h')
        sig(bimg,'7500000','2h-5m')
        sig(bimg,'7800000','2h-10m')
        sig(bimg,'8100000','2h-15m')
        sig(bimg,'8400000','2h-20m')
        sig(bimg,'8700000','2h-25m')
        sig(bimg,'9000000','2h-30m')
        sig(bimg,'9300000','2h-35m')
        sig(bimg,'9600000','2h-40m')




        }



        down7.onclick = () => {
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", 'https://nodebd.vercel.app/', true);
            xhttp.setRequestHeader('reqs', bimg+'-720-download')
            xhttp.send();
            window.open(videolink.q720p, '_self') }


    }


    q1080.onclick = () => {


        var q720 = document.getElementById('q720')
        if(q720==null){}else{q720.remove()}
        var q1080 = document.getElementById('q1080')
        if(q1080==null){}else{q1080.remove()}
        var downonly = document.getElementById('downonly')
        if(downonly==null){}else{downonly.remove()}



        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", 'https://nodebd.vercel.app/', true);
        xhttp.setRequestHeader('reqs', bimg+'-1080-click')
        xhttp.send();

        var onli = document.createElement("button");
        var down7 = document.createElement("button");
        
        onli.setAttribute('id', 'onli')
        down7.setAttribute('id', 'down')

        onli.innerText = 'Watch Online'
        down7.innerText = 'Download (' + size.size1080 + ')'

        down7.style.display = 'block'
        down7.style.width = '100%'
        down7.style.padding ='50px'
        
        onli.style.display = 'block'
        onli.style.width = '100%'
        onli.style.padding = '50px'
        onli.style.marginBottom = '10px'

        // document.body.append(video, button)
        document.body.append(onli,down7)
    



onli.onclick = () => {
        var onli = document.getElementById('onli')
        onli.remove()
        var dow = document.getElementById('down')
        dow.remove()


        var video = document.createElement("video");
        var source = document.createElement("source");


        video.setAttribute('controls', 'true')
        video.setAttribute('autoplay', 'true')
        video.setAttribute('id', 'viddd')
        video.setAttribute('controlsList', 'noplaybackrate nodownload ')
        video.setAttribute('oncontextmenu', 'return false;')

        source.setAttribute('id', 'srcc')

        
        video.width = w * .94
        video.style.marginTop = '20px'
        source.src = videolink.q1080p

        video.append(source)

        document.body.append(video)



        sig(bimg,'9000','9s')
        sig(bimg,'20000','20s')
        sig(bimg,'40000','40s')
        sig(bimg,'120000','2m')
        sig(bimg,'300000','5m')
        sig(bimg,'900000','15m')
        sig(bimg,'1200000','20m')
        sig(bimg,'1800000','30m')
        sig(bimg,'2400000','40m')
        sig(bimg,'3000000','50m')
        sig(bimg,'3600000','1h')
        sig(bimg,'4200000','1h-10m')
        sig(bimg,'4800000','1h-20m')
        sig(bimg,'5400000','1h-30m')
        sig(bimg,'6000000','1h-40m')
        sig(bimg,'6600000','1h-50m')
        sig(bimg,'7200000','2h')
        sig(bimg,'7500000','2h-5m')
        sig(bimg,'7800000','2h-10m')
        sig(bimg,'8100000','2h-15m')
        sig(bimg,'8400000','2h-20m')
        sig(bimg,'8700000','2h-25m')
        sig(bimg,'9000000','2h-30m')
        sig(bimg,'9300000','2h-35m')
        sig(bimg,'9600000','2h-40m')




        }



        down7.onclick = () => {
            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", 'https://nodebd.vercel.app/', true);
            xhttp.setRequestHeader('reqs', bimg+'-1080-download')
            xhttp.send();
            window.open(videolink.q1080p, '_self') }


    }


    downonly.onclick = () => {

        var q720 = document.getElementById('q720')
        if(q720==null){}else{q720.remove()}
        var q1080 = document.getElementById('q1080')
        if(q1080==null){}else{q1080.remove()}
        var downonly = document.getElementById('downonly')
        if(downonly==null){}else{downonly.remove()}


    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'https://nodebd.vercel.app/', true);
    xhttp.setRequestHeader('reqs', bimg+'downonly-click')
    xhttp.send();

    var down7 = document.createElement("button");
    
    down7.setAttribute('id', 'down')

    down7.innerText = 'Download (' + size.sizedownonly + ')'

    down7.style.display = 'block'
    down7.style.width = '100%'
    down7.style.padding ='50px'
    


    // document.body.append(video, button)
    document.body.append(down7)



    down7.onclick = () => {
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", 'https://nodebd.vercel.app/', true);
        xhttp.setRequestHeader('reqs', bimg+'-downonly-download')
        xhttp.send();
        window.open(videolink.downonly, '_self') }


}


   }





}


    
function seris(bname, bimg,videolink,size) {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var g = w * .3939


    var chidiv = document.createElement("div");
    var iiidiv = document.createElement("div");
    var p = document.createElement("p");
    p.innerText = bname
    var image = document.createElement("img");

    chidiv.classList.add('chi');
    iiidiv.classList.add('iii');
    image.src = '../logoimg/'+bimg+'.jpg'

    iiidiv.append(image)
    chidiv.append(iiidiv, p)
    var con = document.getElementById('cont')
    con.appendChild(chidiv)

    if (h - w < 0) {
        chidiv.style.backgroundColor = '#000000';
        chidiv.style.padding = '0px'
        chidiv.style.marginTop = '14px'
        chidiv.style.float = 'left'
        chidiv.style.height = h * .9 + 'px'
        chidiv.style.width = g * .6 + 'px'

        image.style.width = g * .6 + 'px'

        iiidiv.style.height = h * .7 + 'px'
        iiidiv.style.overflow = 'hidden'

    } 
    else {
        chidiv.style.backgroundColor = '#000000';
        chidiv.style.padding = '0px'
        chidiv.style.marginTop = '14px'
        chidiv.style.float = 'left'
        chidiv.style.height = h * .55 + 'px'
        chidiv.style.width = g + 'px'

        image.style.width = g + 'px'

        iiidiv.style.height = h * .4 + 'px'
        iiidiv.style.overflow = 'hidden'

    }

    chidiv.onclick = () => {
        var con = document.getElementById('cont')
        con.style.display = 'none'

        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", 'https://nodebd.vercel.app/', true);
        xhttp.setRequestHeader('reqs', bimg)
        xhttp.send();

        // ------------------------------------------




        if('kk'=='kk'){


            var e1 = document.createElement("button");
            var e2 = document.createElement("button");
            var e3 = document.createElement("button");
            var e4 = document.createElement("button");
            var e5 = document.createElement("button");
            var e6 = document.createElement("button");
            var e7 = document.createElement("button");
            var e8 = document.createElement("button");
            var e9 = document.createElement("button");
            var e10 = document.createElement("button");
    
        
            e1.innerText='Episode 1'
            e2.innerText='Episode 2'
            e3.innerText='Episode 3'
            e4.innerText='Episode 4'
            e5.innerText='Episode 5'
            e6.innerText='Episode 6'
            e7.innerText='Episode 7'
            e8.innerText='Episode 8'
            e9.innerText='Episode 9'
            e10.innerText='Episode 10'
    
    
    
    
            e1.style.display = 'block'
            e2.style.display = 'block'
            e3.style.display = 'block'
            e4.style.display = 'block'
            e5.style.display = 'block'
            e6.style.display = 'block'
            e7.style.display = 'block'
            e8.style.display = 'block'
            e9.style.display = 'block'
            e10.style.display = 'block'
    
    
            e1.style.width = '100%'
            e2.style.width = '100%'
            e3.style.width = '100%'
            e4.style.width = '100%'
            e5.style.width = '100%'
            e6.style.width = '100%'
            e7.style.width = '100%'
            e8.style.width = '100%'
            e9.style.width = '100%'
            e10.style.width = '100%'
    
    
            e1.style.padding = '12px'
            e2.style.padding = '12px'
            e3.style.padding = '12px'
            e4.style.padding = '12px'
            e5.style.padding = '12px'
            e6.style.padding = '12px'
            e7.style.padding = '12px'
            e8.style.padding = '12px'
            e9.style.padding = '12px'
            e10.style.padding = '12px'
    
    
    
    
            e1.style.marginBottom = '10px'
            e2.style.marginBottom = '10px'
            e3.style.marginBottom = '10px'
            e4.style.marginBottom = '10px'
            e5.style.marginBottom = '10px'
            e6.style.marginBottom = '10px'
            e7.style.marginBottom = '10px'
            e8.style.marginBottom = '10px'
            e9.style.marginBottom = '10px'
            e10.style.marginBottom = '10px'
    
      
    
            var count=videolink.length


            if(count==0){
            }else if(count==1){
                document.body.append(e1)
            }else if(count==2){
                document.body.append(e1,e2)
            }else if(count==3){
                document.body.append(e1,e2,e3)
            }else if(count==4){
                document.body.append(e1,e2,e3,e4)
            }else if(count==5){
                document.body.append(e1,e2,e3,e4,e5)
            }else if(count==6){
                document.body.append(e1,e2,e3,e4,e5,e6)
            }else if(count==7){
                document.body.append(e1,e2,e3,e4,e5,e6,e7)
            }else if(count==8){
                document.body.append(e1,e2,e3,e4,e5,e6,e7,e8)
            }else if(count==9){
                document.body.append(e1,e2,e3,e4,e5,e6,e7,e8,e9)
            }else if(count==10){
                document.body.append(e1,e2,e3,e4,e5,e6,e7,e8,e9,e10)
    
            }else{
    
            }
        }



        e1.onclick=function (){
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");
            
    
            onli.innerText = 'Watch Online'
            down.innerText = 'Download('+size+')'
    
            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding ='50px'
            onli.style.marginBottom = '10px'
            
            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'

    
            document.body.append(onli,down)


            onli.onclick=function ()  {
            down.remove()
            onli.remove()

            var video = document.createElement("video");
            var source = document.createElement("source");
    
    
            video.setAttribute('controls', 'true')
            video.setAttribute('autoplay', 'true')
            video.setAttribute('id', 'viddd')
            video.setAttribute('controlsList', 'noplaybackrate nodownload ')
            video.setAttribute('oncontextmenu', 'return false;')
    
    
    
    
    
    
            source.setAttribute('id', 'srcc')
            
            video.width = w * .94
            video.style.marginTop = '20px'
    
            source.src = videolink[0]
    
            video.append(source)
            document.body.append(video)



            sig(bimg+'-ep-1','9000','9s')
            sig(bimg+'-ep-1','20000','20s')
            sig(bimg+'-ep-1','40000','40s')
            sig(bimg+'-ep-1','120000','2m')
            sig(bimg+'-ep-1','300000','5m')
            sig(bimg+'-ep-1','900000','15m')
            sig(bimg+'-ep-1','1200000','20m')
            sig(bimg+'-ep-1','1800000','30m')
            sig(bimg+'-ep-1','2400000','40m')
            sig(bimg+'-ep-1','3000000','50m')
            sig(bimg+'-ep-1','3600000','1h')
            sig(bimg+'-ep-1','4200000','1h-10m')
            sig(bimg+'-ep-1','4800000','1h-20m')
            sig(bimg+'-ep-1','5400000','1h-30m')
            sig(bimg+'-ep-1','6000000','1h-40m')
            sig(bimg+'-ep-1','6600000','1h-50m')
            sig(bimg+'-ep-1','7200000','2h')
            sig(bimg+'-ep-1','7500000','2h-5m')
            sig(bimg+'-ep-1','7800000','2h-10m')
            sig(bimg+'-ep-1','8100000','2h-15m')
            sig(bimg+'-ep-1','8400000','2h-20m')
            sig(bimg+'-ep-1','8700000','2h-25m')
            sig(bimg+'-ep-1','9000000','2h-30m')
            sig(bimg+'-ep-1','9300000','2h-35m')
            sig(bimg+'-ep-1','9600000','2h-40m')


             
            }

            down.onclick=function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg+'-ep-1-download')
                xhttp.send();
                window.open(videolink[0], '_self') 
             
            }



        }
        e2.onclick=function (){
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");
            
    
            onli.innerText = 'Watch Online'
            down.innerText = 'Download('+size+')'
    
            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding ='50px'
            onli.style.marginBottom = '10px'
            
            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'

    
            document.body.append(onli,down)


            onli.onclick=function ()  {
            down.remove()
            onli.remove()

            var video = document.createElement("video");
            var source = document.createElement("source");
    
    
            video.setAttribute('controls', 'true')
            video.setAttribute('autoplay', 'true')
            video.setAttribute('id', 'viddd')
            video.setAttribute('controlsList', 'noplaybackrate nodownload ')
            video.setAttribute('oncontextmenu', 'return false;')
    
    
    
    
    
    
            source.setAttribute('id', 'srcc')
            
            video.width = w * .94
            video.style.marginTop = '20px'
    
            source.src = videolink[1]
    
            video.append(source)
            document.body.append(video)


            sig(bimg+'-ep-2','9000','9s')
            sig(bimg+'-ep-2','20000','20s')
            sig(bimg+'-ep-2','40000','40s')
            sig(bimg+'-ep-2','120000','2m')
            sig(bimg+'-ep-2','300000','5m')
            sig(bimg+'-ep-2','900000','15m')
            sig(bimg+'-ep-2','1200000','20m')
            sig(bimg+'-ep-2','1800000','30m')
            sig(bimg+'-ep-2','2400000','40m')
            sig(bimg+'-ep-2','3000000','50m')
            sig(bimg+'-ep-2','3600000','1h')
            sig(bimg+'-ep-2','4200000','1h-10m')
            sig(bimg+'-ep-2','4800000','1h-20m')
            sig(bimg+'-ep-2','5400000','1h-30m')
            sig(bimg+'-ep-2','6000000','1h-40m')
            sig(bimg+'-ep-2','6600000','1h-50m')
            sig(bimg+'-ep-2','7200000','2h')
            sig(bimg+'-ep-2','7500000','2h-5m')
            sig(bimg+'-ep-2','7800000','2h-10m')
            sig(bimg+'-ep-2','8100000','2h-15m')
            sig(bimg+'-ep-2','8400000','2h-20m')
            sig(bimg+'-ep-2','8700000','2h-25m')
            sig(bimg+'-ep-2','9000000','2h-30m')
            sig(bimg+'-ep-2','9300000','2h-35m')
            sig(bimg+'-ep-2','9600000','2h-40m')
             
            }


            down.onclick=function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg+'-ep-2-download')
                xhttp.send();
                window.open(videolink[1], '_self') 
             
            }



        }
        e3.onclick=function (){
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");
            
    
            onli.innerText = 'Watch Online'
            down.innerText = 'Download('+size+')'
    
            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding ='50px'
            onli.style.marginBottom = '10px'
            
            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'

    
            document.body.append(onli,down)


            onli.onclick=function ()  {
            down.remove()
            onli.remove()

            var video = document.createElement("video");
            var source = document.createElement("source");
    
    
            video.setAttribute('controls', 'true')
            video.setAttribute('autoplay', 'true')
            video.setAttribute('id', 'viddd')
            video.setAttribute('controlsList', 'noplaybackrate nodownload ')
            video.setAttribute('oncontextmenu', 'return false;')
    
    
    
    
    
    
            source.setAttribute('id', 'srcc')
            
            video.width = w * .94
            video.style.marginTop = '20px'
    
            source.src = videolink[2]
    
            video.append(source)
            document.body.append(video)


            sig(bimg+'-ep-3','9000','9s')
            sig(bimg+'-ep-3','20000','20s')
            sig(bimg+'-ep-3','40000','40s')
            sig(bimg+'-ep-3','120000','2m')
            sig(bimg+'-ep-3','300000','5m')
            sig(bimg+'-ep-3','900000','15m')
            sig(bimg+'-ep-3','1200000','20m')
            sig(bimg+'-ep-3','1800000','30m')
            sig(bimg+'-ep-3','2400000','40m')
            sig(bimg+'-ep-3','3000000','50m')
            sig(bimg+'-ep-3','3600000','1h')
            sig(bimg+'-ep-3','4200000','1h-10m')
            sig(bimg+'-ep-3','4800000','1h-20m')
            sig(bimg+'-ep-3','5400000','1h-30m')
            sig(bimg+'-ep-3','6000000','1h-40m')
            sig(bimg+'-ep-3','6600000','1h-50m')
            sig(bimg+'-ep-3','7200000','2h')
            sig(bimg+'-ep-3','7500000','2h-5m')
            sig(bimg+'-ep-3','7800000','2h-10m')
            sig(bimg+'-ep-3','8100000','2h-15m')
            sig(bimg+'-ep-3','8400000','2h-20m')
            sig(bimg+'-ep-3','8700000','2h-25m')
            sig(bimg+'-ep-3','9000000','2h-30m')
            sig(bimg+'-ep-3','9300000','2h-35m')
            sig(bimg+'-ep-3','9600000','2h-40m')


             
            }

            down.onclick=function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg+'-ep-3-download')
                xhttp.send();
                window.open(videolink[2], '_self') 
             
            }



        }
        e4.onclick=function (){
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");
            
    
            onli.innerText = 'Watch Online'
            down.innerText = 'Download('+size+')'
    
            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding ='50px'
            onli.style.marginBottom = '10px'
            
            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'

    
            document.body.append(onli,down)


            onli.onclick=function ()  {
            down.remove()
            onli.remove()

            var video = document.createElement("video");
            var source = document.createElement("source");
    
    
            video.setAttribute('controls', 'true')
            video.setAttribute('autoplay', 'true')
            video.setAttribute('id', 'viddd')
            video.setAttribute('controlsList', 'noplaybackrate nodownload ')
            video.setAttribute('oncontextmenu', 'return false;')
    
    
    
    
    
    
            source.setAttribute('id', 'srcc')
            
            video.width = w * .94
            video.style.marginTop = '20px'
    
            source.src = videolink[4]
    
            video.append(source)
            document.body.append(video)


            sig(bimg+'-ep-4','9000','9s')
            sig(bimg+'-ep-4','20000','20s')
            sig(bimg+'-ep-4','40000','40s')
            sig(bimg+'-ep-4','120000','2m')
            sig(bimg+'-ep-4','300000','5m')
            sig(bimg+'-ep-4','900000','15m')
            sig(bimg+'-ep-4','1200000','20m')
            sig(bimg+'-ep-4','1800000','30m')
            sig(bimg+'-ep-4','2400000','40m')
            sig(bimg+'-ep-4','3000000','50m')
            sig(bimg+'-ep-4','3600000','1h')
            sig(bimg+'-ep-4','4200000','1h-10m')
            sig(bimg+'-ep-4','4800000','1h-20m')
            sig(bimg+'-ep-4','5400000','1h-30m')
            sig(bimg+'-ep-4','6000000','1h-40m')
            sig(bimg+'-ep-4','6600000','1h-50m')
            sig(bimg+'-ep-4','7200000','2h')
            sig(bimg+'-ep-4','7500000','2h-5m')
            sig(bimg+'-ep-4','7800000','2h-10m')
            sig(bimg+'-ep-4','8100000','2h-15m')
            sig(bimg+'-ep-4','8400000','2h-20m')
            sig(bimg+'-ep-4','8700000','2h-25m')
            sig(bimg+'-ep-4','9000000','2h-30m')
            sig(bimg+'-ep-4','9300000','2h-35m')
            sig(bimg+'-ep-4','9600000','2h-40m')


             
            }

            down.onclick=function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg+'-ep-4-download')
                xhttp.send();
                window.open(videolink[4], '_self') 
             
            }



        }
        e5.onclick=function (){
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");
            
    
            onli.innerText = 'Watch Online'
            down.innerText = 'Download('+size+')'
    
            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding ='50px'
            onli.style.marginBottom = '10px'
            
            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'

    
            document.body.append(onli,down)


            onli.onclick=function ()  {
            down.remove()
            onli.remove()

            var video = document.createElement("video");
            var source = document.createElement("source");
    
    
            video.setAttribute('controls', 'true')
            video.setAttribute('autoplay', 'true')
            video.setAttribute('id', 'viddd')
            video.setAttribute('controlsList', 'noplaybackrate nodownload ')
            video.setAttribute('oncontextmenu', 'return false;')
    
    
    
    
    
    
            source.setAttribute('id', 'srcc')
            
            video.width = w * .94
            video.style.marginTop = '20px'
    
            source.src = videolink[4]
    
            video.append(source)
            document.body.append(video)


            sig(bimg+'-ep-5','9000','9s')
            sig(bimg+'-ep-5','20000','20s')
            sig(bimg+'-ep-5','40000','40s')
            sig(bimg+'-ep-5','120000','2m')
            sig(bimg+'-ep-5','300000','5m')
            sig(bimg+'-ep-5','900000','15m')
            sig(bimg+'-ep-5','1200000','20m')
            sig(bimg+'-ep-5','1800000','30m')
            sig(bimg+'-ep-5','2400000','40m')
            sig(bimg+'-ep-5','3000000','50m')
            sig(bimg+'-ep-5','3600000','1h')
            sig(bimg+'-ep-5','4200000','1h-10m')
            sig(bimg+'-ep-5','4800000','1h-20m')
            sig(bimg+'-ep-5','5400000','1h-30m')
            sig(bimg+'-ep-5','6000000','1h-40m')
            sig(bimg+'-ep-5','6600000','1h-50m')
            sig(bimg+'-ep-5','7200000','2h')
            sig(bimg+'-ep-5','7500000','2h-5m')
            sig(bimg+'-ep-5','7800000','2h-10m')
            sig(bimg+'-ep-5','8100000','2h-15m')
            sig(bimg+'-ep-5','8400000','2h-20m')
            sig(bimg+'-ep-5','8700000','2h-25m')
            sig(bimg+'-ep-5','9000000','2h-30m')
            sig(bimg+'-ep-5','9300000','2h-35m')
            sig(bimg+'-ep-5','9600000','2h-40m')
             
            }

            down.onclick=function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg+'-ep-5-download')
                xhttp.send();
                window.open(videolink[4], '_self') 
             
            }



        }
        e6.onclick=function (){
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");
            
    
            onli.innerText = 'Watch Online'
            down.innerText = 'Download('+size+')'
    
            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding ='50px'
            onli.style.marginBottom = '10px'
            
            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'

    
            document.body.append(onli,down)


            onli.onclick=function ()  {
            down.remove()
            onli.remove()

            var video = document.createElement("video");
            var source = document.createElement("source");
    
    
            video.setAttribute('controls', 'true')
            video.setAttribute('autoplay', 'true')
            video.setAttribute('id', 'viddd')
            video.setAttribute('controlsList', 'noplaybackrate nodownload ')
            video.setAttribute('oncontextmenu', 'return false;')
    
    
    
    
    
    
            source.setAttribute('id', 'srcc')
            
            video.width = w * .94
            video.style.marginTop = '20px'
    
            source.src = videolink[5]
    
            video.append(source)
            document.body.append(video)

            sig(bimg+'-ep-6','9000','9s')
            sig(bimg+'-ep-6','20000','20s')
            sig(bimg+'-ep-6','40000','40s')
            sig(bimg+'-ep-6','120000','2m')
            sig(bimg+'-ep-6','300000','5m')
            sig(bimg+'-ep-6','900000','15m')
            sig(bimg+'-ep-6','1200000','20m')
            sig(bimg+'-ep-6','1800000','30m')
            sig(bimg+'-ep-6','2400000','40m')
            sig(bimg+'-ep-6','3000000','50m')
            sig(bimg+'-ep-6','3600000','1h')
            sig(bimg+'-ep-6','4200000','1h-10m')
            sig(bimg+'-ep-6','4800000','1h-20m')
            sig(bimg+'-ep-6','5400000','1h-30m')
            sig(bimg+'-ep-6','6000000','1h-40m')
            sig(bimg+'-ep-6','6600000','1h-50m')
            sig(bimg+'-ep-6','7200000','2h')
            sig(bimg+'-ep-6','7500000','2h-5m')
            sig(bimg+'-ep-6','7800000','2h-10m')
            sig(bimg+'-ep-6','8100000','2h-15m')
            sig(bimg+'-ep-6','8400000','2h-20m')
            sig(bimg+'-ep-6','8700000','2h-25m')
            sig(bimg+'-ep-6','9000000','2h-30m')
            sig(bimg+'-ep-6','9300000','2h-35m')
            sig(bimg+'-ep-6','9600000','2h-40m')


             
            }

            down.onclick=function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg+'-ep-6-download')
                xhttp.send();
                window.open(videolink[5], '_self') 
             
            }



        }

        e7.onclick=function (){
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");
            
    
            onli.innerText = 'Watch Online'
            down.innerText = 'Download('+size+')'
    
            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding ='50px'
            onli.style.marginBottom = '10px'
            
            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'

    
            document.body.append(onli,down)


            onli.onclick=function ()  {
            down.remove()
            onli.remove()

            var video = document.createElement("video");
            var source = document.createElement("source");
    
    
            video.setAttribute('controls', 'true')
            video.setAttribute('autoplay', 'true')
            video.setAttribute('id', 'viddd')
            video.setAttribute('controlsList', 'noplaybackrate nodownload ')
            video.setAttribute('oncontextmenu', 'return false;')
    
    
    
    
    
    
            source.setAttribute('id', 'srcc')
            
            video.width = w * .94
            video.style.marginTop = '20px'
    
            source.src = videolink[6]
    
            video.append(source)
            document.body.append(video)


            sig(bimg+'-ep-7','9000','9s')
            sig(bimg+'-ep-7','20000','20s')
            sig(bimg+'-ep-7','40000','40s')
            sig(bimg+'-ep-7','120000','2m')
            sig(bimg+'-ep-7','300000','5m')
            sig(bimg+'-ep-7','900000','15m')
            sig(bimg+'-ep-7','1200000','20m')
            sig(bimg+'-ep-7','1800000','30m')
            sig(bimg+'-ep-7','2400000','40m')
            sig(bimg+'-ep-7','3000000','50m')
            sig(bimg+'-ep-7','3600000','1h')
            sig(bimg+'-ep-7','4200000','1h-10m')
            sig(bimg+'-ep-7','4800000','1h-20m')
            sig(bimg+'-ep-7','5400000','1h-30m')
            sig(bimg+'-ep-7','6000000','1h-40m')
            sig(bimg+'-ep-7','6600000','1h-50m')
            sig(bimg+'-ep-7','7200000','2h')
            sig(bimg+'-ep-7','7500000','2h-5m')
            sig(bimg+'-ep-7','7800000','2h-10m')
            sig(bimg+'-ep-7','8100000','2h-15m')
            sig(bimg+'-ep-7','8400000','2h-20m')
            sig(bimg+'-ep-7','8700000','2h-25m')
            sig(bimg+'-ep-7','9000000','2h-30m')
            sig(bimg+'-ep-7','9300000','2h-35m')
            sig(bimg+'-ep-7','9600000','2h-40m')


             
            }

            down.onclick=function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg+'-ep-7-download')
                xhttp.send();
                window.open(videolink[6], '_self') 
             
            }



        }
        e8.onclick=function (){
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");
            
    
            onli.innerText = 'Watch Online'
            down.innerText = 'Download('+size+')'
    
            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding ='50px'
            onli.style.marginBottom = '10px'
            
            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'

    
            document.body.append(onli,down)


            onli.onclick=function ()  {
            down.remove()
            onli.remove()

            var video = document.createElement("video");
            var source = document.createElement("source");
    
    
            video.setAttribute('controls', 'true')
            video.setAttribute('autoplay', 'true')
            video.setAttribute('id', 'viddd')
            video.setAttribute('controlsList', 'noplaybackrate nodownload ')
            video.setAttribute('oncontextmenu', 'return false;')
    
    
    
    
    
    
            source.setAttribute('id', 'srcc')
            
            video.width = w * .94
            video.style.marginTop = '20px'
    
            source.src = videolink[7]
    
            video.append(source)
            document.body.append(video)



            sig(bimg+'-ep-8','9000','9s')
            sig(bimg+'-ep-8','20000','20s')
            sig(bimg+'-ep-8','40000','40s')
            sig(bimg+'-ep-8','120000','2m')
            sig(bimg+'-ep-8','300000','5m')
            sig(bimg+'-ep-8','900000','15m')
            sig(bimg+'-ep-8','1200000','20m')
            sig(bimg+'-ep-8','1800000','30m')
            sig(bimg+'-ep-8','2400000','40m')
            sig(bimg+'-ep-8','3000000','50m')
            sig(bimg+'-ep-8','3600000','1h')
            sig(bimg+'-ep-8','4200000','1h-10m')
            sig(bimg+'-ep-8','4800000','1h-20m')
            sig(bimg+'-ep-8','5400000','1h-30m')
            sig(bimg+'-ep-8','6000000','1h-40m')
            sig(bimg+'-ep-8','6600000','1h-50m')
            sig(bimg+'-ep-8','7200000','2h')
            sig(bimg+'-ep-8','7500000','2h-5m')
            sig(bimg+'-ep-8','7800000','2h-10m')
            sig(bimg+'-ep-8','8100000','2h-15m')
            sig(bimg+'-ep-8','8400000','2h-20m')
            sig(bimg+'-ep-8','8700000','2h-25m')
            sig(bimg+'-ep-8','9000000','2h-30m')
            sig(bimg+'-ep-8','9300000','2h-35m')
            sig(bimg+'-ep-8','9600000','2h-40m')
             
            }

            down.onclick=function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg+'-ep-8-download')
                xhttp.send();
                window.open(videolink[7], '_self') 
             
            }



        }
        e9.onclick=function (){
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");
            
    
            onli.innerText = 'Watch Online'
            down.innerText = 'Download('+size+')'
    
            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding ='50px'
            onli.style.marginBottom = '10px'
            
            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'

    
            document.body.append(onli,down)


            onli.onclick=function ()  {
            down.remove()
            onli.remove()

            var video = document.createElement("video");
            var source = document.createElement("source");
    
    
            video.setAttribute('controls', 'true')
            video.setAttribute('autoplay', 'true')
            video.setAttribute('id', 'viddd')
            video.setAttribute('controlsList', 'noplaybackrate nodownload ')
            video.setAttribute('oncontextmenu', 'return false;')
    
    
    
    
    
    
            source.setAttribute('id', 'srcc')
            
            video.width = w * .94
            video.style.marginTop = '20px'
    
            source.src = videolink[8]
    
            video.append(source)
            document.body.append(video)


            sig(bimg+'-ep-9','9000','9s')
            sig(bimg+'-ep-9','20000','20s')
            sig(bimg+'-ep-9','40000','40s')
            sig(bimg+'-ep-9','120000','2m')
            sig(bimg+'-ep-9','300000','5m')
            sig(bimg+'-ep-9','900000','15m')
            sig(bimg+'-ep-9','1200000','20m')
            sig(bimg+'-ep-9','1800000','30m')
            sig(bimg+'-ep-9','2400000','40m')
            sig(bimg+'-ep-9','3000000','50m')
            sig(bimg+'-ep-9','3600000','1h')
            sig(bimg+'-ep-9','4200000','1h-10m')
            sig(bimg+'-ep-9','4800000','1h-20m')
            sig(bimg+'-ep-9','5400000','1h-30m')
            sig(bimg+'-ep-9','6000000','1h-40m')
            sig(bimg+'-ep-9','6600000','1h-50m')
            sig(bimg+'-ep-9','7200000','2h')
            sig(bimg+'-ep-9','7500000','2h-5m')
            sig(bimg+'-ep-9','7800000','2h-10m')
            sig(bimg+'-ep-9','8100000','2h-15m')
            sig(bimg+'-ep-9','8400000','2h-20m')
            sig(bimg+'-ep-9','8700000','2h-25m')
            sig(bimg+'-ep-9','9000000','2h-30m')
            sig(bimg+'-ep-9','9300000','2h-35m')
            sig(bimg+'-ep-9','9600000','2h-40m')


             
            }


            down.onclick=function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg+'-ep-9-download')
                xhttp.send();
                window.open(videolink[8], '_self') 
             
            }



        }
        e10.onclick=function (){
            e1.remove()
            e2.remove()
            e3.remove()
            e4.remove()
            e5.remove()
            e6.remove()
            e7.remove()
            e8.remove()
            e9.remove()
            e10.remove()


            var onli = document.createElement("button");
            var down = document.createElement("button");
            
    
            onli.innerText = 'Watch Online'
            down.innerText = 'Download('+size+')'
    
            onli.style.display = 'block'
            onli.style.width = '100%'
            onli.style.padding ='50px'
            onli.style.marginBottom = '10px'
            
            down.style.display = 'block'
            down.style.width = '100%'
            down.style.padding = '15px'
            down.style.marginBottom = '10px'

    
            document.body.append(onli,down)


            onli.onclick=function ()  {
            down.remove()
            onli.remove()

            var video = document.createElement("video");
            var source = document.createElement("source");
    
    
            video.setAttribute('controls', 'true')
            video.setAttribute('autoplay', 'true')
            video.setAttribute('id', 'viddd')
            video.setAttribute('controlsList', 'noplaybackrate nodownload ')
            video.setAttribute('oncontextmenu', 'return false;')
    
    
    
    
    
    
            source.setAttribute('id', 'srcc')
            
            video.width = w * .94
            video.style.marginTop = '20px'
    
            source.src = videolink[9]
    
            video.append(source)
            document.body.append(video)



            sig(bimg+'-ep-10','9000','9s')
            sig(bimg+'-ep-10','20000','20s')
            sig(bimg+'-ep-10','40000','40s')
            sig(bimg+'-ep-10','120000','2m')
            sig(bimg+'-ep-10','300000','5m')
            sig(bimg+'-ep-10','900000','15m')
            sig(bimg+'-ep-10','1200000','20m')
            sig(bimg+'-ep-10','1800000','30m')
            sig(bimg+'-ep-10','2400000','40m')
            sig(bimg+'-ep-10','3000000','50m')
            sig(bimg+'-ep-10','3600000','1h')
            sig(bimg+'-ep-10','4200000','1h-10m')
            sig(bimg+'-ep-10','4800000','1h-20m')
            sig(bimg+'-ep-10','5400000','1h-30m')
            sig(bimg+'-ep-10','6000000','1h-40m')
            sig(bimg+'-ep-10','6600000','1h-50m')
            sig(bimg+'-ep-10','7200000','2h')
            sig(bimg+'-ep-10','7500000','2h-5m')
            sig(bimg+'-ep-10','7800000','2h-10m')
            sig(bimg+'-ep-10','8100000','2h-15m')
            sig(bimg+'-ep-10','8400000','2h-20m')
            sig(bimg+'-ep-10','8700000','2h-25m')
            sig(bimg+'-ep-10','9000000','2h-30m')
            sig(bimg+'-ep-10','9300000','2h-35m')
            sig(bimg+'-ep-10','9600000','2h-40m')
             
            }


            down.onclick=function () {

                var xhttp = new XMLHttpRequest();
                xhttp.open("POST", 'https://nodebd.vercel.app/', true);
                xhttp.setRequestHeader('reqs', bimg+'-ep-10-download')
                xhttp.send();
                window.open(videolink[9], '_self') 
             
            }



        }







   }





}


setTimeout(() => {

    // imgdiv(name,img,q7,size,midcredit,pc)

    // imgdiv('Chhichhore (2019) [1.4GB] & 720','chi',{q720p:'',q1080p:''},{size720:'',size1080:''})

        seris('Inside Job {Season 1} (2021) 1080p [300MB]','inside',['https://share.bdff.workers.dev/0:/OTHERS/Inside-job/Inside-Job-S01-E01.mp4','https://share.bdff.workers.dev/0:/OTHERS/Inside-job/Inside-Job-S01-E02.mp4','https://share.bdff.workers.dev/0:/OTHERS/Inside-job/Inside-Job-S01-E03.mp4','https://share.bdff.workers.dev/0:/OTHERS/Inside-job/Inside-Job-S01-E04.mp4','https://share.bdff.workers.dev/0:/OTHERS/Inside-job/Inside-Job-S01-E05.mp4','https://share.bdff.workers.dev/0:/OTHERS/Inside-job/Inside-Job-S01-E06.mp4','https://share.bdff.workers.dev/0:/OTHERS/Inside-job/Inside-Job-S01-E07.mp4','https://share.bdff.workers.dev/0:/OTHERS/Inside-job/Inside-Job-S01-E08.mp4','https://share.bdff.workers.dev/0:/OTHERS/Inside-job/Inside-Job-S01-E09.mp4','https://share.bdff.workers.dev/0:/OTHERS/Inside-job/Inside-Job-S01-E10.mp4'],'300MB')


        imgdiv('Minions (2015)   1080p [800MB]','minions',{q1080p:'https://share.bdff.workers.dev/0:/OTHERS/Minions.mp4'},{size1080:'800MB'})


        imgdiv('Extraction (2020) 1080p [1.1GB]','dhaka',{q1080p:'https://share.bdff.workers.dev/0:/OTHERS/Extraction.mp4'},{size1080:'1.1GB'})


        seris('Rick and Morty {Season 1} 1080p [185MB]','civil',['https://share.bdff.workers.dev/0:/OTHERS/Rick/S1/Rick.and.Morty-save-summer-e1-2-6.mp4','https://share.bdff.workers.dev/0:/OTHERS/Rick/S1/Rick.and.Morty-pickle-e2-3-3.mp4','https://share.bdff.workers.dev/0:/OTHERS/Rick/S1/Rick.and.Morty-love-spray-e3-1-6.mp4'],'185MB')

        // imgdiv('Chhichhore (2019) 720p [520MB] || 1080p [1.4GB]','chi',{q720p:'https://share.bdff.workers.dev/0:/OTHERS/Chhichore.480p.mp4',q1080p:'https://share.bdff.workers.dev/0:/OTHERS/Chhichore.720p.mp4'},{size720:'520MB',size1080:'1.4GB'})

    // imgdiv('Chhichhore (2019) [1.4GB]','chi','https://share.bdff.workers.dev/0:/OTHERS/Chhichore.720p.mp4','1.4GB')


    // imgdiv('The Little Rascals (1994) [750MB]','little','https://share.bdff.workers.dev/0:/OTHERS/The.Little.Rascals.1994.mp4','750MB')


        // imgdiv('The Little Rascals (1994) 1080p [750MB]','little',{q1080p:'https://share.bdff.workers.dev/0:/OTHERS/The.Little.Rascals.1994.mp4'},{size1080:'750MB'})

    // imgdiv('K.G.F: Chapter 2   [1.6GB]','kgf2','https://share.bdff.workers.dev/0:/OTHERS/kgf2.mp4','1.6GB')


    // imgdiv('John Wick [1.7GB]', 'john1', 'https://abcd.bdff.workers.dev/0:/John.Wick.1-mp3.mp4', '1.7GB')

    // imgdiv('John Wick 2     [1.6GB]', 'john2', 'https://abcd.bdff.workers.dev/0:/John.Wick-2-mp3.mp4', '1.6GB')

        imgdiv('John Wick 2 || 1080p [1.6GB]','john2',{q1080p:'https://abcd.bdff.workers.dev/0:/John.Wick-2-mp3.mp4'},{size1080:'1.6GB'})



        imgdiv('Dream Girl (2019) || 720p [400MB] ||1080p [1.2GB]','dream',{q720p:'https://share.bdff.workers.dev/0:/OTHERS/Dream-Girl-480.mp4',q1080p:'https://share.bdff.workers.dev/0:/OTHERS/Dream-Girl.mp4'},{size720:'350MB',size1080:'1.2GB'})


        imgdiv('De De Pyaar De (2019)|| 1080p [1.2GB]','de-de',{q1080p:'https://share.bdff.workers.dev/0:/OTHERS/De-De-Pyaar-De.mp4'},{size1080:'1.2GB'})

        imgdiv('Love Aaj Kal (2020)|| 1080p [1.3GB]','love-aaj-kal',{q1080p:'https://share.bdff.workers.dev/0:/OTHERS/Love-Aaj-Kal.mp4'},{size1080:'1.3GB'})


        imgdiv('Sonu Ke Titu Ki Sweety (2018)|| 1080p [1.2GB]','sonu',{q1080p:'https://share.bdff.workers.dev/0:/OTHERS/Sonu.Ke.Titu.Ki.Sweety.mp4'},{size1080:'1.2GB'})






    // imgdiv('365  [1.3GB]','365','https://share.bdff.workers.dev/0:/Subtittle/365.mp4','1.3GB')

    // imgdiv('Ra.One [1.5GB]','rone','https://share.bdff.workers.dev/0:/OTHERS/ra-one.mp4','1.5GB')

    // imgdiv('Chandni Chowk to China [1.5GB]','chandnichowk','https://share.bdff.workers.dev/0:/OTHERS/chandnichowk.mp4','1.5GB')

    // imgdiv('Rab Ne Bana Di Jodi [1.5GB]','Rab.Ne.Bana.Di.Jodi','https://share.bdff.workers.dev/0:/OTHERS/Rab.Ne.Bana.Di.Jodi.mp4','1.5GB')


    // imgdiv('Attack: Part 1 (2022) [985MB]','attack','https://share.bdff.workers.dev/0:/OTHERS/Attack-Part-1.mp4','985MB')



    // imgdiv('Pushpa: The Rise[1.63GB]','pushpa','https://share.bdff.workers.dev/0:/OTHERS/pushpa.mp4','1.63GB')



   





}, 1);



function sig(bimg,sett,tim){

    var video=document.getElementById('viddd') 
   return setTimeout(() => {


           var xhttp = new XMLHttpRequest();
           xhttp.open("POST", 'https://nodebd.vercel.app/', true);
           xhttp.setRequestHeader('reqs',bimg+'--'+tim+'--state('+video.readyState+')--'+Math.trunc(video.currentTime / 60 / 60)+':'+Math.trunc((video.currentTime / 60) % 60)+':'+Math.trunc(video.currentTime % 60)+'-')
           xhttp.send();
   
       }, sett);
   
}

