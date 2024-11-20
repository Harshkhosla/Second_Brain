import Button from "./ui/Button"
import { FaPlus } from "react-icons/fa6";
import { FiShare2 } from 'react-icons/fi';

interface Headerprops {
    addContent: () => void
    shareLink: () => void
}

export const Header = ({ shareLink, addContent }: Headerprops) => {
    return (
        <div className="flex justify-between items-center py-6">
            <div className="text-4xl font-bold">
                All Notes
            </div>
            <div className='flex justify-end  space-x-8'>
                <Button placeholder={"Share Brain"} Icon={<FiShare2 />} onClick={shareLink} variant={"primary"} />
                <Button placeholder={"Add Content"} Icon={<FaPlus />} onClick={addContent} variant={"secondary"} />
            </div>
        </div>
    )
}