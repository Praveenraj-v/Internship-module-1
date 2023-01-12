import { useEffect, useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

export default function Home() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0">
        <Header setIsOpen={setLoginOpen} />
      </div>
      <div className="w-full">
        <div className="text-[50px] w-fit mx-auto mt-[200px] font-serif">Search University</div>
        <div className="text-[20px] text-blue-600 underline w-fit mx-auto font-serif cursor-pointer" onClick={() => setSignUpOpen(true)}>Signup</div>
      </div>
      <div>
        <Login isOpen={loginOpen} setIsOpen={setLoginOpen} signupOpen={setSignUpOpen} />
      </div>
      <div>
        <SignUp isOpen={signUpOpen} setIsOpen={setSignUpOpen} signinOpen={setLoginOpen} />
      </div>
    </>
    
  );
}
