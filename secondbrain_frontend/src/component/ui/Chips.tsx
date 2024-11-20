
interface Chipsprops {
    text : string 
}

export const Chips = ({text}:Chipsprops) => {
    
    return (
        <button className="bg-[#c2d2fe]  text-purple-600  px-2 text-md  rounded-xl">
            {text}
        </button>
    )
}