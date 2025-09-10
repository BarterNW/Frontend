export default function Inputs(){
    return(
        <form className="space-y-4 w-[70%]">
          <input
            type="email"
            defaultValue="xyz@gmail.com"
            className="w-full border border-black rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          />
          <input
            type="password"
            className="w-full border border-black rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
  
          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-md my-6">
            <label className="flex items-center gap-2 text-black">
              <input type="radio" className="accent-black" />
              Remember me
            </label>
            <a href="#" className="text-black hover:underline">
              Forgot Password?
            </a>
          </div>
  
          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-[#061C47] text-white py-2 h-[3.75rem] hover:bg-blue-700 transition rounded-full mt-3"
          >
            Sign In
          </button>
        </form>
    )
}