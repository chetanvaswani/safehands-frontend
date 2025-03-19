import Modal from "./Modal";
import { servicesInterface } from "../App";
import { useState } from "react";
import { CiDiscount1 } from "react-icons/ci";

interface BookingModalProps{
    open: boolean,
    setOpen: (value: boolean) => void,
    selectedService: servicesInterface | null
}

type Duration = {
    name:  "once" | "monthly" | "custom";
    price: number
    discount: number
    tax: number
    total: number
}

export default function BookingModal({
    open,
    setOpen,
    selectedService
}: BookingModalProps){
    const [selectedDuration, setSelectedDuration] = useState<Duration['name']>("once")

    return (
        <Modal open={open} title={ selectedService ? `Book ${selectedService?.name}` : "Booking details"} setOpen={setOpen}> 
            <div className="flex items-center flex-col gap-4 mt-5">
                <BookingDurationSlider selectedDuration={selectedDuration} setSelectedDuration={setSelectedDuration} />
                <div className="flex bg-gray-100 h-[50px] rounded-lg w-[95%] p-4 items-center">
                    <input className="bg-gray-100 w-full " placeholder="Enter Cupon Code" />
                    <CiDiscount1 className="size-7 text-gray-500" />
                </div>
                <div className="w-[95%] bg-gray-100 p-4 rounded-xl font-semibold flex flex-col gap-1">
                    <div className="flex justify-between ">
                        <p className="">Amount</p>
                        <p>₹149</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Discount</p>
                        <p>₹50</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Good & Service Tax</p>
                        <p>₹18</p>
                    </div>
                    <div className="border-b-1 border-dotted border-black mt-2"/>
                    <div className="flex justify-between">
                        <p>Total</p>
                        <p>₹117</p>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

interface BookingDurationSliderInterface{
    selectedDuration: Duration["name"],
    setSelectedDuration: ( duration: Duration["name"] ) => void
}

function BookingDurationSlider({
    selectedDuration,
    setSelectedDuration
}: BookingDurationSliderInterface){
    const durations: Duration["name"][] = ["once", "monthly", "custom"] 

    return (
        <div className="w-[97%] h-[50px] bg-gray-950 border-1 border-black rounded-4xl flex justify-center items-center">
            {
                durations.map((duration) => {
                    return (
                        <div key={duration} 
                        className={`w-[33%] cursor-pointer text-center flex items-center justify-center h-[90%] rounded-4xl ${selectedDuration === duration ? "bg-white text-black" : "text-white"}`} onClick={() => {
                            setSelectedDuration(duration)
                        }}>
                            {duration}
                        </div>
                    )
                })
            }
        </div>
    )
}