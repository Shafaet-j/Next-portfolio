
import AdminHeader from "@/components/admin/admin-header";
import DashboardSidebar from "@/components/admin/sidebar";
import Layout, { Content, Footer } from "antd/es/layout/layout";

const Dashboardlayout = ({ children }) => {


    return (
        <div className=" ">
            <Layout hasSider>
                <DashboardSidebar />
                <Layout >
                    <AdminHeader />
                    <Content className="min-h-[calc(100vh-120px)] bg-[#f0f2f5] ">
                        {children}
                    </Content>

                    <Footer className=" text-center h-10" >
                        Front-end Developer ©{new Date().getFullYear()} Created by Shafaet Hossen
                    </Footer>
                </Layout>

            </Layout>



        </div>
    );
};

export default Dashboardlayout;