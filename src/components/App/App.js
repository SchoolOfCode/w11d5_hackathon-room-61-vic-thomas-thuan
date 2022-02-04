import "./App.css";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import SheepCounter from "../SheepCounter/index";
import LoginButton from "../LoginButton/LoginButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginButton />
        <Avatar size={64} shape={"circle"} icon={<UserOutlined />} />
        <p> Count sheep before bed </p>
        <SheepCounter />
      </header>
    </div>
  );
}

export default App;
