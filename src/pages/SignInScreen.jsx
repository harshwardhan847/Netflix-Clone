import React, { useRef } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const SignInScreen = ({ sign }) => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = async (e) => {
    e.preventDefault();
    const authentication = getAuth();
    console.log("clicked");
    await createUserWithEmailAndPassword(
      authentication,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log("harsh");
        console.log(authUser.user);
        sign(true);
        // navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
  };
  return (
    <div className="max-w-[500px] p-16 mx-auto bg-black">
      <form className="grid fles-col">
        <h1 className="text-left mb-6 text-3xl font-semibold">Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          ref={emailRef}
          className="outline-0 text-black h-10 mb-4 border-none rounded px-1 py-4"
        />
        <input
          type="password"
          placeholder="Password"
          ref={passwordRef}
          className="outline-0 text-black h-10 mb-4 border-none rounded px-1 py-4"
        />
        <button
          type="submit"
          className="px-4 py-3 text-base rounded text-white bg-red-600 font-semibold border-none cursor-pointer mt-5"
          onClick={signIn}
        >
          Sign In
        </button>
        <h4 className="text-left mt-2">
          <span className="text-gray-400">New to Netflix?</span>{" "}
          <span
            onClick={register}
            className="hover:cursor-pointer hover:underline"
          >
            Sign Up now
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignInScreen;
