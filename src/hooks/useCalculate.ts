interface Params {
  width: number;
  height: number;
  length: number;
  weight: number;
}

export interface Result {
  type: "Volumetric" | "Physical";
  weight: number;
  priceInGEL: number;
  priceInUSD: number;
}

export default function useCalculate({ width, length, height, weight }: Params): Result {
  const priceInGEL = 24; // Default
  const priceInUSD = 9; // Default
  const divisor = 5000; // default

  const physicalWeight = weight;
  const volumetricWeight = RoundUp((width * length * height) / divisor);

  if (physicalWeight >= volumetricWeight) {
    return {
      type: "Physical",
      weight: physicalWeight,
      priceInGEL: physicalWeight * priceInGEL,
      priceInUSD: physicalWeight * priceInUSD,
    };
  } else {
    return {
      type: "Volumetric",
      weight: volumetricWeight,
      priceInGEL: volumetricWeight * priceInGEL,
      priceInUSD: volumetricWeight * priceInUSD,
    };
  }
}

const RoundUp = (num: number): number => {
  return Math.round(num * 100) / 100;
};
