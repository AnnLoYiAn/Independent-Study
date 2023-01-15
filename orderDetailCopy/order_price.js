function OrderPrice() {
  return (
    <>
      <div className="subtotalInfo pt-5">
        <div className="d-flex justify-content-between mb-3">
          <div>小計:</div>
          <div>NT$1580</div>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <div>運費:</div>
          <div>NT$60</div>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <div>優惠代碼折扣:</div>
          <div>- NT$100</div>
        </div>
        <div className="d-flex justify-content-between fw-bold">
          <div>合計:</div>
          <div>NT$1580</div>
        </div>
      </div>
    </>
  );
}
export default OrderPrice;
