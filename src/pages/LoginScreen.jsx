import React, { useState } from "react";
import Logo from "../images/Netflix-logo.png";
import Background from "../images/background.webp";
import SignInScreen from "./SignInScreen";
const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div
      className="relative h-screen w-screen"
      style={{
        background: `url("${Background}") center no-repeat`,
      }}
    >
      <div className="">
        <img
          className="fixed z-50 contain left-0 pl-5 w-[150px]"
          src={Logo}
          alt="logo"
        />
        <button
          onClick={() => setSignIn(true)}
          className="fixed z-50 right-5 top-5 text-xs cursor-pointer border-2 border-black border-r-8 border-b-8 hover:border-r-2 hover:border-b-2 ease-in-out duration-150 text-white bg-red-600  py-3 px-5 "
        >
          Sign In
        </button>
        <div className="z-0 w-full bg-gradient-to-t from-[rgba(0,0,0,0.8)0%] via-[rgba(0,0,0,0)60%] to-[rgba(0,0,0,0.8)100%] h-screen bg-black opacity-40"></div>
        <div className="z-10 text-white left-0 right-0 absolute w-full top-[30%] mx-auto text-center  p-5 ">
          {signIn ? (
            <SignInScreen sign={setSignIn} />
          ) : (
            <>
              <h1 className="text-5xl mb-5">
                Unlimited films, TV programmes and more.
              </h1>
              <h2 className="text-3xl font-normal mb-7">
                Watch anywhere, Cancel at any time.
              </h2>
              <h3 className="text-base font-light">
                Ready to watch? Enter your email to create or register your
                membership.
              </h3>
              <div className=" mt-5">
                <form className="h-10 flex items-center justify-center">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="p-3 text-black outline-none h-full w-[30%] max-w-[600px]"
                  />
                  <button
                    onClick={() => {
                      setSignIn(true);
                      
                    }}
                    className="p-2 h-full border-none bg-red-600 cursor-pointer font-semibold hover:text-white hover:bg-red-800 ease-in-out duration-150"
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
