import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const SocialMediaButton = () => {
  const params = useSearchParams();
  const handleLogin = async () => {
    await signIn("google", {
      callbackUrl: params.get("callbackUrl") || "/",
    });
  };

  return (
    <div>
      <button
        onClick={handleLogin}
        className="w-full shadow-xl py-2 px-4 text-[15px] font-medium rounded-md text-blue-600 cursor-pointer mt-5 flex items-center justify-center gap-2">
        <FcGoogle className="text-xl" /> Login with Google
      </button>
    </div>
  );
};

export default SocialMediaButton;
