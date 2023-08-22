import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import TopSection from "../../components/TopSection/TopSection";
import Benefits from "../../components/Benefits/Benefits";
import WorkingSteps from "../../components/WorkingSteps/WorkingSteps";
import  Header  from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
    <Header/>
      <TopSection/>
      <WhyChooseUs />
      <WorkingSteps />
      <div className="mx-[13px] bg-black h-[1px]" ></div>
      <Benefits />
      <Footer></Footer>
    </>
  );
}
