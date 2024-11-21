

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { Form } from './ui/Form';
import { ImCross } from "react-icons/im";
import { useBrain } from '../hooks/useBrain';

interface Modalprops {
    open: boolean
    setOpen: (value: boolean) => void;
    title: string
    form: boolean
}


export const Modal = ({ open, setOpen, title, form }: Modalprops) => {

    const { Links } = useBrain()

    const handleCopy = async () => {
        const linkToCopy = Links || ""; // Default to an empty string if Links is undefined
        await window.navigator.clipboard.writeText(linkToCopy);
        console.log("Copied to clipboard:", linkToCopy);
    };
    
    // console.log(Links);
    return (
        <div>
            <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white md:max-w-96 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex items-center justify-center ">
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <div className='flex justify-end items-start' onClick={() => setOpen(false)}><ImCross /></div>
                                        <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                                            {title}
                                        </DialogTitle>
                                        {
                                            form ?
                                                <div className="mt-2">
                                                    <Form open={open} setOpen={setOpen} />
                                                </div>
                                                :
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        Sharing you content to others here is the url
                                                        {/* {Links} */}
                                                    </p>
                                                </div>
                                        }
                                    </div>
                                </div>
                            </div>
                            {
                                form ?
                                    "" :

                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            onClick={handleCopy}
                                            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                        >
                                            Copy to Clip Board
                                        </button>                    
                                    </div>
                            }
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}