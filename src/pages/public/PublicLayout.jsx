import { Outlet } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
// import ChatBot from "../private/Chatbot";
import Social from "../private/Social";

const PublicLayout = () => {
  return (
    <div className="relative">
      <Header />
      <div className="">
        <Outlet />
      </div>
      {/* <ChatBot /> */}
      <div className="fixed right-[20px] bottom-[40px]">
        <Social />
      </div>
      <Footer />
    </div>
  );
};

export default PublicLayout;
