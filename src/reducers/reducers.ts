import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getTracker } from "./async_reducers";
export type Frequency={
    frequency :"daily" | "weekly"
}
export interface Tracker {
  id:String,
  name: string;
  frequency: Frequency;
  createdAt: string;
  completedDates: [];
}
interface TotalTracker{
    trackers:Tracker[]
    isLoading:boolean;
    error:null|string
}
export const initialState:TotalTracker = {
    trackers:[],
    isLoading:false,
    error:null
};
export const newTrackerSlice = createSlice({
  name: "tracker",
  initialState,
  reducers: {
    //add reducer action
    addTracker:(state,action:PayloadAction<{name:string,frequency:Frequency}>)=>{
        const addedHabit:Tracker={
            id:Date.now().toString(),
            name:action?.payload?.name,
            frequency:action?.payload?.frequency,
            completedDates:[],
            createdAt:new Date().toISOString(),
        }
        state.trackers.push(addedHabit);
    },
    toggleTracker:(state,action:PayloadAction<{id:string,date:string}>)=>{
      const track=state.trackers.find(tr=>tr.id===action.payload.id);
      if(track){
        const index=track.completedDates.indexOf(action?.payload.date);
        index>-1?track.completedDates.splice(index,1):track.completedDates.push(action.payload.date);
      } 
    },
    deleteTracker:(state,action:PayloadAction<{id:string}>)=>{
      state.trackers = state.trackers.filter(
        (tracker) => tracker.id !== action.payload.id
      );
    },
  },extraReducers:(builder)=>{
    builder.addCase(getTracker.pending,state=>{
      state.isLoading=true;
    }).addCase(getTracker.fulfilled,(state,action:PayloadAction<any>)=>{
      state.isLoading=false,
      state.trackers=action?.payload;
    }).addCase(getTracker.rejected,(state,action:PayloadAction<any>)=>{
      state.isLoading=true,
      state.error=action?.payload?.error?.message||'Unable to fetch data';
    })
  },
});
export const {addTracker,toggleTracker,deleteTracker}=newTrackerSlice.actions;
export default newTrackerSlice.reducer;