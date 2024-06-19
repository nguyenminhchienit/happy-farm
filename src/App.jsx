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

function App() {
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
              path="/cat/:id"
              element={<Listing data={data.productData} single={false} />}
            />
            <Route exact={true} path="/gia-nong-san" element={<TablePrice />} />
            <Route exact={true} path="/cart" element={<Cart />} />
            <Route exact={true} path="/signIn" element={<SignIn />} />
            <Route exact={true} path="/signUp" element={<SignUp />} />
            <Route exact={true} path="*" element={<NotFound />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route exact={true} path="dash" element={<Dashboard />} />
          </Route>

          {/* <Route exact={true} path="/admin/dash" element={<Dashboard />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
