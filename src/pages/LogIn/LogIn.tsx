import iconVisible from "@/assets/icons/eye-slash.svg";
import iconInvisible from "@/assets/icons/eye.svg";
import { Link } from "react-router-dom";
import useLogin from "./useLogin";


const Login = () => {
  const {handleSubmit, register, errors, showPassword, togglePasswordVisibility, onSubmit} = useLogin()
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <main className="bg-[var(--color-bg)] w-[32rem] rounded-3xl px-10 py-14 flex flex-col items-center">
          <h1 className="text-4xl font-bold py-6 self-center">Log In</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-1 w-full">
              <label className="label">Email</label>
              <input {...register("email")} type="email" placeholder="Email" className="input" />
              {errors.email && <span className="error">{errors.email.message} </span>}
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
            <Link to="/" className="pl-2">
              <p className="text-sm text-[var(--color-light-gray)] underline">Forgot Password?</p>
            </Link>
            <button type="submit" className="mainBtn mt-6">
              Log In
            </button>
          </form>
          <div className="flex items-center justify-center gap-2 mt-3">
            <p className="text-sm text-[var(--color-light-gray)]">Don't have an account?</p>
            <Link to="/signup" className="font-bold text-sm text-[var(--color-black)] underline">
              Sign Up
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default Login;
