import { SlHome } from "react-icons/sl";
import { HiHome } from "react-icons/hi";
import { IoMdHelpCircleOutline, IoMdHelpCircle } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { RiAccountCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface FooterProps {
    currPage: "home" | "help" | "account" | "checkout",
    setCurrPage: (str: "home" | "help" | "account" | "checkout") => void
}

export default function Footer({
    currPage,
    setCurrPage
}:FooterProps){
  const navigate = useNavigate();

  useEffect(() => {
    if (currPage === "home") {
      navigate("/");
    } else {
      navigate(`/${currPage}`);
    }
  }, [currPage, navigate]);

  return (
    <div className="overflow-hidden bottom-0 left-0 w-full bg-black flex justify-evenly items-center z-50 h-[60px]">
      {
        currPage === "checkout" ? <div>

        </div> : 
        <>
          <FooterButton name="home" Active={HiHome} InActive={SlHome} currPage={currPage} setCurrPage={setCurrPage} />
          <FooterButton name="help" Active={IoMdHelpCircle} InActive={IoMdHelpCircleOutline} currPage={currPage} setCurrPage={setCurrPage} />
          <FooterButton name="account" Active={RiAccountCircleFill} InActive={VscAccount} currPage={currPage} setCurrPage={setCurrPage} />
        </>
      }
    </div>
  );
}

interface FooterButtonProps {
  Active: React.ElementType,
  InActive: React.ElementType,
  name: "home" | "help" | "account" | "checkout",
  currPage: "home" | "help" | "account" | "checkout",
  setCurrPage: (str: "home" | "help" | "account" | "checkout") => void,
}

function FooterButton({ Active, InActive, name, currPage, setCurrPage }: FooterButtonProps) {
  return (
    <div
      className="flex flex-col items-center w-[33%] text-white text-sm cursor-pointer"
      onClick={() => setCurrPage(name)}
    >
      {currPage === name ? <Active className="w-5 h-5" /> : <InActive className="w-5 h-5" />}
      <div>{toTitleCase(name)}</div>
    </div>
  );
}

export function toTitleCase(str: string) {
  return str.replace("_", " ").replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());
}