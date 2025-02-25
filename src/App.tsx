import "./App.css";
import React, { Suspense, useState } from "react";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const Help = React.lazy(() => import("./pages/Help"));
const Account = React.lazy(() => import ("./pages/Account"))

function App() { 
  const [currPage, setCurrPage] = useState<"home" | "help" | "account">('home');

  return (
    <div className="overflow-hidden flex flex-col justify-start h-dvh w-full">
        <BrowserRouter>
            <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/help" element={<Help />} />
                <Route path="/account" element={<Account />} />
              </Routes>
            </Suspense>
          <Footer currPage={currPage} setCurrPage={setCurrPage} />
        </BrowserRouter>
    </div>
  );
}



export default App;
