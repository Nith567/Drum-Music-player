const kit=["crash","kick","snare","tom"]


const container=document.querySelector(".container");
kit.forEach(kit=>{
    const Btn=document.createElement("button");
    container.appendChild(Btn);
Btn.classList.add("btn");
Btn.innerText=kit;
Btn.style.
backgroundImage="url("+kit+".png)";
const audioEle=document.createElement("audio");
audioEle.src=kit+".mp3"
container.appendChild(audioEle);

Btn.addEventListener("click",()=>{
    audioEle.play();
})


window.addEventListener("keydown",(event)=>{
if(event.key===kit.slice(0,1)){
audioEle.play();
Btn.style.transform="scale(.9)"
setTimeout(() => {
    Btn.style.transform="scale(1)";
}, 100);
}
})
});