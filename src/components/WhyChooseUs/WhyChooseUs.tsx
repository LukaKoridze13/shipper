import whyChooseUsLogo from "../../Images/whyChooseUs.svg";

function WhyChooseUs() {
  return (
    <div className="flex justify-center items-start w-auto pt-56 pl-16 pr-16 pb-60">
      <div className="max-w-[751px]">
        <h1 className="text-3xl font-medium leading-normal text-black pb-9">Why Choose Us?</h1>
        <p className="text-2xl font-normal text-black pt-5 max-w-[751px]">
          We understand the importance of your shipments. That's why we employ stringent security measures to safeguard your packages throughout the journey. Our advanced tracking system lets you follow your shipment's progress in real-time,
          providing you with peace of mind every step of the way.
        </p>
      </div>
      <img src={whyChooseUsLogo} className="max-w-[607px] max-h-[517px]" />
    </div>
  );
}

export default WhyChooseUs;
