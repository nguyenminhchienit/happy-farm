import {useState} from "react"
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
import { ManageVoucher } from "./components/Admin/Voucher/ManageVoucher";
import CreateVoucher from "./components/Admin/Voucher/CreateVoucher";
import { ManageOrder } from "./components/Admin/Order/ManageOrder";
import Contact from "./components/contact/Contact";
import Topic from "./components/topic/Topic";
import Checkout from "./pages/public/checkout";


// Origin
import CreateOrigin from "./components/Admin/Origin/CreateOrigin"
import ManageOrigin from "./components/Admin/Origin/ManageOrigin"
import EditOrigin from "./components/Admin/Origin/EditOrigin";


// brand
import  CreateBrand  from "./components/Admin/Brand/CreateBrand";
import  ManageBrand  from "./components/Admin/Brand/ManageBrand";
import EditBrand from "./components/Admin/Brand/EditBrand";

// type fertilizer
import CreateTypeFertilizer from "./components/Admin/TypeFertilizer/CreateTypeFertilizer";
import ManageTypeFertilizer from "./components/Admin/TypeFertilizer/ManageTypeFertilizer";
import EditTypeFertilizer from "./components/Admin/TypeFertilizer/EditTypeFertilizer";

// product 
import EditProduct from "./components/Admin/Product/EditProduct";

//  user
import EditUser from "./components/Admin/User/EditUser";

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
            <Route exact={true} path="/gia-nong-san" element={<TablePrice />} />
            <Route exact={true} path="/lien-he" element={<Contact />} />
            <Route exact={true} path="/bai-viet" element={<Topic />} />
            <Route exact={true} path="/cart" element={<Cart />} />
            <Route exact={true} path="/checkout" element={<Checkout />} />
            <Route exact={true} path="/signIn" element={<SignIn />} />
            <Route exact={true} path="/signUp" element={<SignUp />} />
            <Route exact={true} path="*" element={<NotFound />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route exact={true} path="dash" element={<Dashboard />} />
            <Route exact={true} path="manage-order" element={<ManageOrder />} />
            
            
            {/* product  */}
            <Route
              exact={true}
              path="manage-product"
              element={<ManageProduct setSelectedItem={setSelectedItem} />}
            />

            <Route
              exact={true}
              path="/admin/edit-product/:id"
              element={ <EditProduct item={selectedItem} /> }
            />
            <Route
              exact={true}
              path="add-product"
              element={<CreateProduct />}
            />

            {/* user */}
            <Route exact={true} path="manage-users" element={<ManageUser setSelectedItem={setSelectedItem} />} />
            <Route exact={true} path="add-user" element={<CreateUser />} />
            <Route exact={true} path="/admin/edit-user/:id" element={ <EditUser item={selectedItem} />  } />
            <Route
              exact={true}
              path="manage-voucher"
              element={<ManageVoucher />}
            />
            <Route
              exact={true}
              path="add-voucher"
              element={<CreateVoucher />}
            />

            {/*  nguồn gốc xuất xứ */}
            <Route
              exact={true}  
              path="add-origin"
              element={<CreateOrigin />}
            />

            <Route
              exact={true}
              path="manage-origin"
              element={<ManageOrigin setSelectedItem={setSelectedItem}  />}
            />

            <Route
              exact={true}
              path="edit-origin/:id"
              element={<EditOrigin item={ selectedItem }  />}
            />


            {/* thương hiệu */}
            <Route
              exact={true}  
              path="add-brand"
              element={<CreateBrand />}
            />

            <Route
              exact={true}
              path="manage-brand"
              element={<ManageBrand setSelectedItem={setSelectedItem} />}
            />

            <Route
              exact={true}
              path="edit-brand/:id"
              element={<EditBrand item={ selectedItem } />}
              // item là tên props 
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
              element={<ManageTypeFertilizer setSelectedItem={setSelectedItem} />}
            />
               
            <Route
              exact={true}
              path="edit-type-fertilizer/:id"
              element={<EditTypeFertilizer item={ selectedItem } />}
              // item là tên props 
            />

            
            
          </Route>
          {/* <Route exact={true} path="/admin/dash" element={<Dashboard />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
