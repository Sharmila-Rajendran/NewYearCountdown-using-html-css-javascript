const days=document.getElementById('days');
const hours=document.getElementById('hours');
const minutes=document.getElementById('minutes');
const seconds=document.getElementById('seconds');
const CurrentYear=new Date().getFullYear();
const NewYear=new Date(`January 1 ${CurrentYear+1} 00:00:00`);
function Time(){
    const CurrDate=new Date();
    const diff=NewYear-CurrDate;
    const day=Math.floor(diff/1000/60/60/24);
    const hr=Math.floor((diff/1000/60/60)%24);
    const min=Math.floor((diff/1000/60)%60);
    const sec=Math.floor((diff/1000)%60);
    const ms=Math.floor(diff%1000);
  
    days.innerHTML=day<10?"0"+day:day;
    hours.innerHTML=hr<10?"0"+hr:hr;
    minutes.innerHTML=min<10?"0"+min:min;
    seconds.innerHTML=sec<10?"0"+sec:sec;
}
Time();
setInterval(Time,1000);
