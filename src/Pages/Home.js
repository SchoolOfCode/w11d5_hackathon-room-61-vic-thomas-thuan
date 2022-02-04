import React from "react";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import SheepCounter from "../components/SheepCounter/index";

import LogoutButton from "../components/LogoutButton/LogoutButton";

export default function Home() {
  return (
    <div>
      <header className="App-header">
        <LogoutButton />
        <Avatar size={64} shape={"circle"} icon={<UserOutlined />} />
        <p> Count sheep before bed </p>
        <SheepCounter />
      </header>
    </div>
  );
}
