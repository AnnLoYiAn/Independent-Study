import "./order_detail.scss";
import FunctionToggle from "../orderList/function_toggle";
import OrderPrice from "./order_price";
import DetailTable from "./detail_table";
import OrderCoupon from "./order_coupon";
import OrderInfo from "./order_info";
import OrderComment from "./order_comment";
import DetailPath from "./detail_path";
import DetailNumber from "./detail_number";

function OrderDetail() {
  return (
    <>
      <div className="position-absolute detailPath d-flex">
        <DetailPath />
      </div>
      <div className="title p-5 mb-5">
        <div className="d-flex mb-5 justify-content-center">
          <h2 className=" fw-bold titleFirst">訂</h2>
          <h2 className=" fw-bold">單詳細</h2>
        </div>
        <div>
          <DetailNumber />
        </div>
      </div>
      <div className="tableFrame d-flex">
        <div className="tableLeft">
          <FunctionToggle />
        </div>
        <div className="tableRight">
          <DetailTable />
          <div className="Coupon">
            <OrderCoupon />
          </div>
          <div className="subtotal pb-5">
            <OrderPrice />
          </div>
          <div className="underBox">
            <OrderInfo />
          </div>
          <div className="comments">
            <OrderComment />
          </div>
        </div>
      </div>
    </>
  );
}
export default OrderDetail;
