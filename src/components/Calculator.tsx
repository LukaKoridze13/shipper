import  { useState } from 'react';
import useCalculator from '../hooks/useCalculator';

function Calculator() {
  const [lengthCm, setLengthCm] = useState('');
  const [widthCm, setWidthCm] = useState('');
  const [heightCm, setHeightCm] = useState('');
  const [weightKg, setWeightKg] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState<any>(null);

  function onClick(){
    const data = useCalculator({width:Number(widthCm), height:Number(heightCm), length:Number(lengthCm), weight:Number(weightKg)});
    setCalculatedPrice(data)
  }

  return (
    <div className='flex flex-col justify-center items-center bg-black text-white pb-4 pt-4'>
      <h1>გამომთვლელი</h1>

      <div className='flex gap-2 justify-center items-center p-2'>
        <p>Length<span> CM</span></p>
        <p>Width<span> CM</span></p>
        <p>Height<span> CM</span></p>
        <p>Weight<span> KG</span></p>
      </div>

      <div className='flex justify-center items-center gap-2 text-black'>
        <input type='text' value={lengthCm} onChange={(e) => setLengthCm(e.target.value)} />
        <input type='text' value={widthCm} onChange={(e) => setWidthCm(e.target.value)} />
        <input type='text' value={heightCm} onChange={(e) => setHeightCm(e.target.value)} />
        <input type='text' value={weightKg} onChange={(e) => setWeightKg(e.target.value)} />
      </div>

      <div>
        <button onClick={onClick}>ფასის გამოთვლა</button>
      </div>

      <div>
        <p>Calculated Price: {calculatedPrice?.priceInGEL} GEL</p>
        <p>Calculated Price: {calculatedPrice?.priceInUSD} USD</p>
        <p>Calculated Weight: {calculatedPrice?.weight} KG</p>
        <p>Calculated type: {calculatedPrice?.type} TYPE</p>
      </div>
    </div>
  );
}

export default Calculator;
