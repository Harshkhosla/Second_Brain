import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createBrain, deleteBrain, getBrain } from '../../api/brainAPI';

export interface Tags {
    id: string; 
    title: string; 
}
export interface Brain {
    id: string;
    _id: string; 
    title: string;
    tags: Tags[];
    link: string;
    type: string;
}

interface BrainState {
    brains: Brain[] ;
    loading: boolean;
    error: string | null;
}

const initialState: BrainState = {
    brains: [],
    loading: false,
    error: null,
};




export const createBrainAsync = createAsyncThunk(
    'brain/createBrain',
    async ({ data, token }: { data: any; token: string }, thunkAPI) => {
        try {
            const response = await createBrain(data, token);
            // console.log(response.ContentCreated, "sdkccjdvsnd");

            return response.ContentCreated;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteBrainAsync = createAsyncThunk(
    'brain/deleteBrain',
    async({token,id}:{token:string,id:string},thunkAPI)=>{
        try{
            const response = await deleteBrain(token,id);
            console.log(response.updateddata);
            return response.updateddata ;

        }catch(error:any){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)
export const getBrainDataAync = createAsyncThunk(
    'brain/getData',
    async ({ token }: { token: string }, thunkAPI) => {
        try {
            const response = await getBrain(token);
            return response.message
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)


const brainSlice = createSlice({
    name: 'brain',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createBrainAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(createBrainAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.brains.push(action.payload);  
            })
            .addCase(createBrainAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(getBrainDataAync.pending, (state) => {
                state.loading = true;
            })
            .addCase(getBrainDataAync.fulfilled, (state, action) => {
                state.loading = false;
                state.brains = action.payload;
            })
            .addCase(getBrainDataAync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(deleteBrainAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteBrainAsync.fulfilled, (state, action) => {
                state.loading = false;
             state.brains=state.brains.filter((data)=>data._id!==action.payload._id);
            })
            .addCase(deleteBrainAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default brainSlice.reducer;
