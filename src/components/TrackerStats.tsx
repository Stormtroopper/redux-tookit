import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { useEffect } from "react";
import { getTracker } from "../reducers/async_reducers";
import { Card, Flex, Progress } from "antd";
import type { Tracker } from "../reducers/reducers";
import { Typography } from "antd";
const {Title}=Typography;
const TrackerStat: React.FC = () => {
  const { trackers, isLoading, error } = useSelector(
    (state: RootState) => state.track
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTracker());
  }, []);
  const getCompleted = ():number => {
    const new_today= new Date().toISOString().split("T")[0];
    return trackers.filter((track: Tracker) =>
      track.completedDates.includes(new_today)
    ).length;
  };
  if (isLoading) {
    return (
      <>
        <Flex vertical gap="small" style={{ width: 180 }}>
          <Progress percent={30} size="small" />
        </Flex>
      </>
    );
  }
  if (error) {
    return (
      <>
        <Flex vertical gap="small" style={{ width: 180 }}>
          <Progress percent={30} size="small" />
        </Flex>
      </>
    );
  }
  return (
    <>
      <Card title="Default size card" style={{ width: 300 }}>
                <Title level={3}>Current Streak:{getCompleted()}</Title>
                <Title level={3}>Total Habits :{trackers.length}</Title>

      </Card>
    </>
  );
};

export default TrackerStat;
