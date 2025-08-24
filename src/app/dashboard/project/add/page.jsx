"use client";
import { Card, Select, Button, Form, Input, Upload, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from "react";
import toast from 'react-hot-toast';
import { creteProject } from '@/action/projectData';
import { useRouter } from 'next/navigation';


const AddProject = () => {
    const [isLoading, setIsloading] = useState(false)
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState([]);
    const [imgUrls, setImgUrls] = useState([]);
    const router = useRouter();


    const onFinish = async (values) => {
        setIsloading(true)
        const finalData = { ...values, images: imgUrls };
        console.log(finalData)
        await addProject(finalData);
        setIsloading(false);

    };

    // async function addProject(data) {
    //     console.log(data)
    //     const res = await creteProject(data)
    //     console.log(res,"res")
    // }

    async function addProject(data) {
        try {
            const res = await toast.promise(
                creteProject(data),
                {
                    loading: "Creating project...",
                    success: "Project created successfully! 🎉",
                    error: "Something went wrong 😢",
                }
            );
            router.push("dashboard/project")
            console.log(res, "res");
        } catch (err) {
            console.error(err);
        }
    }

    const normFile = (e) => (Array.isArray(e) ? e : e?.fileList);

    const customUpload = async ({ file, onSuccess, onError }) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'hbegd0g6'); // Cloudinary upload preset

        try {
            const response = await fetch(`https://api.cloudinary.com/v1_1/dboyxw8mg/image/upload`, {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            setImgUrls((prev) => [...prev, data.url]);

            if (response.ok) {
                setFileList((prevList) => [...prevList, { uid: data.public_id, name: file.name, status: 'done', url: data.secure_url }]);
                onSuccess("Ok");
            } else {
                onError('Upload error');
            }
        } catch (error) {
            onError(error);
        }
    };

    return (
        <div className="p-3 overflow-y-scroll">

            <Form layout="vertical" onFinish={onFinish} autoComplete="off" className="grid grid-cols-3 gap-5">
                <Card title="Project Name" className="col-span-1">
                    <Form.Item label="Project Name" name="title" rules={[{ required: true, message: 'Please input project name!' }]}>
                        <Input />
                    </Form.Item>
                </Card>

                <Card title="Description" className="col-span-2">
                    <Form.Item label="Description" name="info" rules={[{ required: true, message: 'Please input description!' }]}>
                        <Input />
                    </Form.Item>
                </Card>

                <Card title="Project Images" className="col-span-2">
                    <Form.Item name="images" label="Upload Images" valuePropName="fileList" getValueFromEvent={normFile}>
                        <Upload customRequest={customUpload} listType="picture-card" fileList={fileList}>
                            {fileList.length >= 8 ? null : (
                                <div>
                                    <PlusOutlined />
                                    <div style={{ marginTop: 8 }}>Upload</div>
                                </div>
                            )}
                        </Upload>
                    </Form.Item>
                </Card>

                <div className=' space-y-2'>
                    <Card title="Category">
                        <Form.Item label="Category" name="category" rules={[{ required: true, message: 'Please select a category!' }]}>
                            <Select>
                                <Select.Option value="Full-stack">Full Stack</Select.Option>
                                <Select.Option value="Frontend">Frontend</Select.Option>
                                <Select.Option value="Backend">Backend</Select.Option>
                            </Select>
                        </Form.Item>
                    </Card>
                    <Card title="Technology Used">

                        <Form.Item label="Technology Used" name="technology_used" rules={[{ required: true, message: 'Please select a category!' }]}>
                            <Select mode='tags'>

                            </Select>
                        </Form.Item>
                    </Card>
                </div>

                <Card title="Liev link" className="col-span-1">

                    <Form.Item label="Live site link" name="liveSite" rules={[{ required: true, message: 'Please input live site!' }]}>
                        <Input />
                    </Form.Item>
                </Card>
                <Card title="Client link" className="col-span-1">

                    <Form.Item label="Github client link" name="client">
                        <Input />
                    </Form.Item>


                </Card>
                <Card title="Server link" className="col-span-1">

                    <Form.Item label="Github server link" name="server">
                        <Input />
                    </Form.Item>

                </Card>

                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={isLoading}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AddProject;
