
import { Menu, } from 'antd';
import Sider from 'antd/es/layout/Sider';
import Link from 'next/link';


const items = [

    {
        key: 'sub1',
        label: "Project",
        children: [
            { key: '1', label: <Link href="/dashboard/project">All Projects</Link> },
            { key: '2', label: <Link href="dashboard/category">Category</Link> },

        ],
    },
    {
        key: 'sub2',
        label: "User",
        children: [
            { key: '3', label: <Link href="/dashboard/users">All Users</Link> },

        ],
    },
];

const DashboardSidebar = () => {


    return (

        <Sider  className="  border-r-[#dbdbdbf1] min-h-[calc(100vh)] pt-10 max-w-[220px]">
            <Menu
                theme='dark'
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
        </Sider>



    )
}

export default DashboardSidebar