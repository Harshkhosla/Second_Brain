
interface Chipsprops {
    text : string
}

export const Chips = ({text}:Chipsprops) => {
    return (
        <button className="bg-[#c2d2fe]  text-purple-600  px-1 text-lg rounded-xl">
            {text}
        </button>
    )
}