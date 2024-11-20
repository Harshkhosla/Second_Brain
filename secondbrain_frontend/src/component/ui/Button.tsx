
import { ReactElement } from 'react';


interface ButtonProps {
    placeholder: string
    onClick: () => void
    variant?: "primary" | "secondary"
    size?: 'small' | 'medium' | 'large';
    Icon?: ReactElement
}

export default function Button({ placeholder, onClick, Icon, variant = "primary", size = "medium" }: ButtonProps) {


    const VariantsButton = {
        primary: " bg-[#5147E5] text-[#DDDEF6] hover:bg-blue-600 hover:shadow-lg  hover:text-purple-200 transition duration-200",
        secondary: "   bg-[#E1E8FF] text-[#3B33AD]  hover:bg-blue-300 hover:shadow-xl  hover:text-purple-700 transition duration-200"
    }


    const sizeClass = {
        small: 'px-2 py-1 text-sm',
        medium: 'md:px-4 px-1 py-2 text-base',
        large: 'px-6 py-3 text-lg',
    }
    return (
        <div >
            <button onClick={onClick} className={`flex  items-center rounded-lg ${sizeClass[size]} ${VariantsButton[variant]} md:px-4 md:py-2 text-sm md:text-lg font-medium `}>
                <div className='mr-2'>
                    {Icon}
                </div>
                {placeholder}
            </button>
        </div>
    );
}
