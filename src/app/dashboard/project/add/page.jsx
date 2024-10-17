"use client";
import { Card, Select, Button, Form, Input, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from "react";

const AddProject = () => {
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState([]);
    const [imgUrls, setImgUrls] = useState([]);

    const onFinish = async (values) => {
        const finalData = { ...values, images: imgUrls };
        try {
            const response = await fetch("http://localhost:5000/api/projects/add", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(finalData),
            });

            if (response.ok) {
                
                form.resetFields(); // Reset form fields after success
                setFileList([]); // Clear file list if necessary
                setImgUrls([]); // Clear uploaded image URLs
                const data = await response.json();
                console.log('Server response:', data);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

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
        <div className="p-3">
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

                <Card title="Category">
                    <Form.Item label="Category" name="category" rules={[{ required: true, message: 'Please select a category!' }]}>
                        <Select>
                            <Select.Option value="full-stack">Full Stack</Select.Option>
                            <Select.Option value="frontend">Frontend</Select.Option>
                            <Select.Option value="backend">Backend</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item  label="Technology Used" name="technology_used" rules={[{ required: true, message: 'Please select a category!' }]}>
                        <Select mode='tags'>
                           
                        </Select>
                    </Form.Item>
                </Card>

                <Card className="col-span-3">
                    <div className="flex gap-4">
                        <Form.Item className="w-1/3" label="Live site link" name="liveSite" rules={[{ required: true, message: 'Please input live site!' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item className="w-1/3" label="Github client link" name="client">
                            <Input />
                        </Form.Item>
                        <Form.Item className="w-1/3" label="Github server link" name="server">
                            <Input />
                        </Form.Item>
                    </div>
                </Card>

                <Form.Item>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AddProject;
