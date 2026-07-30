const tickContainer = document.querySelector(".ticks");

for(let i=0;i<12;i++){

const tick=document.createElement("span");

tick.style.transform=`translate(-50%,-50%) rotate(${i*30}deg)`;

tickContainer.appendChild(tick);

}

const hour=document.querySelector(".hour");
const minute=document.querySelector(".minute");
const second=document.querySelector(".second");

const digital=document.getElementById("digital");
const day=document.getElementById("day");

function update(){

const now=new Date();

const timezone=Intl.DateTimeFormat().resolvedOptions().timeZone;

const local=new Date(
now.toLocaleString("en-US",{timeZone:timezone})
);

const h=local.getHours();
const m=local.getMinutes();
const s=local.getSeconds();

const hourDeg=(h%12)*30+m*0.5;

const minuteDeg=m*6+s*0.1;

const secondDeg=s*6;

hour.style.transform=`rotate(${hourDeg}deg)`;

minute.style.transform=`rotate(${minuteDeg}deg)`;

second.style.transform=`rotate(${secondDeg}deg)`;

digital.textContent=local.toLocaleTimeString([],{
hour:"numeric",
minute:"2-digit",
second:"2-digit"
});

day.textContent=local.toLocaleDateString([],{
weekday:"long"
});

}

update();

setInterval(update,1000);
