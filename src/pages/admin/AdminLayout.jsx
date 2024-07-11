/* eslint-disable no-unused-vars */
import { Navigate, Outlet } from "react-router-dom";
import SidebarAdmin from "../../components/Admin/SiderbarAdmin";

const AdminLayout = () => {
  const storedData = localStorage.getItem("user");
  const dataObject = storedData ? JSON.parse(storedData) : null;

  if (!dataObject || dataObject.roles.nameRoles !== "ROLE_ADMIN") {
    return <Navigate to={`/signIn`} replace={true} />;
  }

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
