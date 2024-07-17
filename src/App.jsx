import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./responsive.css";
import data from "./data";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/public/Home/Home";
import DetailsPage from "./pages/public/Details";
import NotFound from "./pages/public/NotFound";
import SignIn from "./pages/public/SignIn";
import SignUp from "./pages/public/SignUp";
import Dashboard from "./pages/admin/Dashboard/Dashboard";
import PublicLayout from "./pages/public/PublicLayout";
import Listing from "./pages/public/Listing";
import Cart from "./pages/public/cart";
import AdminLayout from "./pages/admin/AdminLayout";
import { TablePrice } from "./components/TablePrice/TablePrice";
import { ManageProduct } from "./components/Admin/Product/ManageProduct";
import CreateProduct from "./components/Admin/Product/CreateProduct";
import { ManageUser } from "./components/Admin/User/ManageUser";
import CreateUser from "./components/Admin/User/CreateUser";

import ManageVoucher from "./components/Admin/Voucher/ManageVoucher";

import CreateVoucher from "./components/Admin/Voucher/CreateVoucher";
import { ManageOrder } from "./components/Admin/Order/ManageOrder";
import Contact from "./components/contact/Contact";
import Topic from "./components/topic/Topic";
import Checkout from "./pages/public/checkout";
import { Blog } from "./pages/public/Blog/Blog";
import Thanks from "./pages/public/Thanks/Thanks";

// Origin
import CreateOrigin from "./components/Admin/Origin/CreateOrigin";
import ManageOrigin from "./components/Admin/Origin/ManageOrigin";
import EditOrigin from "./components/Admin/Origin/EditOrigin";

// brand
import CreateBrand from "./components/Admin/Brand/CreateBrand";
import ManageBrand from "./components/Admin/Brand/ManageBrand";
import EditBrand from "./components/Admin/Brand/EditBrand";

// type fertilizer
import CreateTypeFertilizer from "./components/Admin/TypeFertilizer/CreateTypeFertilizer";
import ManageTypeFertilizer from "./components/Admin/TypeFertilizer/ManageTypeFertilizer";
import EditTypeFertilizer from "./components/Admin/TypeFertilizer/EditTypeFertilizer";

import EditProduct from "./components/Admin/Product/EditProduct";

//  user
import EditUser from "./components/Admin/User/EditUser";

import HuongDanMuaHang from "./pages/private/HuongDanMuaHang";
import QuyTrinhVanChuyen from "./pages/private/QuyTrinhVanChuyen";
import HinhThucMuaHang from "./pages/private/HinhThucMuaHang";
import HinhThucThanhToan from "./pages/private/HinhThucThanhToan";

import ManageUserBanned from "./components/Admin/User/ManageUserBanned";

// PaymentMethod
import ManagePaymentMethod from "./components/Admin/PaymentMethod/ManagePaymentMethod";
import CreatePaymentMethod from "./components/Admin/PaymentMethod/CreatePaymentMethod";
import EditPaymentMethod from "./components/Admin/PaymentMethod/EditPaymentMethod";

// voucher
import EditVoucher from "./components/Admin/Voucher/EditVoucher";

// role
import CreateUserRole from "./components/Admin/UserRole/CreateUserRole";
import EditUserRole from "./components/Admin/UserRole/EditUserRole";
import ManageUserRole from "./components/Admin/UserRole/ManageUserRole";

import BlogAdmin from "./components/Admin/Blog/BlogAdmin";
import DetailBlog from "./pages/public/Blog/DetailBlog";
import ManageBlog from "./components/Admin/Blog/ManageBlog";
import EditBlog from "./components/Admin/Blog/EditBlog";

// banner
import CreateBanner from "./components/Admin/Banner/CreateBanner";
import EditBanner from "./components/Admin/Banner/EditBanner";
import ManageBanner from "./components/Admin/Banner/ManageBanner";

