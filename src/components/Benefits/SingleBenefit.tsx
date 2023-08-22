import React from "react"
import { SingleBenefitProps } from "./types"

const SingleBenefit: React.FC<SingleBenefitProps> = ({children, text}) => {
  return (
    <div className="w-[202px] h-[202px]">
      <div className="bg-light-blue w-full h-full  flex justify-center items-center rounded-full">
        {children}
      </div>
      <p className="text-center mt-9 text-2xl">{text}</p>
    </div>
  )
}

export default SingleBenefit