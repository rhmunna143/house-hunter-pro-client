import { Outlet } from "react-router-dom";

const DashLayout = () => {
    return (
        <div>
            d root
            
            <Outlet />
        </div>
    );
};

export default DashLayout;