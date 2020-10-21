import React from 'react'
import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Logout} from "../../redux/auth-reducer";
import Row from "antd/lib/row";
import Col from "antd/es/grid/col";
import Menu from "antd/lib/menu";
import Avatar from "antd/lib/avatar/avatar";
import {UserOutlined} from "@ant-design/icons";
import 'antd/dist/antd.css';
import Layout from "antd/lib/layout";
import {AppStateType} from "../../redux/redux-store";
import {Button} from "antd";

const {Header } = Layout;


const AppHeader = () => {

    const isAuth = useSelector((state:AppStateType) => state.auth.isAuth)
    const login = useSelector((state:AppStateType) => state.auth.login)
    const dispatch = useDispatch()

    const logoutOut = () =>{

        dispatch(Logout())
    }

    return (
        <Header className="header">
            <div className="logo"/>
            <Row >
                <Col flex="auto">
                    {/*<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>*/}
                    <audio style={{width:"200px",height:"20px"}} src="http://air.radiorecord.ru:8101/rr_320" autoPlay={false} controls={true}></audio>
                    {/*    <Menu.Item key="1"><Link  to="/users"> users </Link></Menu.Item>*/}
                    {/*</Menu>*/}
                </Col>




                    {(isAuth === false) ?
                        <Col flex="100px">
                        <NavLink to={'/login'}>
                            <div> <Button >Login</Button>  </div>
                        </NavLink>
                        </Col>
                        :
                        <>
                            <Col flex="50ppx">
                                <span style={{color:"white"}}>{login}</span>

                                <Avatar style={{ backgroundColor: '#87d068',margin:"0px 40px 0px 40px" }}
                                        icon={<UserOutlined />
                                        } />


                                <Button onClick={logoutOut}>Выход</Button>
                            </Col>

                        </>
                    }



            </Row>
        </Header>

    )
}


export default AppHeader;



