import useCalculate, { useCalculatorReturn } from "@/hooks/useCalculate";

import { useState } from "react";
function Calculator() {
  const [lengthCm, setLengthCm] = useState("");
  const [widthCm, setWidthCm] = useState("");
  const [heightCm, setHeightCm] = useState("");
  const [weightKg, setWeightKg] = useState("");
  const [data, setData] = useState<null | useCalculatorReturn>(null);

  function onClick() {
    const data = useCalculate(Number(widthCm), Number(heightCm), Number(lengthCm), Number(weightKg));
    setData(data);
  }

  return (
    <div className="flex flex-col justify-start items-start bg-gray-200 text-white pb-4 pt-4 w-[656px] m-auto rounded-xl p-5">
      <div className="flex justify-center text-center w-[576px]">
        <h1 className="text-black pb-16 pt-16 font-bold text-lg">Calculator</h1>
      </div>

      <div className="w-[576px]">
        <div className="pb-5">
          <h1 className="text-black">Country</h1>
          <select className="rounded-full w-[576px] px-2 py-2 mt-2 text-black">
            <option value="">Select a Country</option>
            <option value="usa">USA</option>
            <option value="georgia">GEORGIA</option>
          </select>
        </div>

        <div className="flex gap-2 pb-5 w-full">
          <div className="flex flex-col w-full">
            <h1 className="text-black">Length unit</h1>
            <select className="rounded-full p-2 mt-2  text-black">
              <option value="cm">CM</option>
              <option value="inch">INCH</option>
            </select>
          </div>

          <div className="flex flex-col">
            <h1 className="text-black">Weight unit</h1>
            <select className="rounded-full p-2 mt-2 w-[276px] text-black">
              <option value="kg">KG</option>
              <option value="gr">GR</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center items-center p-2 gap-5">
          <div className="flex flex-col gap-2 justify-start items-start text-black">
            <p className="text-black">Weight</p>
            <input type="text" value={weightKg} onChange={(e) => setWeightKg(e.target.value)} placeholder="0" className="w-[126px] rounded-full pl-2 h-[68px]" />
          </div>

          <div className="flex flex-col gap-2 justify-start items-start text-black">
            <p className="text-black">Length</p>
            <input type="text" value={lengthCm} onChange={(e) => setLengthCm(e.target.value)} placeholder="0" className="w-[126px] rounded-full pl-2 h-[68px]" />
          </div>

          <div className="flex flex-col gap-2 justify-start items-start text-black">
            <p className="text-black">Width</p>
            <input type="text" value={widthCm} onChange={(e) => setWidthCm(e.target.value)} placeholder="0" className="w-[126px] rounded-full pl-2 h-[68px]" />
          </div>

          <div className="flex flex-col gap-2 justify-start items-start text-black">
            <p className="text-black">Height</p>
            <input type="text" value={heightCm} onChange={(e) => setHeightCm(e.target.value)} placeholder="0" className="w-[126px] rounded-full pl-2 h-[68px]" />
          </div>
        </div>
      </div>

      <div className="w-[576px] flex gap-16 pt-12 ">
        {data && (
          <div className="flex flex-col text-black">
            <p>Approximate Pirce</p>
            <p className="font-bold">{data.priceInGEL} ₾</p>
          </div>
        )}
        <div>
          <button onClick={onClick} className="bg-blue-600 p-2 rounded-full w-[380px] border-none font-bold">
            Price Calculator
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
