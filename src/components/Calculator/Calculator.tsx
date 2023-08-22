import useCalculator from "./useCalculator"

function Calculator() {
  const { data, heightCm, onClick, lengthCm, widthCm, weightKg, setLengthCm, setHeightCm, setWidthCm, setWeightKg } = useCalculator();
  return (
    <div className="flex flex-col justify-center items-center bg-black text-white pb-4 pt-4">
      <h1>გამომთვლელი</h1>

      <div className="flex gap-2 justify-center items-center p-2">
        <p>
          Length<span> CM</span>
        </p>
        <p>
          Width<span> CM</span>
        </p>
        <p>
          Height<span> CM</span>
        </p>
        <p>
          Weight<span> KG</span>
        </p>
      </div>

      <div className="flex justify-center items-center gap-2 text-black">
        <input type="text" value={lengthCm} onChange={(e) => setLengthCm(e.target.value)} />
        <input type="text" value={widthCm} onChange={(e) => setWidthCm(e.target.value)} />
        <input type="text" value={heightCm} onChange={(e) => setHeightCm(e.target.value)} />
        <input type="text" value={weightKg} onChange={(e) => setWeightKg(e.target.value)} />
      </div>

      <div>
        <button onClick={onClick}>ფასის გამოთვლა</button>
      </div>

      {data && (
        <div>
          <p>Price calculated by {data.type} Weight</p>
          <p>Price in GEL: {data.priceInGEL} GEL</p>
          <p>Price in USD: {data.priceInUSD} $</p>
          <p>
            {data.type} Weight: {data.weight} KG
          </p>
        </div>
      )}
    </div>
  );
}

export default Calculator;
