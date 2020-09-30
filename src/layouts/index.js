import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {Breadcrumb, Layout, Menu} from 'antd';
import {DesktopOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from '@ant-design/icons'

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

export default class BasicLayout extends React.Component {

    state = {
        collapsed: false
    }

    onCollapse = (collapsed) => {
        this.setState({collapsed: collapsed})
    }

    render() {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider collapsible={true}>
                    <div className="logo"/>
                    <Menu theme='dark' mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key='1' icon={<PieChartOutlined/>}>Option 1</Menu.Item>
                        <Menu.Item key='2' icon={<DesktopOutlined/>}>Option 2</Menu.Item>
                        <SubMenu key='sub1' title='User' icon={<UserOutlined/>}>
                            <Menu.Item key='sub1-1'>Tom</Menu.Item>
                            <Menu.Item key='sub1-2'>Bill</Menu.Item>
                            <Menu.Item key='sub1-3'>Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu key='sub2' title='Team' icon={<TeamOutlined/>}>
                            <Menu.Item key='sub2-1'>Team 1</Menu.Item>
                            <Menu.Item key='sub2-2'>Team 2</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>

                <Layout className='site-layout'>
                    <Header className='site-layout-background' style={{padding: 0}}/>
                    <Content style={{margin: '0 16px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className='site-layout-background' style={{padding: 24, minHeight: 360}}>
                            Bill is a cat.
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>React & Ant Design</Footer>
                </Layout>
            </Layout>
        );
    }
}