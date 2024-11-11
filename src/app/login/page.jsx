"use client"
import { Button, Checkbox, Form, Input } from 'antd';
import { useRouter } from 'next/navigation';

import toast from 'react-hot-toast';


const LoginPage = () => {
    const router = useRouter()

    const onFinish = async (values) => {
     
       try {
           const { email, password } = values
           const res = await fetch("http://localhost:3000/api/user/login",
               {
                   method: 'POST',
                   headers: { 'Content-Type': 'application/json' },
                   body: JSON.stringify({ email, password })
               }
           )

           const data = await res.json()
           if(data.success){
               toast.success(data.message)
               router.push('/dashboard')
           }else{
            toast.error(data.message)
           }
        
       } catch (error) {
       console.log(error)
       }
      
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <section className=' h-screen w-full flex items-center justify-center'>
            <div className=' border p-10 rounded'>
                <Form
                    name="basic"
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" label={null}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </section>
    )
}

export default LoginPage