import React from "react";
interface StepProps {
  number: string;
  text: string;
}
const Step: React.FC<StepProps> = ({ number, text }: StepProps) => {
  return (
    <div className="flex flex-col items-center w-80">
      <div className="flex justify-center items-center w-28 h-28 drop-shadow-step bg-[#F0FAFF] rounded-full text-[#FCCD46] text-5xl">{number}</div>
      <p className="mt-6 text-center">{text}</p>
    </div>
  );
};

export default Step;
