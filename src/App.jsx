import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Courses from "./Pages/Courses";
import Faq from "./Pages/Faq";
import CourseDetail from "./Pages/CourseDetail";
import CourseReg from "./Pages/CourseReg";
import CourseRegs from "./Pages/CourseRegs";
import RegPay from "./Pages/RegPay";
import PayPage from "./Pages/PayPage";
import NotFound from "./Pages/NotFound";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/course-registration/:id" element={<CourseReg />} />
        <Route path="/course-regs/:id" element={<CourseRegs />} />
        <Route path="/reg-pay/:id" element={<RegPay />} />
        <Route path="/pay-page/:id" element={<PayPage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
