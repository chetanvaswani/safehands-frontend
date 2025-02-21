import { useState } from "react";
import { QnA } from "../assets/data/data";
import { IoIosArrowDown } from "react-icons/io";

export default function Help() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="overflow-hidden">
      <div className="sticky top-0 bg-white mx-2 text-2xl font-bold p-4 border-b-2 border-black">
        FAQ's
      </div>
      <div className="overflow-x-hidden p-4 h-[calc(100vh-130px)]">
        {QnA.map((curr, index) => (
          <div
            key={index}
            className="bg-gray-100 m-2 p-4 rounded-lg font-semibold"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex justify-between items-center">
              <div
                className={`w-[calc(100%-30px)] ${
                  openIndex === index ? "border-b border-dotted border-black pb-2" : ""
                }`}
              >
                {curr.question}
              </div>
              <IoIosArrowDown
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
            {openIndex === index && (
              <div className="mt-2 text-black font-normal">{curr.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
