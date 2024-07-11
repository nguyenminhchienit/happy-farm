import { Outlet } from "react-router-dom";
import SidebarAdmin from "../../components/Admin/SiderbarAdmin";

const AdminLayout = () => {
  return (
    <div className="flex">
      <SidebarAdmin />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
