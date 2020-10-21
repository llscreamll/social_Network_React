import React, {useEffect} from 'react';
import "./App.css";
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from './components/Common/Reloader';
import {AppStateType} from './redux/redux-store';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import {
    AliwangwangOutlined,
    CustomerServiceOutlined,
    DesktopOutlined,
    TeamOutlined,
    UserOutlined
} from "@ant-design/icons";
import AppHeader from "./components/Header/Header";
import AppContent from "./AppContent/AppContent";


let App = () => {
    const initialized = useSelector((state:AppStateType) => state.appReducer.initialized)
    const dispatch = useDispatch()
    const { Content, Footer, Sider} = Layout;

    useEffect(() => {
        dispatch(initializeApp())
    }, [])


    if (!initialized) return <Preloader/>
    return (
            <Layout>
                <AppHeader />

                <Content >
                    <Layout className="site-layout-background">
                        <Sider className="site-layout-background" width={200}>
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{height:"100vh"}}>
                                <Menu.Item key="1" icon={<UserOutlined />}>
                                    <Link  to="/profile"> Profile</Link>
                                </Menu.Item>
                                <Menu.Item key="2" icon={<TeamOutlined />}>
                                    <Link  to="/users"> users </Link>
                                </Menu.Item>
                                <Menu.Item key="3" icon={<AliwangwangOutlined  />}>
                                    <Link  to="/messages"> Messages </Link>
                                </Menu.Item>
                                <Menu.Item key="4" icon={<DesktopOutlined />}>
                                    <Link  to="/news" > News</Link>
                                </Menu.Item>
                                <Menu.Item key="5" icon={<CustomerServiceOutlined />}>
                                    <Link  to="/music" > Music</Link>
                                </Menu.Item>
                            </Menu>
                        </Sider>

                    < AppContent />

                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2020</Footer>
            </Layout>

    )

}



export default App;

