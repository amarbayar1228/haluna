// Add this at the very top of the file to mark it as a Client Component
"use client"; 
import { SmileFilled, CopyOutlined } from '@ant-design/icons';
import { useState, useEffect } from "react";
import Image from "next/image";
import { Typography } from "antd";
const { Paragraph, Text } = Typography;
export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTime = () => {
      const now: any = new Date();
      const target: any = new Date("2024-11-13T20:00:00");
      const difference = target - now;

      if (difference <= 0) {
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

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center w-full ">
      <div className="w-[700px] max-md:w-full text-xs">
        <Image alt="zurag" className="h-[80vh]" src="/image/white2.png" width={1000} height={8000} />
        <div className="bg-[#ddd1ca] pt-5 pb-20 relative">
          <div className="flex justify-center gap-2 text-[#735c4f] font-bold text-3xl pb-5 relative">
            <div className="w-[73%] mx-auto mt-5 h-[1px] bg-white absolute z-0"></div>
            <div className="bg-[#ddd1ca] z-10 px-3">Party Event</div>
          </div>
          <div className="flex justify-center gap-2 text-[#735c4f] capitalize">
            <span className="border text-center p-4 flex-col">
              <div className="font-bold text-xl">{timeLeft.days}</div>days
            </span>
            <span className="border text-center p-4 flex-col">
              <div className="font-bold text-xl">{timeLeft.hours}</div>hours
            </span>
            <span className="border text-center p-4 flex-col">
              <div className="font-bold text-xl">{timeLeft.minutes}</div> minutes
            </span>
            <span className="border text-center p-4 flex-col">
              <div className="font-bold text-xl">{timeLeft.seconds}</div> seconds
            </span>
          </div>
          <div className="flex flex-col items-center mt-10">
            <div className='flex'>
              <div>  
                <Paragraph  
                className='text-[#735c4f] font-bold'
                    copyable={{
                      text: '66, 문암로 동남구, 천안시, 충청남도',
                      tooltips: ['Хаяг хуулах', 'Хуулагдсан!!'],   
                      icon: [<CopyOutlined key="copy-icon" />, <SmileFilled key="copied-icon" />],
                    }}
                    
                  > 
                  Address:   66, 문암로 동남구, 천안시, 충청남도 
                  </Paragraph>
              </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1596.547529050452!2d127.18097349244651!3d36.84019940145391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b293b4000739d%3A0x5750ce242db8360c!2s66%20Munam-ro%2C%20Dongnam-gu%2C%20Cheonan%2C%20Chungcheongnam-do!5e0!3m2!1sen!2skr!4v1731481498545!5m2!1sen!2skr"
              width="320" height="300" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
