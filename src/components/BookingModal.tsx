import Modal from "./Modal";
import { servicesInterface } from "../pages/Home";

interface BookingModalProps{
    open: boolean,
    setOpen: (value: boolean) => void,
    selectedService: servicesInterface | null
}

export default function BookingModal({
    open,
    setOpen,
    selectedService
}: BookingModalProps){

    return (
        <Modal open={open} title={ selectedService ? `Book ${selectedService?.name}` : "Booking details"} setOpen={setOpen}> 
            <p>Hello world</p>
        </Modal>
    )
}