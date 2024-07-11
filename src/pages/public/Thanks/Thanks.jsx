import { useLocation } from "react-router-dom";
const Thanks = () => {
  const location = useLocation();
  const { data } = location.state;
  return (
    <div className="mt-[200px] h-[500px] text-success text-6xl font-bold flex justify-content-center align-items-center">
      {data ? data : "Cảm ơn bạn đã mua hàng tại HAPPY FARM"}
    </div>
  );
};

export default Thanks;
