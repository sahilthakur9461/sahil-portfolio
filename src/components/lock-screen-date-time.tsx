import { useLock } from "@/context/lockContext";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LockScreenDateTime() {
  const { unlocking } = useLock();

  const [dateTime, setDateTime] = useState({
    day: "",
    time: "",
  });

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const day = days[now.getDay()];

      let hours = now.getHours();
      const minutes = now.getMinutes();

      hours = hours % 12;
      hours = hours ? hours : 12;

      const time = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;

      setDateTime({ day, time });
    };

    updateDateTime(); // Initial call to set the time immediately
    const interval = setInterval(updateDateTime, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="absolute inset-0   h-full  flex  justify-center">
      <Image
        alt="bg"
        src={"/ios-wallpaper.jpg"}
        fill
        className="object-cover rounded-[50px]"
      />
      <div
        className={`z-10 flex flex-col gap-2 items-center absolute top-16  ${
          unlocking ? "animate-fade-out-scale" : ""
        }`}
      >
        <span className="text-white/80 font-sf-pro text-xl ">{`${
          dateTime.day
        } ${new Date().getDate()} ${new Date().toLocaleString("default", {
          month: "long",
        })}`}</span>
        <span className="text-white/80 text-7xl font-sf-pro font-bold">
          {dateTime.time}
        </span>
      </div>
    </div>
  );
}
