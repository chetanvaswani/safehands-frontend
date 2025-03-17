import "./App.css";
import React, { Suspense, useState } from "react";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

const Home = React.lazy(() => import("./pages/Home"));
const Help = React.lazy(() => import("./pages/Help"));
const Account = React.lazy(() => import ("./pages/Account"))

function App() { 
  const [currPage, setCurrPage] = useState<"home" | "help" | "account">('home');

  return (
    <div className="w-screen flex md:justify-center" >
    <div className="overflow-hidden flex flex-col justify-start h-dvh w-full md:w-[70%] lg:w-[50%]">
        <BrowserRouter>
            <Suspense fallback={<div className="w-full h-full bg-gray-200 flex flex-col gap-7 items-center justify-center" ><Loader /> <p className="text-black font-semibold">Loading Content...</p></div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/help" element={<Help />} />
                <Route path="/account" element={<Account />} />
              </Routes>
            </Suspense>
          <Footer currPage={currPage} setCurrPage={setCurrPage} />
        </BrowserRouter>
    </div>
    </div>
  );
}



export default App;
