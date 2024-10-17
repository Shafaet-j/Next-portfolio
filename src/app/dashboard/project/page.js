import { Button, Table } from 'antd'
import { PlusOutlined } from '@ant-design/icons'


import React from 'react'
import Link from 'next/link';

const Project = () => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Image',
            dataIndex: 'age',
        },
        {
            title: 'Description',
            dataIndex: 'address',
        },
        {
            title: 'Technology Used',
            dataIndex: 'address',
        },
        {
            title: 'Category',
            dataIndex: 'address',
        },
        {
            title: 'Published',
            dataIndex: 'address',
        },
        {
            title: 'Site Link',
            dataIndex: 'address',
        },
    ];

    return (
        <section className=' p-4'>
            <div className=' flex items-center justify-between'>
                <p>All Projects</p>
                <Link href="/dashboard/project/add">
                    <Button className='' type="primary" >
                        Add Product <PlusOutlined />
                    </Button>
                </Link>
            </div>
            <div>
                <Table columns={columns} />
            </div>
        </section>
    )
}

export default Project