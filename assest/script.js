console.log("welcome to Sangeet");
//initialise the variable
let songIndex= 0;
let audioElement=new Audio('assest/song1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar=document.getElementById('myprogressbar');
let songItems=document.getElementsByClassName('song');
let mastersongname = document.getElementById('mastersongname');
let mastersongname1 = document.getElementById('mastersongname1');
let mastersinger=document.getElementById("mastersinger");
let masterimg=document.getElementById("masterimg");
let masterimg1=document.getElementById("masterimg1");

let song=[
    {songName:"Dil Chahte Ho",filePath:"assest/song1.mp3",coverPath:"assest/s1.webp",singerName:" Jubin Nautiyal -dil chahte ho"},
    {songName:"Senorita",filePath:"assest/song2.mp3",coverPath:"assest/s2.webp",singerName:"Shawn Mendes-senorita"},
    {songName:"Rim Jhim",filePath:"assest/song3.mp3",coverPath:"assest/s3.webp",singerName:" Jubin Nautiyal -rhim jhim"},
    {songName:"Chogada",filePath:"assest/song4.mp3",coverPath:"assest/s4.webp",singerName:"Asees Kaur-chogada"},
    {songName:"Dholida",filePath:"assest/song5.mp3",coverPath:"assest/s5.webp",singerName:"Aditi Paul-dholida"},
    {songName:"Shape Of You",filePath:"assest/song6.mp3",coverPath:"assest/s6.webp",singerName:"Ed Sheeran-shape of you"},
    {songName:"Jalebi Baby",filePath:"assest/song7.mp3",coverPath:"assest/s7.webp",singerName:"Tesher-jalebi baby"},
    {songName:"Kesariya",filePath:"assest/song8.mp3",coverPath:"assest/s8.webp",singerName:"ArijitSingh-kesariya "},
    
]

console.log(songItems);
Array.from(songItems).forEach((Element,i)=>{
   Element.getElementsByTagName('img')[0].src=song[i].coverPath;
   Element.getElementsByClassName('currentsong')[0].innerText=song[i].songName;
   Element.getElementsByClassName('singerName')[0].innerText=song[i].singerName;
})

masterPlay.addEventListener('click',()=>{
  if(audioElement.paused||audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');    
    masterPlay.classList.add('fa-pause-circle'); 
    
   let e = songIndex;
      e=e+1;
      console.log(e);
    
      let s = document.getElementById(`${e}`);
      console.log(s);
      makeAllplays(); 
      
    s.classList.remove('fa-play-circle');    
    s.classList.add('fa-pause-circle');
    
  }
  else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');    
    let e = songIndex;
    e=e+1;
    console.log(e);
  
    let s = document.getElementById(`${e}`);
    console.log(s);
 
    
  s.classList.remove('fa-pause-circle');    
  s.classList.add('fa-play-circle');
  
  }
})
audioElement.addEventListener("timeupdate",()=>{
    console.log("timeupdate");
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime= myprogressbar.value*audioElement.duration/100;
})
const makeAllplays = ()=>{
  Array.from(document.getElementsByClassName('play')).forEach((Element)=>{
   Element.classList.remove('fa-pause-circle');
    Element.classList.add('fa-play-circle');  
  })
}
Array.from(document.getElementsByClassName('play')).forEach((Element)=>{
Element.addEventListener('click',(e)=>{
  console.log(e.target);
  songIndex=parseInt(e.target.id);
  audioElement.src=`assest/song${songIndex}.mp3`;
  audioElement.currentTime=0;
  
  audioElement.play();
  makeAllplays(); 
  mastersongname.innerText=song[songIndex-1].songName;
  mastersongname1.innerText=song[songIndex-1].songName;
  mastersinger.innerText=song[songIndex-1].singerName;
  masterimg.src=song[songIndex-1].coverPath;
  masterimg1.src=song[songIndex-1].coverPath;
  masterPlay.classList.remove('fa-play-circle');    
  masterPlay.classList.add('fa-pause-circle'); 
  e.target.classList.remove('fa-play-circle');    
 e.target.classList.add('fa-pause-circle');
  
})
})

document.getElementById("previous").addEventListener('click',()=>{
  if(songIndex<=0){
    songIndex=0;
  }
  else{
    songIndex-=1;
  }
    audioElement.src=`assest/song${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    mastersongname.innerText=song[songIndex].songName;
    mastersongname1.innerText=song[songIndex].songName;
    mastersinger.innerText=song[songIndex].singerName;
    masterimg.src=song[songIndex].coverPath;
    masterimg1.src=song[songIndex].coverPath;
    masterPlay.classList.remove('fa-play-circle');    
    masterPlay.classList.add('fa-pause-circle');    
    let e = songIndex;
    e=e+1;
    console.log(e);
  
    let s = document.getElementById(`${e}`);
    console.log(s);
    makeAllplays(); 
    
  s.classList.remove('fa-play-circle');    
  s.classList.add('fa-pause-circle');
  
})
document.getElementById("next").addEventListener('click',()=>{
  if(songIndex>7){
    songIndex=0;
  }
  else{
    songIndex+=1;
  }
 
  audioElement.src = `assest/song${songIndex+1}.mp3`;
  audioElement.currentTime=0;
  audioElement.play();
  mastersongname.innerText=song[songIndex].songName;
  mastersongname1.innerText=song[songIndex].songName;
  mastersinger.innerText=song[songIndex].singerName;
  masterimg.src=song[songIndex].coverPath;
  masterimg1.src=song[songIndex].coverPath;
  masterPlay.classList.remove('fa-play-circle');    
  masterPlay.classList.add('fa-pause-circle');  
  let e = songIndex;
  e=e+1;
  console.log(e);

  let s = document.getElementById(`${e}`);
  console.log(s);
  makeAllplays(); 
  
s.classList.remove('fa-play-circle');    
s.classList.add('fa-pause-circle');
  
})