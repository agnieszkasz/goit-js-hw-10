import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as m,i as f}from"./assets/vendor-BbSUbo7J.js";const a=document.querySelector("button[data-start]"),h=document.querySelector("#datetime-picker"),n={days:document.querySelector("span[data-days]"),hours:document.querySelector("span[data-hours]"),minutes:document.querySelector("span[data-minutes]"),seconds:document.querySelector("span[data-seconds]")};a.disabled=!0;let r=Date.now(),s=0,c=0;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){Date.parse(t[0])<r?(f.error({message:"Please choose a date in the future"}),a.disabled=!0):(c=Date.parse(t[0]),a.disabled=!1)}};m(h,y);a.addEventListener("click",p);function p(){const t=setInterval(()=>{if(r=Date.now(),s=c-r,s>0){const e=S(s);n.days.textContent=e.days,n.hours.textContent=e.hours,n.minutes.textContent=e.minutes,n.seconds.textContent=e.seconds}else clearInterval(t)},1e3)}function S(t){const u=o(Math.floor(t/864e5)),d=o(Math.floor(t%864e5/36e5)),i=o(Math.floor(t%864e5%36e5/6e4)),l=o(Math.floor(t%864e5%36e5%6e4/1e3));return{days:u,hours:d,minutes:i,seconds:l}}function o(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=timer.js.map
