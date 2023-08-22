import React from "react"
import { SingleBenefitProps } from "./types"

const SingleBenefit: React.FC<SingleBenefitProps> = ({children, text}) => {
  return (
    <div className="flex flex-col items-center">
      <div className=" h-[202px] w-[202px]">
        <div className="bg-light-blue w-full h-full  flex justify-center items-center rounded-full ">
          {children}
        </div>
      </div>
        <p className="text-center mt-9 text-2xl whitespace-nowrap	">{text}</p>
    </div>
  )
}

export default SingleBenefit