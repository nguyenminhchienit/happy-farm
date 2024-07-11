import { Outlet } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import ChatBot from "../private/Chatbot";

const PublicLayout = () => {
  return (
    <div className="">
      <Header />
      <div className="">
        <Outlet />
      </div>
      <ChatBot />
      <Footer />
    </div>
  );
};

export default PublicLayout;
