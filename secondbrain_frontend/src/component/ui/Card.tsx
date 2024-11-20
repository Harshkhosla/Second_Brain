import { ReactElement } from "react"
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiShare2 } from 'react-icons/fi';
import { Chips } from "./Chips";
import { Tags } from "../../features/brain/brainSlice";
import { useBrain } from "../../hooks/useBrain";


interface Butonprops {
    Icon: ReactElement
    text: string
    tags?: Tags[]
    key: string
    cardIndex: string

}
// interface 
export const Card = ({ Icon, text, tags, cardIndex }: Butonprops) => {
    const { deleteBrain } = useBrain()
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyRGV0YWlsc2ZvdW5kIjp7Il9pZCI6IjY3M2M1ZTk3Y2Q2NDgwZGVmMWI0NzM0MyIsInVzZXJuYW1lIjoiaGFkZGVzcnNoaCIsImVtYWlsIjoiaHNzZGRkZHdoQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJC5VL3lGWEI0RDJJV3hmTktPMkpxMC5CY3pBd1dMRERCLlNla3dTUEZVTlVISVI2bld4S3lhIiwiX192IjowfSwiaWF0IjoxNzMyMDE4MzczfQ.n2Enl6Er4MJTLOX9aE2qKBI4HyNy4FpLDx6ruh_Cobk"
    const handelDelete = (token: string, key: string) => {
        deleteBrain(token, key)
    }
    return (
        <div className=" w-full max-w-[300px]  h-[320px] rounded-xl  gap-x-72 shadow-lg border-2">
            <div className="px-4 space-y-6 mt-4  ">

                <div className="flex justify-between items-center">
                    <div className="space-x-2 flex ">
                        <div className="mt-2">{Icon}</div>
                        <div className="text-xl font-semibold">{text}</div>
                    </div>
                    <div className="flex space-x-3 pr-4 ">
                        <div className="mt-2"><FiShare2 /></div>
                        <div className="mt-2 hover:cursor-pointer" onClick={() => handelDelete(token, cardIndex)}><RiDeleteBin5Line /></div>
                    </div>
                </div>

                <div className=" ">
                    <p>
                        The best way to lear is to build in public. Share you projects and get feedback and help other with along the way .
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {tags?.map((data, index) => (
                        <Chips key={index} text={data?.title} />
                    ))}
                </div>

                <div className=" pb-6 ">
                    Added on 10/2/23
                </div>
            </div>
        </div>
    )
}