// let video = document.getElementById('vedio')
    
// let start = document.getElementById('play')
//     start.addEventListener('click' ,play)
// let end = document.getElementById('pause')
// end.addEventListener('click' ,pause)

// start.classList.add('play')


// function play(){
//     console.log("jis");
//     video.play()
//     start.classList.add('play')
//     end.classList.remove('pause')
// }

// function pause(){
//     video.pause()
//     start.classList.remove('play')
//     end.classList.add('pause')
// }

//............................Another method..........

let video = document.getElementById('vedio');
let para_change=document.getElementById("para");
let btn=document.getElementById("btn");
btn.addEventListener("click",my_Fun);
video.playbackRate=10;

// let valid=true;
function my_Fun(){
console.log("hi");
    if(video.playbackRate>0){
       
    // video.pause();
    // valid=false;
    video.playbackRate=0;
    para_change.classList.add("move")
    }
else{
    // video.play();
    video.playbackRate=10;
    // valid=true;
    para_change.classList.remove("move");
}

}



