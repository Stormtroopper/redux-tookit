import { message } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTracker, type Tracker,deleteTracker } from "../reducers/reducers";
import { trackers } from "../components/Tracker_List";
export const [open, setOpen] = useState(false);
const [condition, setCondition] = useState(true);
const current_date = new Date().toISOString().split("T")[0];
const dispatch = useDispatch();
export const changeCondition = (checked: boolean) => {
  setCondition(checked);
};

export const toggle = () => {
  setOpen(false);
  trackers.map((tracker) => {
    dispatch(toggleTracker({ id: tracker.id, date: current_date }));
  });
  message.success("Next step.");
};
export const delete_tracker=()=>{
   setOpen(false);
  trackers.map((tracker) => {
    dispatch(deleteTracker({ id: tracker.id}));
  });
  message.success("Deleted step.");
}
export const generateStreak=(tracker:Tracker)=>{
let streak=1;

while(true){
  const new_date = new Date().toISOString().split("T")[0];
  if(tracker?.completedDates?.includes(new_date)){
    streak++;
    new Date().setDate(new Date().getDate()-1)
  }else{
    break;
  }
}
}
export const cancel = () => {
  setOpen(false);
  message.error("Click on cancel.");
};

export const handleOpenChange = (newOpen: boolean) => {
  if (!newOpen) {
    setOpen(newOpen);
    return;
  }

  if (condition) {
    confirm(); // next step
  } else {
    setOpen(newOpen);
  }
};
