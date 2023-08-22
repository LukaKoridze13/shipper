import React from "react"
import { SingleBenefitProps } from "./types"

const SingleBenefit: React.FC<SingleBenefitProps> = ({children}) => {
  return (
    <div className="bg-light-blue w-[202px] h-[202px] flex justify-center items-center rounded-full">
      {children}
    </div>
  )
}

export default SingleBenefit