import { BiSolidUser } from "react-icons/bi";
import { MdOutlineEdit } from "react-icons/md";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTHS = [
    "January",
    "Feburary",
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

export default function Account(){
    const {current, calander} = generateCalander()

    return (
        <div className="h-full w-full flex flex-col justify-start items-center">
            <div className=" m-5 h-[100px] w-[90%] bg-gray-100 flex rounded-4xl border-1 border-dashed border-black">
                <div className=" ml-2 w-[25%] h-full flex justify-center items-center">
                    <BiSolidUser className="size-13 border-2 border-black rounded-[50%] p-2" />
                </div>
                <div className="w-[75%] ml-1 h-full flex justify-between items-center">
                    <div className="flex flex-col justify-center items-start" >
                        <div className="font-semibold !no-underline text-xl -m-1">Chetan Vaswani</div>
                        <div className="font-base !no-underline text-sm">+91 9826874562</div>
                    </div>
                    <MdOutlineEdit  className="size-9 text-black mr-6" />
                </div>
            </div>
            <div className="Dashboard w-[90%] flex flex-col justify-center">
                <div className="text-left w-full ml-1 font-semibold text-lg">
                    Dashboard <p className="inline text-sm font-light">{`(${MONTHS[current.month]})`}</p>
                </div>
                <div className="flex w-full justify-start bg-gray-100">
                    {
                        DAYS.map((day) => {
                            return (
                                <p key={day} className="inline-flex justify-center w-[14.2%]">{day}</p>
                            )
                        })
                    }
                </div>
                <div className="w-full flex flex-wrap justify-start">
                    {/* <div className="w-[14%] h-[30px] flex justify-center items-center">
                        <div className="h-[25px] w-[25px] bg-green-300 rounded-sm">
                        </div>
                    </div>
                    <div className="w-[14%] h-[30px] flex justify-center items-center">
                        <div className="h-[25px] w-[25px] bg-red-300 rounded-sm">

                        </div>
                    </div> */}

                    {
                        calander.map((c) => {
                            const attendence = mostlyTrue();
                            return (
                                <div key={`${c.date}/${c.month}`} className={`w-[14.2%] h-[30px] my-[3px] flex justify-center items-center gap-2 ` }>
                                    <div className={` w-[80%] flex justify-center items-center h-[100%] text-center  rounded-md ${c.month !== current.month ? "text-gray-300 bg-transparent" : false} ${c.date === current.date ? "border-1 border-black rounded-md" : false} ${ c.date > current.date ? "bg-transparent": attendence ? "bg-green-300" : " bg-red-300"}`}>
                                        <div>
                                            {c.date}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

function generateCalander(){
    let date = new Date();
    let today = date.getDate();
    let year = date.getFullYear();
    let month = date.getMonth();

    // Gets the first DAY of current month
    let dayone = new Date(year, month, 1).getDay();
    // Gets the last DATE of current month
    let lastdate = new Date(year, month + 1, 0).getDate();
    // Get the last date of the previous month
    let monthlastdate = new Date(year, month, 0).getDate();

    const calander = [];

    for (let i=(-(dayone - 1) ); i <= lastdate; i++){
        if (i < 0){
            calander.push({
                date: monthlastdate + (i + 1),
                month: month - 1,
                day: dayone + i
            })
        } 
        if (i > 0) {
            calander.push({
                date: i,
                month: month,
                day: dayone + (i - 1)
            })
        }
    }

    return {
        current: {
            date: today,
            month: month
        },
        calander: calander
    }
}

function mostlyTrue() {
    return Math.random() >= 0.05;    
}