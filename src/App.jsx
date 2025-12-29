import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Cards from "./components/Cards";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Button3 from "./components/Button3";
import Button4 from "./components/Button4";
import { CirclePlus } from "lucide-react";
import FAQCard from "./components/FAQCard";
import Section6 from "./components/Section6";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import Button5 from "./components/Button5";
import Button6 from "./components/Button6";
import Footer from "./components/Footer";
import Section7 from "./components/Section7";

const App = () => {
  return (
    <div className="bg-[#FFFFFF] px-10 py-6 flex flex-col gap-6">
      <NavBar />
      <Hero />
      <Section1 />
      <Cards />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />
    </div>
  );
};

export default App;
