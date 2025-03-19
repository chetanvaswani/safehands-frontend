import { TbCurrentLocation } from "react-icons/tb";
import { servicesInterface } from "../App";
import LocationSelector from "../components/LocationSelector";
import { useNavigate } from "react-router-dom";


interface HomePageProps{
  setCurrPage: (str: "home" | "help" | "account" | "checkout") => void,
  SERVICES: servicesInterface[]
}

export default function Home({setCurrPage, SERVICES} : HomePageProps) {
  const navigate = useNavigate()
  return (
    <div className="w-full flex-col h-full flex overflow-hidden">
      <LocationSelector title={"Welcome"} subTitle={"Vaishali Nagar Bhilai"} Icon={<TbCurrentLocation className="mr-5 w-8 h-8" />} />
      <div className=" py-5 h-[calc(100%-70px)] overflow-y-scroll w-full flex flex-col items-center">
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
                <button disabled={!service.active} onClick={() => {
                  if ( service.active ){
                      setCurrPage('checkout');
                      navigate('/checkout')
                  }
                }} className="bg-black cursor-pointer w-[150px] text-white outline-noneborder-none px-4 py-2 rounded-4xl transition-all hover:shadow-lg hover:-translate-y-1 active:shadow-inner active:translate-y-1 disabled:opacity-65 disabled:active:translate-y-0">
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