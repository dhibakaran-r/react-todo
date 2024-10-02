import React, { useState, useEffect } from "react";

const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = daysOfWeek[currentTime.getDay()];
  const month = months[currentTime.getMonth()];
  const date = currentTime.getDate();
  const year = currentTime.getFullYear();

  const getGreeting = () => {
    const hours = currentTime.getHours();
    let greeting;

    if (hours >= 5 && hours < 12) {
      greeting = "Good Morning";
    } else if (hours >= 12 && hours < 17) {
      greeting = "Good Afternoon";
    } else if (hours >= 17 && hours < 20) {
      greeting = "Good Evening";
    } else {
      greeting = "Good Night";
    }

    return greeting;
  };
  return (
    <>
      <h2 className="greeting">Hello, {getGreeting()}!</h2>
      <h4 className="days">
        {day}, {month} {date}, {year}
      </h4>
      <h1 className="time">{formattedTime}</h1>
    </>
  );
};

export default Time;
