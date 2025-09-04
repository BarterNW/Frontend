import { FaArrowRight } from "react-icons/fa6";

export default function Button(){
    return(
        <div className="text-center mt-6 mb-4">
        <button
          className="text-white text-sm px-8 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors duration-300 flex justify-center iteams-center"
          style={{ backgroundColor: "#061C47" }}
        >
          Get Started As Brand <FaArrowRight />
        </button>
      </div>
    )
}