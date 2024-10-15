"use client"
import React, { useState } from 'react';

import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,

} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content, Footer } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [

    getItem('Projects', 'sub1', <UserOutlined />, [
        getItem('All Projects', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />,
        [
            getItem('Team 1', '6'),
            getItem('Team 2', '8')
        ]
    ),
    getItem('Files', '9', <FileOutlined />),
];

const DashboardSidebar = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className=' h-screen'>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="demo-logo-vertical" />
                    <div>
                        logo
                    </div>
                    <Menu
                        className=' pt-10'
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={items}
                    />
                </Sider>
                <Layout>
                    <Header
                        className=' h-[10vh] bg-gray-200'
                    >
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                    </Header>
                    <Content className='min-h-[calc(100vh-160px)]'>
                        {children}
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        Front-end Developer ©{new Date().getFullYear()} Created by Shafaet Hossen
                    </Footer>
                </Layout>
            </Layout>
        </div>
    )
}

export default DashboardSidebar