import SingleBenefit from "./SingleBenefit"
import { StarIcon, DollarIcon, GlobeIcon, PaymentIcon, ShieldIcon } from "../../icons"
import delivery from "../../assets/international-delivery.png"

const Benefits = () => {
  return (
    <div className="w-full px-36 flex justify-between my-14">
        <SingleBenefit text="Competetive Price">
            <div className="relative">
                <StarIcon />
                <DollarIcon />
            </div>
        </SingleBenefit>
        <SingleBenefit text="International Delivery">
            <div className="relative">
                <img src={delivery} alt="" />
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