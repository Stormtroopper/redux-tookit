import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Tracker } from "./reducers";
export const getTracker=createAsyncThunk('tracker/fetchTracker',async()=>{
await new Promise((resolve)=>setTimeout(resolve,1000));
    const mockTrackers: Tracker[] = [
  {
    id: '1',
    name: 'Morning Walk',
    frequency: { frequency: 'daily' },
    createdAt: '2024-08-01T08:00:00.000Z',
    completedDates: []
  },
  {
    id: '2',
    name: 'Weekly Report',
    frequency: { frequency: 'weekly' },
    createdAt: '2024-07-20T10:00:00.000Z',
    completedDates: []
  },
  {
    id: '3',
    name: 'Read a Book',
    frequency: { frequency: 'daily' },
    createdAt: '2024-08-05T21:00:00.000Z',
    completedDates: []
  }
];
return mockTrackers;
})
// Create the async thunk with an endpoint
// export const fetchUserById = createAsyncThunk(
//   'users/fetchById',
//   async (userId) => {
//     const response = await fetch(`/api/users/${userId}`)
//     return response.json()
//   }
// )
