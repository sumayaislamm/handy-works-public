import React from "react";

const CountDown = () => {

  const days =  document.querySelectorAll("days");
  const hours= document.querySelectorAll("hours");
  const minutes = document.querySelectorAll("minutes");
  const seconds = document.querySelectorAll("seconds");
 
  const currentYear = new Date().getFullYear();
  const newYearTime = new Date(`February 04 ${currentYear + 1} 00:00:00`).getTime(); 

 function updateCountdown() {

  const currentTime = new Date ();
  const diff = newYearTime - currentTime;

 
 const d = Math.floor(diff / 1000 / 60 / 60 / 24);
//  console.log(days);
 const h = Math.floor(diff / 1000 / 60 / 60) % 24 ;
//  console.log(hours);
 const m = Math.floor (diff / 1000 / 60 ) % 60;
//  console.log(minutes);
 const s = Math.floor (diff / 1000) % 60;
//  console.log(seconds);

 days.innerHTML = d;
 hours.innerHTML = h < 10 ? '0' + h : h;
 minutes.innerHTML = m < 10 ? '0' + m : m;
 seconds.innerHTML = s < 10 ? '0' + s : s;
}
setInterval(updateCountdown, 1000);

 
 return (
    <div className="text-center mx-10">
      <h1 className="text-center text-accent  my-20 text-5xl font-bold">Wait For Our New Features</h1>
      <div className="grid grid-flow-col  gap-5">
        <div id="days" className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl m-5 ">
            <span></span> 
              : Days
          </span>
       {days}
        </div>
        <div id="hours" className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl m-5">
            <span></span>
            : Hours
          </span>
 
        </div>
        <div id="min" className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl m-5">
            <span ></span>
            : Min
          </span>
          
        </div>
        <div id="sec" className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl m-5">
            <span></span>
            : Sec
          </span>
        </div>
      </div>
      <div>
      <input type="text" placeholder="Reveal your opinion" className="input input-bordered m-10 text-center input-info w-full max-w-xs" />
      </div>
      <button className="btn btn-outline btn-accent">Yeah!</button>
    </div>
  );
};

export default CountDown;
