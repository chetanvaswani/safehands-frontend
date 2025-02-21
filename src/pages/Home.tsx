import { useEffect } from "react";
import { TbCurrentLocation } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import Maid from "../assets/maid.png";
import Cook from "../assets/cook.png";
import Driver from "../assets/driver.png";

const SERVICES = [ 
    { name: "House Help", img: Maid, active: true },
    { name: "Driver", img: Driver, active: true },
    { name: "Cook", img: Cook, active: false },
]

export default function Home() {
  return (
    <div className="w-full h-full">
      <Location />
      <div className="flex flex-col items-center h-fit">
        { SERVICES.map(
          (service, index) => (
            <div
              key={index}
              className="mt-5 bg-gradient-to-t from-gray-400/50 to-white h-[150px] w-[90%] flex justify-evenly items-center rounded-2xl"
            >
              <div className="flex flex-col gap-2 justify-center items-center">
                <div className="text-[25px] font-bold tracking-tight font-sans">
                  {service.name}
                </div>
                <button disabled={!service.active} className="bg-black w-[150px] text-white outline-noneborder-none px-4 py-2 rounded-4xl transition-all hover:shadow-lg hover:-translate-y-1 active:shadow-inner active:translate-y-1 disabled:opacity-65 disabled:active:translate-y-0">
                    {
                        service.active ? <p>Book Now</p> : <p>Comming Soon</p>
                    }
                </button>
              </div>
              <img src={service.img} alt={service.name} className="h-full object-contain" />
            </div>
          )
        )}
      </div>
    </div>
  );
}

function Location() {
  useEffect(() => {
    navigator?.geolocation?.getCurrentPosition(showPosition);

    function showPosition(position: GeolocationPosition) {
      console.log(position);
    }
  }, []);

  return (
    <div className="sticky top-0 flex justify-between items-center px-2 py-5 text-black font-bold text-xl border-b-2 border-black/10 bg-white">
      <div className="ml-2">
        <div className="flex items-end">Welcome</div>
        <div className="text-sm text-black/60 flex items-end gap-1">
          Nehru Nagar Bhilai <IoIosArrowDown />
        </div>
      </div>
      <TbCurrentLocation className="mr-5 w-8 h-8" />
    </div>
  );
}
