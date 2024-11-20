import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store";
import { createBrainAsync, deleteBrainAsync, getBrainDataAync } from "../features/brain/brainSlice";

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useBrain = () => {


    const dispatch = useAppDispatch()
    const brains = useSelector((state: RootState) => state.brain.brains)
    const loading = useSelector((state: RootState) => state.brain.loading);
    const error = useSelector((state: RootState) => state.brain.error);


    const createBrain = (data: any, token: string) => {
        dispatch(createBrainAsync({ data, token }));
    };

    const getBrainData = (token:string)=>{
        dispatch(getBrainDataAync({token}))
    }

    const deleteBrain =(token:string, id:string)=>{
        dispatch(deleteBrainAsync({token, id}))
    }
    return { brains, loading, error, createBrain  ,getBrainData,deleteBrain}
}