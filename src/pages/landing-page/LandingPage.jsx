import Feature from "../../components/landing/features/Feature";
import Footer from "../../components/landing/footer/Footer";
import Hero from "../../components/landing/hero/Hero";

import NavbarComponent from "../../components/landing/navbar/NavbarComponent";
import Opinion from "../../components/landing/opinion/Opinion";
import Process from "../../components/landing/process/Process";
import Usage from "../../components/landing/usage/Usage";
const LandingPage = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          overflowY: "auto",
          border: "1px solid black",
        }}
      >
        <NavbarComponent />
        <Hero />
        <Feature />
        <Process />
        <Usage />
        <Opinion />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
