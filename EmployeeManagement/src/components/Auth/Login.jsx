
import React, { useState } from 'react';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Login submitted");

    setEmail("");
    setPassword("");

  }
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className='border-2 rounded-xl border-emerald-600 p-20' >
        <form onChange={(e) => { submitHandler(e) }} className='flex flex-col items-center justify-center' action="">
          <input onChange={(e) => { setEmail(e.target.value) }} value={email} required type="email" className='text-black outline-none bg-transparent border-2 border-emerald-600 text-xl  py-3 px-5 rounded-full placeholder:text-grey-00' placeholder='Enter your Email' />
          <input value={password} onChange={(e) => { setPassword(e.target.value) }} required className='text-black outline-none bg-transparent border-2 border-emerald-600 text-xl  py-3 px-5 rounded-full placeholder:text-grey-400 mt-3' type="password" placeholder='Enter your Password' />
          <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login