import iconVisible from "@/assets/icons/eye-slash.svg"
import iconInvisible from "@/assets/icons/eye.svg";
import { Link } from "react-router-dom";
import usePasswordToggle from "../../hooks/usePasswordToggle";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const SignUp = () => {
  const [showPassword, togglePasswordVisibility] = usePasswordToggle();

  const schema = yup.object().shape({
    email: yup.string().required("required"),
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    number: yup.number().required("required"),
    city: yup.string().required("required"),
    address: yup.string().required("required"),
    password: yup.string().required("required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      number: 0,
      city: "",
      address: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <main className="bg-[var(--color-bg)] w-[41rem] rounded-3xl px-10 py-14 flex flex-col items-center">
          <h1 className="text-4xl font-bold pt-6 pb-14 self-center">Sign Up</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full">
            <div className="flex gap-4">
              <div className="flex flex-col gap-1 w-1/2">
                <label className="label">First Name</label>
                <input {...register("firstName")} type="text" placeholder="First Name" className="input" />
              </div>
              <div className="flex flex-col gap-1 w-1/2">
                <label className="label">Last Name</label>
                <input {...register("lastName")} type="text" placeholder="Last Name" className="input" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-1 w-1/2">
                <label className="label">Email</label>
                <input {...register("email")} type="email" placeholder="Email" className="input" />
              </div>
              <div className="flex flex-col gap-1 w-1/2">
                <label className="label">Number</label>
                <input {...register("number")} type="number" placeholder="557 777 777" className="input" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-1 w-1/2">
                <label className="label">City</label>
                <input {...register("city")} type="text" placeholder="Email" className="input" />
              </div>
              <div className="flex flex-col gap-1 w-1/2">
                <label className="label">Address</label>
                <input {...register("address")} type="text" placeholder="Address" className="input" />
              </div>
            </div>
            <div className="relative flex flex-col gap-1">
              <label className="label">Password</label>
              <div className="flex relative">
                <input {...register("password")} placeholder="Password" className="input" type={showPassword ? "text" : "password"} />
                <button type="button" className="absolute top-0 right-0 h-full px-3 flex items-center" onClick={togglePasswordVisibility}>
                  {showPassword ? <img src={iconInvisible} alt="invisible" /> : <img src={iconVisible} alt="visible" />}
                </button>
              </div>
              {errors.password && <span className="error">{errors.password.message} </span>}
            </div>
            <div className="relative flex flex-col gap-1">
              <label className="label">Confirm Password</label>
              <div className="flex relative">
                <input {...register("confirmPassword")} placeholder="Confirm Password" className="input" type={showPassword ? "text" : "password"} />
                <button type="button" className="absolute top-0 right-0 h-full px-3 flex items-center" onClick={togglePasswordVisibility}>
                  {showPassword ? <img src={iconInvisible} alt="invisible" /> : <img src={iconVisible} alt="visible" />}
                </button>
              </div>
              {errors.password && <span className="error">{errors.password.message} </span>}
            </div>
            <div className="self-start flex gap-2 items-center justify-center">
              <input type="checkbox" />
              <p className="text-sm font-bold">
                I agree to the <span className="text-sm underline font-bold text-[var(--color-light-gray)]">terms and conditions</span>
              </p>
            </div>
            <button type="submit" className="mainBtn mt-6">
              Registration
            </button>
          </form>
          <div className="flex items-center justify-center gap-2 mt-3">
            <p className="text-sm text-[var(--color-light-gray)]">Already have an account?</p>
            <Link to="/login" className="font-bold text-sm text-[var(--color-black)] underline">
              Log in
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default SignUp;
