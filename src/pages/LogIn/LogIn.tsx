import {useState} from 'react';

const LogIn = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility=()=>{
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
       <>
       <div className='h-screen flex items-center justify-center'>
        <main className='bg-[var(--color-bg)] w-1/3 h-4/6 rounded-3xl px-10 py-14 flex flex-col items-center' >
                 <h1 className='text-4xl font-bold py-6 self-center'>Log In</h1>
                 <form className='flex flex-col gap-6'>
                   <div className='flex flex-col gap-1'>
                     <label className='label'>Email</label>
                     <input type='text' placeholder='email' className='input'/>
                   </div>
                   <div className='flex flex-col gap-1'>
                     <label className='label'>Password</label>
                     <input  placeholder='password' className='input'
                              type={isPasswordVisible ? "text" : "password"}
                              />
                   </div>
                   <p className='text-lg text-[var(--color-light-gray)] underline-offset-1'>Forgot Password?</p>
                   <button className='mainBtn mt-8' >Log In</button>
                 </form>
                 <p className='text-sm text-[var(--color-light-gray)] mt-3'>Don't have an account? <span className='font-bold text-sm text-[var(--color-black)]'>Sign Up</span></p>
        </main>
       </div>
 
       </>
  )
}

export default LogIn
