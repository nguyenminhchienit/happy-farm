import "./style.css";
import NotFoundImg from "../../../assets/images/page-404.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notFound" style={{ marginTop: "150px" }}>
      <div className="container-fluid">
        <div className="box flex justify-center items-center flex-col">
          <img src={NotFoundImg} />
          <br />
          <br />
          <h2>Trang không tìm thấy</h2>

          <br />

          <div className="d-flex mt-3">
            <Button className="btn-g btn-lg m-auto">
              <Link to={"/"}>Trang chủ</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
