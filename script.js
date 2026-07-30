const ticks=document.getElementById("ticks");

for(let i=0;i<12;i++){

const angle=i*30*Math.PI/180;

const x1=150+Math.sin(angle)*104;
const y1=150-Math.cos(angle)*104;

const x2=150+Math.sin(angle)*118;
const y2=150-Math.cos(angle)*118;

const line=document.createElementNS("http://www.w3.org/2000/svg","line");

line.setAttribute("x1",x1);
line.setAttribute("y1",y1);
line.setAttribute("x2",x2);
line.setAttribute("y2",y2);

line.setAttribute("class","tick");

ticks.appendChild(line);

}

const hour=document.getElementById("hour");
const minute=document.getElementById("minute");
const second=document.getElementById("second");

function update(){

const now=new Date();

const h=now.getHours()%12;
const m=now.getMinutes();
const s=now.getSeconds();

hour.setAttribute(
"transform",
`rotate(${h*30+m*0.5} 150 150)`
);

minute.setAttribute(
"transform",
`rotate(${m*6+s*0.1} 150 150)`
);

second.setAttribute(
"transform",
`rotate(${s*6} 150 150)`
);

digital.textContent=now.toLocaleTimeString([],{
hour:"2-digit",
minute:"2-digit",
second:"2-digit"
});

day.textContent=now.toLocaleDateString([],{
weekday:"long"
});

}

update();

setInterval(update,1000);
