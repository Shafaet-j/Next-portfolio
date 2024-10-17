"use client"
import { Button } from 'antd';
import { Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import {

    MenuFoldOutlined,
    MenuUnfoldOutlined,

} from '@ant-design/icons';

const AdminHeader = ({ setCollapsed, collapsed }) => {


    return (

        <Header
            className=' h-20 bg-gray-200 p-0 flex justify-between'
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
            Header
        </Header>

    )
}

export default AdminHeader