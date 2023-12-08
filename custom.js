
document.body.addEventListener("keydown", function(event) {
    event.preventDefault()
  console.log(event.key)
  if (event.key === "f") {
    if (!document.fullscreenElement){
      document.getElementsByTagName('video')[0].requestFullscreen() }else if(document.exitFullscreen) {
    document.exitFullscreen();
       }
  }else   if (event.key === "ArrowUp") {
    let myVideo  =document.getElementsByTagName('video')[0]

    document.getElementsByTagName('video')[0].volume = Math.min(1, myVideo.volume + 0.10);
  }else   if (event.key === "ArrowDown") {
    let myVideo  =document.getElementsByTagName('video')[0]
  
document.getElementsByTagName('video')[0].volume = Math.min(1, myVideo.volume - 0.10);
  }else   if (event.key === "ArrowLeft") {
    
    document.getElementsByTagName('video')[0].currentTime =currentTime- 10;
  }else   if (event.key === "ArrowRight") {
    document.getElementsByTagName('video')[0].currentTime += 10;
}else   if (event.key === " ") {
    if(document.getElementsByTagName('video')[0].paused){
        document.getElementsByTagName('video')[0].play()
    }else{
        document.getElementsByTagName('video')[0].pause()

    }
    
}
});
