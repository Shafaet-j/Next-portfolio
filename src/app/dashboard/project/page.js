"use client";
import { Button, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getAllProject } from "@/action/projectData";


const Project = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch data on component mount
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const result = await getAllProject();
                console.log(result)
                if (result?.data) {
                    setProjects(result.data); // <-- depends on API response shape
                } else {
                    setProjects([]);
                }
            } catch (error) {
                console.error("Error fetching projects:", error);
                setProjects([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const columns = [
        {
            title: "Name",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Image",
            dataIndex: "images",
            key: "image",
            render: (images) =>
                images && images.length > 0 ? (
                    <div style={{ display: "flex", gap: "5px" }}>
                       
                            <img
                                src={images[0]}
                                alt={`Project Image`}
                                style={{ width: "50px", height:"50px",objectFit:'cover' }}
                            />
                     
                    </div>
                ) : (
                    "No Image"
                ),
        },
        {
            title: "Technology Used",
            dataIndex: "technology_used",
            key: "technology_used",
            render: (technology_used) =>
                technology_used && technology_used.length > 0 ? (
                    <div className="flex flex-wrap gap-1">
                        {technology_used.map((tech, index) => (
                            <span className="bg-teal-100 px-1 rounded" key={index}>
                                {tech}
                            </span>
                        ))}
                    </div>
                ) : (
                    "Not Used"
                ),
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
        },
        {
            title: "Published",
            dataIndex: "isActive",
            key: "published",
            render: (text) => (text ? "Yes" : "No"),
        },
        {
            title: "Site Link",
            dataIndex: "liveSite",
            key: "liveSite",
            render: (text) =>
                text ? (
                    <a href={text} target="_blank" rel="noopener noreferrer">
                        Visit
                    </a>
                ) : (
                    "-"
                ),
        },
    ];

    return (
        <section className="p-4">
            <div className="flex items-center justify-between mb-5">
                <p>All Projects</p>
                <Link href="/dashboard/project/add">
                    <Button type="primary">
                        Add Project <PlusOutlined />
                    </Button>
                </Link>
            </div>
            <div>
                <Table
                    loading={isLoading}
                    columns={columns}
                    dataSource={projects}
                    rowKey="_id" // <-- adjust based on backend (id / _id)
                />
            </div>
        </section>
    );
};

export default Project;
