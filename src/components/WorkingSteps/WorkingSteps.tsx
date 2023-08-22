import Step from "./Step"

const WorkingSteps = () => {
  return (
    <div className="px-52  mt-[100px]">
        <h2 className="text-5xl text-center">How it works</h2>
        <div className="flex justify-between mt-[100px] mb-56">
            <Step number="1" text="It's simple! Tell us what you want and sit back and wait for your package"/>
            <Step number="2" text="We will check availability and
            purchase products."/>
            <Step number="3" text="Once received we
            ship them to you."/>
        </div>
    </div>
  )
}

export default WorkingSteps