function App() {
  const [selectedItem, setSelectedItem] = useState({});

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route
              exact={true}
              path=""
              element={<Home data={data.productData} />}
            />
            <Route exact={true} path="/bai-viet" element={<Blog />} />
            <Route exact={true} path="/bai-viet/:id" element={<DetailBlog />} />
            <Route
              exact={true}
              path="/product/:id"
              element={<DetailsPage data={data.productData} />}
            />
            <Route
              exact={true}
              path="/phan-bon/:id"
              element={<Listing data={data.productData} single={false} />}
            />
            <Route
              exact={true}
              path="/phan-bon"
              element={<Listing data={data.productData} single={false} />}
            />
            <Route exact={true} path="/thanks" element={<Thanks />} />
            <Route exact={true} path="/gia-nong-san" element={<TablePrice />} />
            <Route exact={true} path="/lien-he" element={<Contact />} />
            <Route exact={true} path="/bai-viet" element={<Topic />} />
            <Route exact={true} path="/cart" element={<Cart />} />
            <Route exact={true} path="/checkout" element={<Checkout />} />
            <Route exact={true} path="/signIn" element={<SignIn />} />
            <Route exact={true} path="/signUp" element={<SignUp />} />

            <Route
              exact={true}
              path="/huong-dan-mua-hang"
              element={<HuongDanMuaHang />}
            />
            <Route
              exact={true}
              path="/quy-trinh-van-chuyen"
              element={<QuyTrinhVanChuyen />}
            />
            <Route
              exact={true}
              path="/hinh-thuc-mua-hang"
              element={<HinhThucMuaHang />}
            />
            <Route
              exact={true}
              path="/hinh-thuc-thanh-toan"
              element={<HinhThucThanhToan />}
            />

            <Route exact={true} path="*" element={<NotFound />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route exact={true} path="dash" element={<Dashboard />} />
            <Route exact={true} path="manage-order" element={<ManageOrder />} />

            <Route exact={true} path="create-blog" element={<BlogAdmin />} />
            <Route exact={true} path="manage-blog" element={<ManageBlog />} />

            <Route
              exact={true}
              path="/admin/edit-blog/:id"
              element={<EditBlog />}
            />

            <Route
              exact={true}
              path="manage-product"
              element={<ManageProduct setSelectedItem={setSelectedItem} />}
            />

            <Route
              exact={true}
              path="/admin/edit-product/:id"
              element={<EditProduct item={selectedItem} />}
            />
            <Route
              exact={true}
              path="add-product"
              element={<CreateProduct />}
            />

            {/* user */}

            <Route
              exact={true}
              path="/admin/manage-users"
              element={<ManageUserBanned setSelectedItem={setSelectedItem} />}
            />
            <Route
              exact={true}
              path="manage-users-NotBanned"
              element={<ManageUser setSelectedItem={setSelectedItem} />}
            />
            <Route exact={true} path="add-user" element={<CreateUser />} />
            <Route
              exact={true}
              path="/admin/edit-user/:id"
              element={<EditUser item={selectedItem} />}
            />

            {/* mã giảm giá */}
            <Route
              exact={true}
              path="manage-voucher"
              element={<ManageVoucher setSelectedItem={setSelectedItem} />}
            />
            <Route
              exact={true}
              path="add-voucher"
              element={<CreateVoucher />}
            />

            <Route
              exact={true}
              path="edit-voucher/:id"
              element={<EditVoucher item={selectedItem} />}
            />

            {/*  nguồn gốc xuất xứ */}
            <Route exact={true} path="add-origin" element={<CreateOrigin />} />
            <Route
              exact={true}
              path="manage-origin"
              element={<ManageOrigin setSelectedItem={setSelectedItem} />}
            />

            <Route
              exact={true}
              path="edit-origin/:id"
              element={<EditOrigin item={selectedItem} />}
            />

            {/* thương hiệu */}
            <Route exact={true} path="add-brand" element={<CreateBrand />} />

            <Route
              exact={true}
              path="manage-brand"
              element={<ManageBrand setSelectedItem={setSelectedItem} />}
            />

            <Route
              exact={true}
              path="edit-brand/:id"
              element={<EditBrand item={selectedItem} />}
            />

            {/* loại phân bón */}
            <Route
              exact={true}
              path="add-typefertilizer"
              element={<CreateTypeFertilizer />}
            />

            <Route
              exact={true}
              path="manage-typefertilizer"
              element={
                <ManageTypeFertilizer setSelectedItem={setSelectedItem} />
              }
            />

            <Route
              exact={true}
              path="edit-type-fertilizer/:id"
              element={<EditTypeFertilizer item={selectedItem} />}
              // item là tên props
            />

            {/* phương thức thanh toán */}
            <Route
              exact={true}
              path="manage-PaymentMethod"
              element={
                <ManagePaymentMethod setSelectedItem={setSelectedItem} />
              }
              // item là tên props
            />

            <Route
              exact={true}
              path="add-PaymentMethod"
              element={<CreatePaymentMethod />}
              // item là tên props
            />

            <Route
              exact={true}
              path="edit-PaymentMethod/:id"
              element={<EditPaymentMethod item={selectedItem} />}
              // item là tên props
            />

            {/* quyền người dùng */}
            <Route
              exact={true}
              path="/admin/manage-userRoles"
              element={<ManageUserRole setSelectedItem={setSelectedItem} />}
              // item là tên props
            />

            <Route
              exact={true}
              path="/admin/add-UserRole"
              element={<CreateUserRole />}
            />

            <Route
              exact={true}
              path="/admin/edit-UserRole/:id"
              element={<EditUserRole item={selectedItem} />}
            />
            {/* quan ly banner */}
            <Route
              exact={true}
              path="/admin/manage-Banner"
              element={<ManageBanner setSelectedItem={setSelectedItem} />}
              // item là tên props
            />

            <Route
              exact={true}
              path="/admin/add-Banner"
              element={<CreateBanner />}
            />

            <Route
              exact={true}
              path="/admin/edit-Banner/:id"
              element={<EditBanner item={selectedItem} />}
            />
          </Route>
          {/* <Route exact={true} path="/admin/dash" element={<Dashboard />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
