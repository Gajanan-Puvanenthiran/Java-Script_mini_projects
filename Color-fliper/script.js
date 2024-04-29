const btn=document.getElementById("btn");
const color=document.getElementById("color");
const wrap=document.getElementById("wrap");
const hexavalues=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

btn.addEventListener("click",event=>{
    let hexColor='#';
    for(let i=0;i<6;i++){
        hexColor+=randomHexaValue();
    }
    wrap.style.backgroundColor=hexColor;
    color.textContent=hexColor;
});

function randomHexaValue(){
    let randomIndex=hexavalues[Math.floor(Math.random()*16)];
    return randomIndex;
}
