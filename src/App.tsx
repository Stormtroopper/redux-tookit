import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { Typography, Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Tracker_Forms from "./components/Forms";
import Tracker_List from "./components/Tracker_List";
const { Title } = Typography;
function App() {
  return (
    <>
      <Layout>
        <Content>
          <Provider store={store}>
            <Title>Welcome to my tracker app</Title>
            <Title level={2}>Track your daily activities</Title>
            <Tracker_Forms/>
            <Tracker_List/>
          </Provider>
        </Content>
      </Layout>
    </>
  );
}

export default App;
