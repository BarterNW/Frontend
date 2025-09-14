import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <div className="flex gap-4 my-6 w-[80%]">
      <button className="flex justify-center items-center p-2 border border-black rounded-lg  bg-white hover:bg-gray-50 text-black">
        <span className="inline-flex items-center justify-center ">
          <FcGoogle className="text-5xl md:text-2xl" />
          <span>Sign in with Google</span>
        </span>
      </button>
      <button className="flex justify-center items-center p-2 border border-black rounded-lg  bg-white hover:bg-gray-50 text-black">
        <span className="inline-flex items-center justify-center ">
          <FaApple className="text-5xl md:text-2xl" />
          <span>Sign in with Apple</span>
        </span>
      </button>
    </div>
  );
}