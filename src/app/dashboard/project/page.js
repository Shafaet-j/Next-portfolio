"use client"
import { Button, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Project = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading,setIsloading] = useState(false)

    // Fetch data on component mount
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/api/projects/all`, {
                method: 'POST',
            });
            const result = await response.json();
            setIsloading(true)
            setProjects(result.data || []); // Assuming data comes in `data` field
        };
        fetchData();
    }, []);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Image',
            dataIndex: 'images',
            key: 'image',
            render: (images) => (
                images && images.length > 0 ? (
                    <div style={{ display: 'flex', gap: '5px' }}>
                        {images.map((img, index) => (
                            <img key={index} src={img} alt={`Project Image ${index + 1}`} style={{ width: '50px' }} />
                        ))}
                    </div>
                ) : 'No Image'
            ),
        },
        {
            title: 'Technology Used',
            dataIndex: 'technology_used',
            key: 'technology_used',
            render: (technology_used) => (
                technology_used && technology_used.length > 0 ? (
                    <div className=' flex flex-wrap gap-1'>
                        {technology_used.map((tech, index) => (
                            <span className=' bg-teal-100 px-1 rounded' key={index}>{tech}</span>
                        ))}
                    </div>
                ) : 'Not Used'
            ),
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Published',
            dataIndex: 'published',
            key: 'published',
            render: (text) => (text ? 'Yes' : 'No'),
        },
        {
            title: 'Site Link',
            dataIndex: 'site_link',
            key: 'site_link',
            render: (text) => <a href={text} target="_blank" rel="noopener noreferrer">Visit</a>,
        },
    ];

    return (
        <section className='p-4'>
            <div className='flex items-center justify-between mb-5'>
                <p>All Projects</p>
                <Link href="/dashboard/project/add">
                    <Button type="primary">
                        Add Project <PlusOutlined />
                    </Button>
                </Link>
            </div>
            <div>
                <Table loading={!isLoading} columns={columns} dataSource={projects} rowKey="id" />
            </div>
        </section>
    );
};

export default Project;
