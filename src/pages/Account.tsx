import { BiSolidUser } from "react-icons/bi";
import { MdOutlineSettings } from "react-icons/md";

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

    return (
        <div className="h-[100% - 200px] w-full flex flex-col justify-start gap-2 items-center">
            <UserProfile />
            <Dashboard />
            <div className="w-[90%] mt-3">
                <div className="font-semibold text-lg">
                    Purchases
                </div>
                <div>
                    <table className="w-full text-sm text-left rtl:text-right rounded-sm ">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
                            <tr>
                                <th scope="col" className="px-6 py-2">
                                    Service
                                </th>
                                <th scope="col" className="px-6 py-2">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-2">
                                    Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                                <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                                    House Help
                                </th>
                                <td className="px-6 py-2">
                                    28/01/25
                                </td>
                                <td className="px-6 py-2">
                                    3000
                                </td>
                            </tr>
                            <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                                <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap ">
                                    Driver
                                </th>
                                <td className="px-6 py-2">
                                    12/02/25
                                </td>
                                <td className="px-6 py-2">
                                    500
                                </td>
                            </tr>
                            <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                                <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                                    House Help
                                </th>
                                <td className="px-6 py-2">
                                    28/12/24
                                </td>
                                <td className="px-6 py-2">
                                    3000
                                </td>
                            </tr>
                            <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                                <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                                    House Help
                                </th>
                                <td className="px-6 py-2">
                                    28/11/24
                                </td>
                                <td className="px-6 py-2">
                                    3000
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <div className="w-[90%]">
                <button className="w-full bg-black rounded-4xl font-bold text-white p-2 mt-2">
                    Logout
                </button>
            </div> */}
        </div>
    )
}

function Dashboard(){
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
    const current = {
        date: today,
        month: month
    }

    return (
        <div className="w-[90%] flex flex-col justify-center">
        <div className="text-left w-full ml-1 font-semibold text-lg">
            Dashboard <p className="inline text-sm font-light">{`(${MONTHS[current.month]})`}</p>
        </div>
        <div className="flex w-full justify-start bg-gray-100">
            {
                DAYS.map((day) => {
                    return (
                        <p key={day} className="inline-flex justify-center py-1 w-[14.2%]">{day}</p>
                    )
                })
            }
        </div>
        <div className="w-full flex flex-wrap justify-start">
            {
                calander.map((c) => {
                    const attendence = mostlyTrue();
                    return (
                        <div key={`${c.date}/${c.month}`} className={`w-[14.2%] h-[30px] my-[3px] flex justify-center items-center gap-2 ` }>
                            <div className={` w-[80%] flex justify-center items-center h-[100%] text-center  rounded-md ${c.month !== current.month ? "text-gray-300 bg-transparent" : false} ${c.date === current.date && c.month === current.month ? "border-1 border-black rounded-md" : false} ${ c.date > current.date ? "bg-transparent": attendence ? "bg-green-300" : " bg-red-300"}`}>
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
    )
}


function UserProfile(){
    return (
        <div className=" m-5 mb-3 h-[100px] w-[90%] bg-gray-100 flex rounded-4xl border-1 border-dashed border-black">
            <div className=" ml-2 w-[25%] h-full flex justify-center items-center">
                <BiSolidUser className="size-13 border-2 border-black rounded-[50%] p-2" />
            </div>
            <div className="w-[75%] ml-1 h-full flex justify-between items-center">
                <div className="flex flex-col justify-center items-start" >
                    <div className="font-semibold !no-underline text-xl -m-1">Chetan Vaswani</div>
                    <div className="font-base !no-underline text-sm">+91 9826874562</div>
                </div>
                <MdOutlineSettings  className="size-9 text-black mr-6" />
            </div>
        </div>
    )
}

function mostlyTrue() {
    return Math.random() >= 0.05;    
}