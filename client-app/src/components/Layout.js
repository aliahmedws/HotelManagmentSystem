import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  CalendarOutlined,
  ShopOutlined,
  PlusOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Row, Col } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
function menuItem(key) {
  if (key === "1" || key === "/guests" || key === "/guests/form")
    return "Customers"
  else if (key === "4" || key === "/hotel-rooms" || key === "/hotel-rooms/form")
    return "Hotel Rooms"
  else if (key === "7" || key === "/bookings" || key === "/bookings/form" || key === "/bookings/calendar")
    return "Bookings"
  else return "Home"
}
const items = [
  getItem("Home", "/", <HomeOutlined />),
  getItem("Customers", "1", <TeamOutlined />, [
    getItem("View All", "/guests", <TeamOutlined />),
    getItem("Create New", "/guests/form", <PlusOutlined />),
  ]),
  getItem("Hotel Rooms", "4", <ShopOutlined />, [
    getItem("View All", "/hotel-rooms", <ShopOutlined />),
    getItem("Create New", "/hotel-rooms/form", <PlusOutlined />),
  ]),
  getItem("Bookings", "7", <CalendarOutlined />, [
    getItem("View All", "/bookings", <CalendarOutlined />),
    getItem("Calender", "/bookings/calendar", <CalendarOutlined/>),
    getItem("Create New", "/bookings/form", <PlusOutlined />),
  ]),
];

export default function AppLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  let path = location.pathname;

  if(path.includes("form/")){
    path = path.substring(0, path.lastIndexOf("/form"));
  }
  const [selectedMenu, setSelectedMenu] = useState(menuItem(path));

  useEffect(()=>{
    setSelectedMenu(menuItem(path))
  },[path])

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={path}
          items={items}
          onClick={({ key }) => {
            navigate(key);
          }}
        />
      </Sider>
     <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Row>
            <Col>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                }}
              />
            </Col>
            <Col>
              <b
                style={{
                  color: "#2b4e87",
                  fontSize: "25px",
                  text: "bold",
                  width: 64,
                  height: 64,
                }}
              >
                {selectedMenu}
              </b>
            </Col>
          </Row>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "85vh",
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}