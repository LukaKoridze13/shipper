interface Params {
  width: number;
  height: number;
  length: number;
  weight: number;
}

interface Result {
  type: "Volumetric" | "Physical";
  weight: number;
  priceInGEL: number;
  priceInUSD: number;
}

export default function useCalculator({ width, length, height, weight }: Params): Result {
  const priceInGEL = 2; // Default
  const priceInUSD = 0.7; // Default
  const divisor = 5000; // default

  const physicalWeight = weight;
  const volumetricWeight = (width * length * height) / divisor;

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
