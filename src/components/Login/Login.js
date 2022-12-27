import {GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import g from '../assets/image/g.png';




const Login = () => {
  
  const {register,formState: { errors }, handleSubmit,} = useForm();
 
  const { loginEmailPass, loading,setLoading, sinInGoogle } =
    useContext(AuthContext);

  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
  
    loginEmailPass(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // toast.success("Users Login Successfull!");
        navigate(from, { replace: true });
      
     
  })}

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignin = () => {
    sinInGoogle(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const role = 'buyer';
        // saveUsers(user.displayName,user.email,role)
        
        const currentUser = {
          email: user.email
      }

      console.log(currentUser);
      

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
 

  
  return (
    <div className="w-full mt-8 h-auto overflow-scroll block h-screenp-4 flex items-center justify-center">
        <div className="bg-white py-6 px-10 border sm:max-w-md w-full ">
          <div className="sm:text-3xl text-2xl font-semibold text-center mb-12">
         <h1 className='text-4xl text-center'> Login Now</h1>
         <h2 className='px-4 text-sm font-bold mt-3 text-center'>Sign up to see photos and videos from your friends.
</h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}  className="">
           
          
        
            <div class="mb-6">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input  {...register("email", { required: true })} type="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
    </div> 
        
            <div class="mb-6">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input  name='password' {...register("password", { required: true })} type="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="*******" required/>
    </div> 
        

               
            <div>
                <p className='my-4 text-xs'>People who use our service may have uploaded your contact information to Instagram. <a to='#' className='pointer text-blue-600 underline'>Learn more</a></p>
                <p className='my-4 text-xs'>By signing up, you agree to our Terms, Privacy Policy and <a to='#' className='pointer text-blue-600 underline'>Cookies Policy.</a></p>
            </div>
           
           
  
            <div className="flex justify-center my-6">
             
            </div>
            <div className="flex justify-center my-6">
              <button type="submit" className=" btn btn-primary w-full">
              {loading? <div class="text-center">
    <div role="status">
        <svg class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span class="sr-only">Loading...</span>
    </div>
</div> : <p>Create Acconut</p>}
              </button>
            </div>
           
          </form>
          <div className="divider">OR</div>
          <button  className='w-full btn' onClick={handleGoogleSignin} color="gray"><img className="w-8 mr-3" src={g} alt></img> <p>Sign In With Google</p></button>
       
        </div>
      </div>
  );
};

export default Login;