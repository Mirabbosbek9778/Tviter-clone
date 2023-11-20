import Image from "next/image";
import React from "react";
import Button from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

const Auth = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-screen">
        <Image
          src={"/images/x.svg"}
          alt="x"
          width={450}
          height={450}
          className="justify-self-center hidden md:block"
        />
        <div className="flex flex-col justify-center md:justify-between gap-6 h-full md:h-[70vh]">
          <div className="block md:hidden">
            <Image src={"/images/x.svg"} alt="x" width={50} height={50} />
          </div>
          <h1 className="text-6xl font-bold">Happening now</h1>
          <div className="w-fill md:w-[60%]">
            <h2 className="font-bold text-3xl mb-4">Join Today.</h2>
            <div className="flex flex-col space-y-2">
              <Button
                label={
                  <div className="flex gap-2 items-center justify-center">
                    <FcGoogle />
                    Sign Up with Google
                  </div>
                }
                fullWidth
                secondary
              />
              <Button
                label={
                  <div className="flex gap-2 items-center justify-center">
                    <AiFillGithub />
                    Sign Up with GitHub
                  </div>
                }
                fullWidth
                secondary
              />
              <div className="flex items-center justify-center">
                <div className="h-px bg-gray-700 w-1/2" />
                <p className="mx-4">OR</p>
                <div className="h-px bg-gray-700 w-1/2" />
              </div>
              <Button label={"Create Account"} fullWidth />
              <div className="text-[10px] text-gray-400">
                By signing up, you agree to the
                <span className="text-sky-500">Terms of Service</span> and
                <span className="text-sky-500">Privace Policy</span>, including
                <span className="text-sky-500">Cookie Use</span>.
              </div>
            </div>
          </div>
          <div className="w-fill md:w-[60%]">
            <h3 className="font-medium text-xl mb-4">
              Already have an Account?
            </h3>
            <Button label={"Sign In"} fullWidth outline />
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
