export default function SwitchLink({a,b}){
    return(
        <p className="mt-6 text-md text-gray-700">
          {a}
          <a href="#" className="text-black hover:underline">
            {b}
          </a>
        </p>
    )
}
