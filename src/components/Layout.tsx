import { Alert, Col, Layout, Menu, Row } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AlertContext } from "../AlertContext";

const { Content } = Layout;
const { SubMenu } = Menu;

export const MyLayout: React.FC = ({ children }) => {
  const [current, setCurrent] = useState("home");
  const [alert, setAlert] = useState<string[]>([]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content>
        <Menu
          onClick={(e) => setCurrent(e.key as string)}
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <SubMenu title="Challenges">
            <Menu.Item key="challenge-24">
              <Link to="/challenge-24">Challenge 24</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
        <Row>
          <Col sm={0} md={4} lg={8}></Col>
          <Col sm={24} md={16} lg={8}>
            <AlertContext.Provider value={{ alert, setAlert }}>
              {alert.map((msg) => (
                <Alert message={msg} closable />
              ))}
              {children}
            </AlertContext.Provider>
          </Col>
          <Col sm={0} md={4} lg={8}></Col>
        </Row>
      </Content>
    </Layout>
  );
};
