import React from "react";
import Hero from "./components/Hero/Hero";
import Sponsors from "./components/Sponsors/Sponsors";
import Services from "./components/Services/Services";
import Software from "./components/Software/Software";
import Downloads from "./components/Downloads/Downloads";
import Question from "./components/Question/Question";
import Faq from "./components/Faq/Faq";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Hero />
      <Sponsors />
      <Services />
      <Software />
      <Downloads />
      <Question />
      <Faq />
      <Pricing />
      <Testimonials />
      <Blog />
      <Contact />
    </div>
  );
};

export default App;
