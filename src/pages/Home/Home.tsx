import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import TopSection from "../../components/TopSection/TopSection";
import Benefits from "../../components/Benefits/Benefits";
import WorkingSteps from "../../components/WorkingSteps/WorkingSteps";

export default function Home() {
  return (
    <>
      <TopSection />
      <WhyChooseUs />
      <WorkingSteps />
      <div className="mx-[13px] bg-black h-[1px]" ></div>
      <Benefits />
    </>
  );
}
