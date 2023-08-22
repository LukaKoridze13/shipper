import SingleBenefit from "./SingleBenefit"
import { StarIcon, DollarIcon } from "../../icons"

const Benefits = () => {
  return (
    <div>
        <SingleBenefit text="Competetive Price">
            <div className="relative">
                <StarIcon />
                <DollarIcon />
            </div>
        </SingleBenefit>
    </div>
  )
}

export default Benefits