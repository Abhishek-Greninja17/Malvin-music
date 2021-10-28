let songIndex=0;
let audioElement = new Audio('assets/songs/1.mp3')

let masterPlay = document.getElementById('masterplay');
let ProgressBar = document.getElementById('ProgressBar');
let gif = document.getElementById('gif');
let container = document.getElementById('container');
let container2 = document.getElementById('container2');
let songs = [
    {songIndex: 1, songName: "Tujhe Bhula Diya - Mohit Chauhan, Shekhar Ravjiani, Shruti Pathak ", filePath: "assets/songs/1.mp3", coverPath: "assets/covers/aries.jpg"},
    {songIndex: 2, songName: "Tera Hone Laga Hoon - Alisha Chinai, Atif Aslam, Joi Barua ", filePath: "assets/songs/2.mp3", coverPath: "assets/covers/tauros.jpg"},
    {songIndex: 3, songName: "I am in Love - Dominique Cerejo, KK, Pritam Chakraborty ", filePath: "assets/songs/3.mp3", coverPath: "assets/covers/twin.jpg"},
    {songIndex: 4, songName: "Main Pareshaan - Shalmali Kholgade ", filePath: "assets/songs/4.mp3", coverPath: "assets/covers/cancer.jpg"},
    {songIndex: 5, songName: "Tujhko Jo Paya -  Mohit Chauhan ", filePath: "assets/songs/5.mp3", coverPath: "assets/covers/leo.jpg"},
    {songIndex: 6, songName: "Mann Mera - Gajendra Verma ", filePath: "assets/songs/6.mp3", coverPath: "assets/covers/virgo.jpg"},
    {songIndex: 7, songName: "Hasi Bann Gaye - Ami Mishra ", filePath: "assets/songs/7.mp3", coverPath: "assets/covers/scale.jpg"},
    {songIndex: 8, songName: "Mera Mann Kehne Laga - Falak Shabir ", filePath: "assets/songs/8.mp3", coverPath: "assets/covers/scorpio.jpg"},
    {songIndex: 9, songName: "Hum Kis Galli Ja Rahe Hain - Atif Aslam ", filePath: "assets/songs/9.mp3", coverPath: "assets/covers/bow.jpg"},
    {songIndex: 10, songName: "Meherbaan - Shekhar Ravjiani, Ash King, Shilpa Rao ", filePath: "assets/songs/10.mp3", coverPath: "assets/covers/capri.jpg"},
    {songIndex: 11, songName: "Mere Haath Mai -  Sonu Nigam ", filePath: "assets/songs/11.mp3", coverPath: "assets/covers/aqua.jpg"},
    {songIndex: 12, songName: "Mere Mehboob Qayamat - Yo Yo Honey Singh", filePath: "assets/songs/12.mp3", coverPath: "assets/covers/ying.jpg"},
]
function playbutton(){
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.src = "/assets/music/pause.png";
        gif.style.opacity= 1;
    }
    else{
        audioElement.pause();
        masterPlay.src = "/assets/music/play.png";
        gif.style.opacity=0;
    }
}
function rewind(){
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    if(progress>=5){
        progress=progress-5;
        ProgressBar.value = progress;
    }
    else{
        ProgressBar.value = 0;
    }
    audioElement.currentTime= ProgressBar.value * audioElement.duration/100;
}
function forward(){
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    if(progress<=95){
        progress=progress+5;
        ProgressBar.value = progress;
    }
    else{
        ProgressBar.value = 100;
    }
    audioElement.currentTime= ProgressBar.value * audioElement.duration/100;
}
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    ProgressBar.value = progress;
})
ProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime= ProgressBar.value * audioElement.duration/100;
})
function opt(a){
    if(a==1){
        container.style.opacity=1;
        container2.style.opacity=0;
        container2.style.top="45%";
    }
    else{
        container2.style.opacity=1;
        container2.style.top="15%";
    }
}
