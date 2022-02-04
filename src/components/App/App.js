import "./App.css";
// import { Avatar } from "antd";
// import { UserOutlined } from "@ant-design/icons";
// import SheepCounter from "../SheepCounter/index";
// import LoginButton from "../LoginButton/LoginButton";
// import LogoutButton from "../LogoutButton/LogoutButton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login";
import Error from "../../Pages/Error";

function App() {
  return (
    <Router>
      {/* <div className="App">
        <header className="App-header">
          <LoginButton />
          <LogoutButton />
          <Avatar size={64} shape={"circle"} icon={<UserOutlined />} />
          <p> Count sheep before bed </p>
          <SheepCounter />
        </header>
      </div> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
