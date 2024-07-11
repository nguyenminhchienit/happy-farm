const HinhThucMuaHang = () => {
  return (
    <div className="mt-[230px] px-[80px] md:px-10 lg:w-[1200px] text-justify">
      <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl mb-6">
        Hình thức mua hàng
      </h2>

      <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-4">
        Hình thức 1: Mua hàng trực tiếp tại Showroom
      </h3>
      <p className="mb-4">
        Quý khách có thể đến trực tiếp các Showroom của chúng tôi để xem và mua
        sản phẩm. Đội ngũ nhân viên chuyên nghiệp của chúng tôi sẽ luôn sẵn sàng
        hỗ trợ và tư vấn để quý khách chọn được sản phẩm ưng ý.
      </p>

      <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-4">
        Hình thức 2: Mua hàng qua điện thoại
      </h3>
      <p className="mb-4">
        Quý khách có thể gọi điện thoại đến Tổng đài 0356781111 để đặt hàng.
        Nhân viên của chúng tôi sẽ tư vấn và hỗ trợ quý khách một cách tận tình,
        giúp quý khách lựa chọn được sản phẩm phù hợp.
      </p>

      <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-4">
        Hình thức 3: Mua hàng trực tuyến
      </h3>
      <p className="mb-4">
        Quý khách có thể truy cập vào trang web{" "}
        <a href="http://nongsan24h.vn" className="text-blue-500">
          nongsan24h.vn
        </a>{" "}
        để đặt mua hàng trực tuyến. Quá trình mua hàng trực tuyến bao gồm các
        bước sau:
      </p>

      <h4 className="font-bold text-md md:text-lg lg:text-xl mb-2">
        Bước 1: Truy cập website và chọn sản phẩm
      </h4>
      <p className="mb-4">
        Truy cập vào website và lựa chọn sản phẩm cần mua để thêm vào giỏ hàng.
      </p>

      <h4 className="font-bold text-md md:text-lg lg:text-xl mb-2">
        Bước 2: Liên hệ hỗ trợ
      </h4>
      <p className="mb-4">
        Chat với nhân viên hỗ trợ trực tuyến qua kênh ZALO, Facebook hoặc gửi
        email về{" "}
        <a href="mailto:mrhung189@gmail.com" className="text-blue-500">
          mrhung189@gmail.com
        </a>{" "}
        ghi rõ mã sản phẩm cần mua, số lượng, đặc tính (lỗi, độ dày, tiêu
        chuẩn...).
      </p>

      <h4 className="font-bold text-md md:text-lg lg:text-xl mb-2">
        Bước 3: Chọn phương thức thanh toán
      </h4>
      <p className="mb-4">
        Lựa chọn phương thức thanh toán và chuyển khoản theo số tiền trên đơn
        hàng về một trong các tài khoản sau:
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>STK1</li>
        <li>STK2</li>
      </ul>

      <h4 className="font-bold text-md md:text-lg lg:text-xl mb-2">
        Bước 4: Xác nhận đơn hàng
      </h4>
      <p className="mb-4">
        Sau khi nhận được đơn hàng, chúng tôi sẽ liên hệ lại để xác nhận đơn
        hàng và thông tin nhận hàng.
      </p>

      <h4 className="font-bold text-md md:text-lg lg:text-xl mb-2">
        Bước 5: Vận chuyển
      </h4>
      <p className="mb-4">
        Hàng hóa sẽ được sản xuất, đóng gói và vận chuyển đến địa chỉ của quý
        khách.
      </p>

      <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-4">Lưu ý:</h3>
      <p className="mb-4">
        Quý khách vui lòng kiểm tra hàng hóa thật kỹ trước khi ký nhận. Chúng
        tôi không chịu trách nhiệm với những sai lệch hình thức của hàng hóa sau
        khi quý khách đã ký nhận hàng.
      </p>
      <p className="mb-4">
        Nếu có bất kỳ vấn đề gì về sản phẩm, vui lòng liên hệ ngay với chúng tôi
        để được hỗ trợ kịp thời.
      </p>
    </div>
  );
};

export default HinhThucMuaHang;
