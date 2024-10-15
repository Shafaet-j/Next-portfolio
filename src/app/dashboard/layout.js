import DashboardSidebar from "@/components/admin/sidebar";

const Dashboardlayout = ({ children }) => {

    return (
        <div className="">
            <DashboardSidebar children={children} />
        </div>
    );
};

export default Dashboardlayout;