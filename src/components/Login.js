import React from 'react'
import google1 from "../assets/google1.png"
import micro from "../assets/micro.png"
import { GoogleAuthProvider, getAuth , signInWithPopup , signOut } from "firebase/auth";
import { ToastContainer ,toast } from 'react-toastify';

const Login = () => {
  const auth = getAuth()
  const provider = new GoogleAuthProvider()
   const handleGoogleLogin = (e) =>{
    e.preventDefault()
    signInWithPopup(auth, provider).then((result) =>{
     const user = result.user
     console.log(user);
    }).catch((error) =>{
     console.log(error);
    })
      
   }

   const handleSignOut = (e) =>{
  signOut(auth).then(() =>{
    toast.success("Log Out Successfully")
  }).catch((error) =>{
    console.log(error);
  })
   
   }

  return (
    <div className='w-full flex flex-col items-center justify-center gap-10 py-20'>
    <div className='w-full flex items-center justify-center gap-10  '>
     <div onClick={handleGoogleLogin} className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 curser-pointer duration-300'>
     <img className='w-8' src={google1} alt="googlelogo" />
      <span className='text-sm text-gray-900'>Sign in with Google</span>
     </div>
     <button onClick={handleSignOut}  className='bg-black text-white text-base py-2 px-6 tracking-wide duration-300 border-[10px]'>Sign Out</button>
    </div>
    <div className='w-full flex items-center justify-center gap-10  '>
     <div className='text-base w-60 h-12 tracking-wide border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2 hover:border-blue-600 curser-pointer duration-300'>
     <img className='w-8' src={micro} alt="googlelogo" />
      <span className='text-sm text-gray-900'>Sign in with Microsoft</span>
     </div>
     <button onClick={handleSignOut} className='bg-black text-white text-base py-2 px-6 tracking-wide duration-300 border-[10px]'>Sign Out</button>
    </div>
    <ToastContainer 
     position="top-left"
     autoClose={2000}
     hideProgressBar={false}
     newestOnTop={false}
    closeOnClick
    rtl={false}
     pauseOnFocusLoss
    draggable
    pauseOnHover
    theme='dark'
/>


    </div>
  )
}

export default Login
