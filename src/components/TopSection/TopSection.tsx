import Banner from "../../assets/Banner.png";
import payment from "../../assets/payment.svg";
import delivery from "../../assets/delivery.svg";
import repack from "../../assets/repack.svg";
import calculator from "../../assets/calculator.svg";

interface BoxProps {
  src: string;
  text: string;
}
export default function TopSection() {
  return (
    <section className="relative">
      <img className="w-full h-auto" src={Banner} alt="Banner" />
      <div className="w-full flex gap-14 justify-center items-center absolute bottom-0 translate-y-1/2">
        <Box src={payment} text="Payment" />
        <Box src={calculator} text="Calculator" />
        <Box src={repack} text="Repack" />
        <Box src={delivery} text="Delivery" />
      </div>
    </section>
  );
}

const Box = ({ src, text }: BoxProps) => {
  return (
    <div style={{ boxShadow: "0px 4px 40px 0px rgba(0, 0, 0, 0.25)" }} className="cursor-pointer bg-white flex justify-center items-center w-[281px] h-[254px] flex-col gap-6 text-[#FCCD46] text-[20px] font-sans rounded-[10px]">
      <img src={src} alt={text} />
      <span>{text}</span>
    </div>
  );
};
