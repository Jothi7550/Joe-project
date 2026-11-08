// BACKGROUND
let bgs = [
  "linear-gradient(135deg, #ff9a9e, #a18cd1, #84fab0)",
  "linear-gradient(135deg, #ff0000, #ff9900)",
  "linear-gradient(135deg, #00ffcc, #0066ff)",
  "linear-gradient(135deg, #ff00ff, #6600ff)",
  "linear-gradient(135deg, #667eea, #764ba2)"
];
let bgIndex = 0;
function changeBg(){
  bgIndex = (bgIndex+1) % bgs.length;
  document.body.style.background = bgs[bgIndex];
}

// SAVE NAME
function saveName(){
  let n = document.getElementById("myName").value;
  if(n=="") return;
  localStorage.setItem("myName", n);
  document.getElementById("welcome").innerText = "Hello " + n + "! 👋 You are on another level! 🔥";
  alert("Saved " + n + "!");
  celebrate();
}
let savedName = localStorage.getItem("myName");
if(savedName) document.getElementById("welcome").innerText = "Hello " + savedName + "! 👋 You are on another level! 🔥";

// MUSIC
let musicOn = false;
let myAudio;
function playMusic(){
  if(!musicOn){
    myAudio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
    myAudio.loop = true;
    myAudio.play();
    musicOn = true;
    alert("🎵 Music On!");
  } else {
    myAudio.pause();
    musicOn = false;
    alert("Music Off!");
  }
}

// CONFETTI
function celebrate(){
  confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });
  setTimeout(()=>{
    confetti({ particleCount: 100, angle: 60, spread: 60, origin: { x: 0 } });
    confetti({ particleCount: 100, angle: 120, spread: 60, origin: { x: 1 } });
  }, 300);
}