// Digital clock

function updateClock(){
    const now=new Date();
    let hours=now.getHours().toString().padStart(2,0);
    const meridiem= hours >=12 ? "PM" : "AM";
    hours=hours % 12 || 12 ;
    const minutes=now.getMinutes().toString().padStart(2,0);
    const seconds=now.getSeconds().toString().padStart(2,0);

    const timing=document.getElementById("clock");
    timing.textContent=`${hours}:${minutes}:${seconds} ${meridiem}`;
}
updateClock();
setInterval(updateClock,1000);