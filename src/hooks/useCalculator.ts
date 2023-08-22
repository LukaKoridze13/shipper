import {useState} from 'react'
import useCalculate, { Result } from './useCalculate';

const useCalculator = () => {
    const [lengthCm, setLengthCm] = useState("");
    const [widthCm, setWidthCm] = useState("");
    const [heightCm, setHeightCm] = useState("");
    const [weightKg, setWeightKg] = useState("");
    const [data, setData] = useState<Result | null>(null);
  
    function onClick() {
      const data = useCalculate({ width: Number(widthCm), height: Number(heightCm), length: Number(lengthCm), weight: Number(weightKg) });
      setData(data);
    }

    return {
        lengthCm,
        setLengthCm,
        widthCm, setWidthCm,
        heightCm, setHeightCm,
        weightKg, setWeightKg,
        data, onClick
    }
  
}

export default useCalculator