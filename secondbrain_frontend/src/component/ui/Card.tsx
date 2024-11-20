import { ReactElement } from "react"
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiShare2 } from 'react-icons/fi';
import { Chips } from "./Chips";


interface Butonprops {
    Icon: ReactElement
    text: string

}

export const Card = ({ Icon, text }: Butonprops) => {
    return (
        <div className="w-[80vw] md:w-[300px] lg:w-[300px]  h-[320px] rounded-xl   shadow-lg border-2">
            <div className="px-4 space-y-6 mt-4 ">

                <div className="flex justify-between items-center">
                    <div className="space-x-2 flex ">
                        <div className="mt-2">{Icon}</div>
                        <div className="text-xl font-semibold">{text}</div>
                    </div>
                    <div className="flex space-x-3 pr-4 ">
                        <div className="mt-2"><FiShare2 /></div>
                        <div className="mt-2"><RiDeleteBin5Line /></div>
                    </div>
                </div>

                <div className=" ">
                    <p>
                        The best way to lear is to build in public. Share you projects and get feedback and help other with along the way .
                    </p>
                </div>
                <Chips text={"#producitivity"} />
                <div className=" pb-6 ">
                    Added on 10/2/23
                </div>
            </div>
        </div>
    )
}