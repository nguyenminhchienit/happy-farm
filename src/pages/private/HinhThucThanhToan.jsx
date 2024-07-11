const HinhThucThanhToan = () => {
  return (
    <div className="mt-[230px] px-[80px] md:px-10 lg:w-[1200px] text-justify">
      <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl mb-6">
        Hình thức thanh toán
      </h2>

      <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-4">
        Thanh toán khi nhận hàng (COD)
      </h3>
      <p className="mb-4">
        Quý khách có thể chọn phương thức thanh toán khi nhận hàng. Với phương
        thức này, quý khách sẽ thanh toán trực tiếp cho nhân viên giao hàng ngay
        khi nhận được sản phẩm.
      </p>

      <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-4">
        Chuyển khoản ngân hàng
      </h3>
      <p className="mb-4">
        Quý khách có thể chuyển khoản số tiền thanh toán theo số tiền trên đơn
        hàng về một trong các tài khoản ngân hàng sau:
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>STK1 </li>
        <li>STK2 </li>
      </ul>
      <p className="mb-4">
        Sau khi chuyển khoản, quý khách vui lòng thông báo cho chúng tôi qua
        email hoặc hotline để chúng tôi xác nhận và tiến hành xử lý đơn hàng.
      </p>

      <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-4">
        Thanh toán qua ví điện tử
      </h3>
      <p className="mb-4">
        Quý khách có thể thanh toán qua các ví điện tử như Momo, ZaloPay,
        ViettelPay. Thông tin tài khoản ví điện tử sẽ được cung cấp khi quý
        khách chọn phương thức này.
      </p>

      <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-4">
        Thanh toán bằng thẻ tín dụng/ghi nợ
      </h3>
      <p className="mb-4">
        Chúng tôi chấp nhận thanh toán bằng các loại thẻ tín dụng và thẻ ghi nợ.
        Quý khách chỉ cần cung cấp thông tin thẻ qua hệ thống thanh toán bảo mật
        của chúng tôi.
      </p>

      <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-4">Lưu ý</h3>
      <p className="mb-4">
        Quý khách vui lòng kiểm tra kỹ thông tin tài khoản và số tiền thanh toán
        trước khi thực hiện giao dịch. Mọi sai sót trong quá trình chuyển khoản
        hoặc thanh toán không đúng số tiền sẽ không được giải quyết.
      </p>
      <p className="mb-4">
        Nếu có bất kỳ thắc mắc hoặc vấn đề nào về các phương thức thanh toán,
        quý khách vui lòng liên hệ với chúng tôi qua hotline hoặc email để được
        hỗ trợ.
      </p>
    </div>
  );
};

export default HinhThucThanhToan;
