import React, { useEffect, useState } from "react";

const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {

  // calculate time left
  
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const Countdown = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <div className="text-center my-20">
        <h1 className="text-center   my-20 text-3xl">Wait For Our <span className="text-green-600">New Features</span></h1>
        <div className="divider"></div>
        <div className="grid lg:grid-flow-col gap-5 text-center  p-12 rounded justify-center  auto-cols-max">
          <div className="flex flex-col p-2 bg-gradient-to-r from-green-200 to-green-100 rounded-box text-black">
            <span className="countdown  font-mono text-5xl">
            Days: {days}
            </span>
          </div>
          <div className="flex flex-col p-2 bg-gradient-to-r from-green-200 to-green-100 rounded-box text-black">
            <span className="countdown font-mono text-5xl">
            Hours: {hours}
            </span>
          </div>
          <div className="flex flex-col p-2 bg-gradient-to-r from-green-200 to-green-100 rounded-box text-black">
            <span className="countdown font-mono text-5xl">
             Min: {minutes}
            </span>
          </div>
          <div className="flex flex-col p-2 bg-gradient-to-r from-green-200 to-green-100 rounded-box text-black">
            <span className="countdown font-mono text-5xl">
            Sec: {seconds} 
            </span>
          </div>
        </div>
        <div className="divider"></div>
      </div>
    );
  }
};

export default Countdown;