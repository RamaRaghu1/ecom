import React, { useState } from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import styles from "../styles/styles";
import {Link} from "react-router-dom"
const Login = () => {
  const [email, setEmail] = useState("");
  const[password, setPassword]=useState("");
  const[isVisible, setIsVisible]=useState(false);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md ">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login to your account
        </h2>
      </div>
      <div className="mt-8 mx-auto w-full max-w-md">
        <div className="bg-white py-8 px-4 shadow rounded-lg lg-px-8 ">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:border-blue-500 text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={isVisible ? "text":"password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className=" appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-1 focus:border-blue-500 text-sm"
                />

                {isVisible ?
                 <AiOutlineEye
                 className="absolute top-2 right-2 cursor-pointer"
                 size={25}
                 onClick={()=>setIsVisible(!isVisible)}
                 />
                : 
               
                <AiOutlineEyeInvisible
                className="absolute top-2 right-2 cursor-pointer"
                size={25}
                onClick={()=>setIsVisible(!isVisible)}
                />
                }
                
              </div>
            </div>
            <div className={`${styles.noramlFlex} justify-between`}>
                <div className={`${styles.noramlFlex}`}>
                    <input type="checkbox" name="remember-me" id="remember-me"
                    className="h-4 w-4 text-blue-600 focus-ring-2 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Remember me</label>
                </div>
                <div>
                  <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Forgot your password?</a>
                </div>
            </div>
            <div>
              <button type="submit" className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500">
Submit
              </button>
            </div>
            <div className={`${styles.noramlFlex} w-full`}>
<h4>Don't have an account?</h4> <Link to="/sign-up" className="text-blue-600 font-medium pl-2"> Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
