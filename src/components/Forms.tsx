import React, { useState } from "react";
import { useForm, } from "react-hook-form";
import { AntDesignOutlined } from "@ant-design/icons";
import { Alert, Button, Card, ConfigProvider, Flex, Radio, Space } from "antd";
import { useStyle } from "./styles/createStyle";
import { useDispatch } from "react-redux";
import { addTracker, type Frequency } from "../reducers/reducers";
type trackerinput = {
  name: string;
  frequency: Frequency;
};
const Tracker_Forms: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<trackerinput>();
  const { styles } = useStyle();
  const dispatch=useDispatch();
  const [close, setClose] = useState(false);
  const onClose = () => {
    setClose(true);
  };
  const onSubmit= (data:trackerinput)=>{
    if (data?.name && data?.frequency) {
      dispatch(addTracker({ name: data?.name, frequency: data?.frequency }));
      console.log("Submitted Data:", data);
      setValue("name",data?.name);
      setValue("frequency",data?.frequency);

    }
  }
  return (
    <>
      <Card title="Default size card" style={{ width: 300 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input defaultValue="chippichappa" {...register("name")} />
       {errors.name && !close && (
            <Alert
              message="Error while entering the name"
              description="Please enter a valid name"
              type="error"
              closable
              onClose={onClose}
            />
          )}
          {/* include validation with required or other standard HTML validation rules */}
          <Flex vertical gap="middle" defaultValue="daily">
            <Radio.Group buttonStyle="solid">
              <Radio {...register("frequency", { required: true })} />
            </Radio.Group>
          </Flex>

          <ConfigProvider
            button={{
              className: styles.linearGradientButton,
            }}
          >
            <Space>
              <Button type="primary" size="small" icon={<AntDesignOutlined />}>
                Add Tracker
              </Button>
            </Space>
          </ConfigProvider>
        </form>
      </Card>
    </>
  );
};

export default Tracker_Forms;
