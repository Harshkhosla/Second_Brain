
import { useForm, SubmitHandler } from "react-hook-form"
import { useBrain } from "../../hooks/useBrain";
interface FormValues {
    title: string
    tags: string;
    link: string
    type: string
}

interface Formprops {
    open: boolean
    setOpen: (value: boolean) => void;
}
export const Form = ({open,setOpen}:Formprops) => {
    const {createBrain}= useBrain()
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
        const processedData = {
            ...data,
            tags: data.tags.split(",").map((tag) => tag.trim()),
        };
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyRGV0YWlsc2ZvdW5kIjp7Il9pZCI6IjY3M2M1ZTk3Y2Q2NDgwZGVmMWI0NzM0MyIsInVzZXJuYW1lIjoiaGFkZGVzcnNoaCIsImVtYWlsIjoiaHNzZGRkZHdoQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJC5VL3lGWEI0RDJJV3hmTktPMkpxMC5CY3pBd1dMRERCLlNla3dTUEZVTlVISVI2bld4S3lhIiwiX192IjowfSwiaWF0IjoxNzMyMDE4MzczfQ.n2Enl6Er4MJTLOX9aE2qKBI4HyNy4FpLDx6ruh_Cobk"
        createBrain(processedData,token)
        setOpen(!open)
        reset();
    };
    return (
        <div className="w-full mx-auto">
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        {...register("title", { required: "Title is required" })}
                        className={`block w-full border rounded-lg px-3 py-2 ${errors.title ? "border-red-500" : "border-gray-300"
                            }`}
                        placeholder="Enter title"
                    />
                    {errors.title && <span className="text-red-500 text-sm">not worikinv</span>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Tags</label>
                    <input
                        {...register("tags", { required: "Tags are required" })}
                        className={`block w-full border rounded-lg px-3 py-2 ${errors.tags ? "border-red-500" : "border-gray-300"
                            }`}
                        placeholder="Enter tags (comma-separated)"
                    />
                    {errors.tags && <span className="text-red-500 text-sm">{errors.tags.message}</span>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Link</label>
                    <input
                        {...register("link", { required: "Link is required" })}
                        className={`block w-full border rounded-lg px-3 py-2 ${errors.link ? "border-red-500" : "border-gray-300"
                            }`}
                        placeholder="Enter link"
                    />
                    {errors.link && <span className="text-red-500 text-sm">{errors.link.message}</span>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Type</label>
                    <input
                        {...register("type", { required: "Type is required" })}
                        className={`block w-full border rounded-lg px-3 py-2 ${errors.type ? "border-red-500" : "border-gray-300"
                            }`}
                        placeholder="Enter type"
                    />
                    {errors.type && <span className="text-red-500 text-sm">{errors.type.message}</span>}
                </div>


                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}