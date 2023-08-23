import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Benefits from "./sections/Benefits";
import Footer from "./components/Footer";
import TopSection from "./sections/TopSection";
import WhyChooseUs from "./sections/WhyChooseUs";
import WorkingSteps from "./sections/WorkingSteps";

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <TopSection />
      <WhyChooseUs />
      <WorkingSteps />
      <div className="mx-[13px] bg-black h-[1px]"></div>
      <Benefits />
      <Footer />
    </Wrapper>
  );
}
