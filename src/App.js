import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import TableContent from "./Components/TableContent/TableContent.jsx";
import { Layout, Menu } from "antd";
import { UnorderedListOutlined, IdcardOutlined } from "@ant-design/icons";
const { Content, Sider } = Layout;

function App() {
  const [data, setData] = useState({ columns: null, data: null });

  const [collapsed, setCollapse] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [dataClick, setDataClick] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiColumns = await axios.get(
          "https://beta.citorleu.kz/v1/common/columns"
        );
        const apiData = await axios.get(
          "https://beta.citorleu.kz/v1/common/data"
        );
        setData({ columns: apiColumns.data, data: apiData.data });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const onCollapsed = (collapsed) => {
    setCollapse(collapsed);
  };

  const showModal = (item, record) => {
    setIsModalVisible(true);
    setDataClick({ item, record });
  };

  const handleOk = (obj) => {
    try {
      setIsModalVisible(false);
      //axios.post("https://beta.citorleu.kz/v1/common/data", obj);
      console.log(obj)
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDeleteMark = (obj) => {
    try {
      // axios.delete(
      //   `https://beta.citorleu.kz/v1/common/data/${obj.key}`
      // );
      console.log(obj)
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="App">
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            theme="light"
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapsed}
          >
            <Menu defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1" icon={<IdcardOutlined />}>
                <Link to="/journal">Журналы</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<UnorderedListOutlined />}>
                <Link to="/plans">Планы</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Content
              style={{ margin: "24px", background: "#fff", padding: "24px" }}
            >
              <Routes>
                <Route path="/" element={<Navigate replace to="/journal" />} />
                <Route
                  path="/journal"
                  element={
                    <TableContent
                      info={data}
                      handleOk={handleOk}
                      handleCancel={handleCancel}
                      showModal={showModal}
                      isModalVisible={isModalVisible}
                      dataClick={dataClick}
                      handleDeleteMark={handleDeleteMark}
                    />
                  }
                />
                <Route path="/plans" element={<h1>Hello world!</h1>} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
