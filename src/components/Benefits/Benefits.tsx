import SingleBenefit from "./SingleBenefit"
import { StarIcon, DollarIcon, GlobeIcon, PaymentIcon, ShieldIcon } from "../../icons"


const Benefits = () => {
  return (
    <div className="w-full px-36 flex justify-between">
        <SingleBenefit text="Competetive Price">
            <div className="relative">
                <StarIcon />
                <DollarIcon />
            </div>
        </SingleBenefit>
        <SingleBenefit text="International Delivery">
            <div className="relative">
                <GlobeIcon />
            </div>
        </SingleBenefit>
        <SingleBenefit text="Secure Payment Methods">
            <div className="relative">
                <PaymentIcon />
            </div>
        </SingleBenefit>
        <SingleBenefit text="Secure Payment Methods">
            <div className="relative">
              <ShieldIcon />
            </div>
        </SingleBenefit>
    </div>
  )
}

export default Benefits