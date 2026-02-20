"use client";
import React from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { RectangleGogglesIcon } from "lucide-react";
import SocialMediaButton from "../Buttons/SocialMediaButton";

const LoginForm = () => {
  const params = useSearchParams();
  const callBack = params.get("callbackUrl") || "/";
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;

    const logInInfo = {
      email: form.email.value,
      password: form.password.value,
    };
    const res = await signIn("credentials", {
      email: logInInfo.email,
      password: logInInfo.password,
      redirect: false,
      callbackUrl: params.get("callbackUrl") || "/",
    });

    if (res?.ok) {
      alert("logged in");
      router.push(callBack);
    } else {
      alert("login failed");
    }
  };

  return (
    <div>
      <div className="h-150">
        <div className="grid lg:grid-cols-2 gap-4 max-lg:gap-12 bg-secondary sm:px-8 px-4 py-12 h-80">
          <div>
            <div className="max-w-lg mt-16 max-lg:hidden">
              <h1 className="text-4xl font-semibold text-white">Sign in</h1>
              <p className="text-[15px] mt-4 text-slate-100 leading-relaxed">
                Embark on a seamless journey as you sign in to your account.
                Unlock a realm of opportunities and possibilities that await
                you.
              </p>
            </div>
          </div>

          <div className="pb-4">
            <div className="bg-background rounded-xl sm:px-6 px-4 py-8 max-w-md w-full [box-shadow:0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto">
              <form onSubmit={handleLogin}>
                <div className="mb-8">
                  <h2 className="text-3xl font-semibold">Sign in</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Email
                    </label>
                    <div className="relative flex items-center">
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full text-sm border border-slate-300  pr-8 px-4 py-3 rounded-md outline-blue-600"
                        placeholder="Enter user name"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        stroke="#bbb"
                        className="w-4.5 h-4.5 absolute right-4"
                        viewBox="0 0 24 24">
                        <circle
                          cx="10"
                          cy="7"
                          r="6"
                          data-original="#000000"></circle>
                        <path
                          d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                          data-original="#000000"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Password
                    </label>
                    <div className="relative flex items-center">
                      <input
                        name="password"
                        type="password"
                        required
                        className="w-full text-sm border border-slate-300  pr-8 px-4 py-3 rounded-md outline-blue-600"
                        placeholder="Enter password"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        stroke="#bbb"
                        className="w-4.5 h-4.5 absolute right-4 cursor-pointer"
                        viewBox="0 0 128 128">
                        <path
                          d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                          data-original="#000000"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="text-right">
                    <a className="text-blue-600 text-sm font-medium hover:underline">
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div className="mt-8">
                  <button className="w-full shadow-xl py-2 px-4 text-[15px] font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
                    Sign in
                  </button>
                </div>
              </form>
              <p className="text-sm mt-6 text-center text-slate-600">
                Don&apos;t have an account{" "}
                <Link
                  href="/register"
                  className="text-blue-600 font-medium hover:underline ml-1 whitespace-nowrap">
                  Register here
                </Link>
              </p>
              <SocialMediaButton></SocialMediaButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
