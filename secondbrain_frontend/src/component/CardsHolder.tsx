import { Brain } from "../features/brain/brainSlice"
import { Card } from "./ui/Card"
import { FiShare2 } from 'react-icons/fi';

interface CardsDetails {
    brains: Brain[]
}

export const CardsHolder = ({ brains }: CardsDetails) => {
    return (
        <div className=" flex mt-10 justify-center items-center">
            {
                brains?.length > 0 ? (
                    <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 space-y-10 md:space-y-0 md:gap-x-5   md:gap-y-7'>
                        {brains.map((brain) => (
                            <Card key={brain.id} Icon={<FiShare2 />} cardIndex={brain._id} tags={brain.tags} text={brain.title} />
                        ))}
                    </div>
                ) : (
                    <p>There are no content please add the contents</p>
                )
            }

        </div>
    )
}