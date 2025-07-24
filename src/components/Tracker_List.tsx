import { useSelector } from "react-redux";
import React from "react";
import type { RootState } from "../store/store";
import { Button, Card, Col, Divider, Popconfirm, Row ,Typography} from "antd";
import {
  cancel,
  toggle,delete_tracker,
  handleOpenChange,
  open,generateStreak
} from "../utils/confirm-delete_actions";
export const { trackers } = useSelector((state: RootState) => {
  return state.track;
});
const { Title } = Typography;
const Tracker_List: React.FC = () => {
  return (
    <>
      <Divider orientation="left">Tracker</Divider>
      {trackers.map((tracker) => {
        return (
          <>
            <Row>
              <Col span={24}>{tracker?.name}</Col>
              <Col span={24}>{tracker?.frequency}</Col>
              <Popconfirm
                title="Toogle Task"
                description="Completed this task?"
                open={open}
                onOpenChange={handleOpenChange}
                onConfirm={toggle}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <Button type="default">Completed Tracker</Button>
              </Popconfirm>
              <Popconfirm
                title="Remove Task"
                description="Want to remove this task?"
                open={open}
                onOpenChange={handleOpenChange}
                onConfirm={delete_tracker}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <Button danger>Remove Tracker</Button>
              </Popconfirm>
            </Row>
           <Card style={{ width: 300 }}>
                <Title level={2}>Current Streak:{generateStreak(tracker)}</Title>
           </Card>
          </>
        );
      })}
    </>
  );
};
export default Tracker_List;
