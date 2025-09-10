export default function Card({img,title,cont}){
    return(
        <div className="w-[80%] h-70 bg-gray-200 rounded-lg my-6 flex flex-col items-center justify-center mx-auto">
          <div className="w-[90%] h-40 bg-gray-100">
            <img
              src={img}
              alt="Barter Now Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col items-start justify-start mt-4 px-4">
            <h2 className="text-lg text-black font-semibold mb-2">{title}</h2>
            <p className="text-gray-500 mb-2 text-sm text-left">{cont}</p>
          </div>
        </div>
    )
}
