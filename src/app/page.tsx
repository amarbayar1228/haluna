"use client"; // Ensures this is a client-side component
import { useState, useRef, useEffect } from "react";
import { FloatButton } from "antd";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Image from "next/image";
interface CountdownTimerProps {
  targetDate: any; // Target date could be a Date object, a string, or a number (timestamp)
}
export default function Home() {

    const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

    useEffect(() => {
      // Function to update time left
      const updateTime = () => {
        const now: any = new Date();
        const target: any = new Date("2024-11-13:20:00:00");

        const difference = target - now;

        if (difference <= 0) {
          // Countdown reached 0, stop updating
          clearInterval(interval);
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      };

      // Update the timer immediately and then every second
      updateTime(); // Initial call to set the state
      const interval = setInterval(updateTime, 1000);

      // Clean up interval on component unmount
      return () => clearInterval(interval);
    }, [timeLeft]);
 

  const targetDate = '2024-11-13:20:00:00'; // Ensure the date is in the correct format (ISO 8601)
 

  return (
    <div className="flex justify-center w-full ">
      <div className="w-[700px] max-md:w-full text-xs">
        
        <Image alt="zurag" className="h-[80vh]" src="/image/white1.png" width={1000} height={8000} />
        {/* Show countdown timer */}
        <div className="bg-[#ddd1ca] pt-5 pb-20 relative">
        <div className="flex justify-center gap-2 text-[#735c4f] font-bold text-3xl pb-5 relative">
        <div className="w-[73%] mx-auto mt-5 h-[1px] bg-white absolute z-0"></div>
          <div className="bg-[#ddd1ca] z-10 px-3">Party Event</div>
          
        </div>
        <div className="flex justify-center gap-2 text-[#735c4f] capitalize">
          <span className="border text-center p-4 flex-col">
            <div className="font-bold text-xl">{timeLeft?.days}</div>days 
          </span>
          <span className="border text-center p-4 flex-col"> 
            <div className="font-bold text-xl">{timeLeft?.hours}</div>hours 
          </span>
          <span className="border text-center p-4 flex-col"> 
            <div className="font-bold text-xl">{timeLeft?.minutes}</div> minutes 
          </span>
          <span className="border text-center p-4 flex-col"> 
            <div className="font-bold text-xl">{timeLeft?.seconds}</div> seconds
          </span>
        </div>
        <div className="flex justify-center mt-10">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25547.426646652788!2d127.12546439011071!3d36.83221653736704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b28637d4ed659%3A0xec0460c3f536f0e5!2z7Lap7LKt64Ko64-EIOyynOyViOyLnCDshJzrtoHqtawg7ISx7KCV64-ZIDE1MDY!5e0!3m2!1sko!2skr!4v1731132951220!5m2!1sko!2skr" 
        width="320" height="300" loading="lazy"></iframe>
        </div>
      </div>
        {/* Text section with a custom font */}
      </div>
      <FloatButton.BackTop />
    </div>
  );
}
