import zaloIcon from "../../assets/images/zalo-icon.png";
import "./ani.css";

const Social = () => {
  return (
    <a href="https://zalo.me/0392845906">
      <img
        className="w-[78px] h-[78px] shake"
        src={zaloIcon}
        alt="Mô tả hình ảnh"
      />
    </a>
  );
};

export default Social;
