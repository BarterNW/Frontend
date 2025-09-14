export default function Header({head,cont}){
    return(
       <>
         <h1 className="text-4xl text-black font-bold mb-2">{head}</h1>
         <p className="text-xl text-gray-500 mb-6">{cont}</p>
       </> 
    )
}
