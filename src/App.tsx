import "./App.css";
import React, { Suspense, useState } from "react";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const Help = React.lazy(() => import("./pages/Help"));

function App() { 
  const [currPage, setCurrPage] = useState<"home" | "help" | "account">('home');

  return (
    <div className="overflow-x-hidden">
        <BrowserRouter>
          <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/help" element={<Help />} />
            </Routes>
          </Suspense>
          <Footer currPage={currPage} setCurrPage={setCurrPage} />
        </BrowserRouter>
    </div>
  );
}

export default App;
