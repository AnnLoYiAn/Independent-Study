import "./coupon.scss";
import FunctionToggle from "../../../orderList/function_toggle";
import CouponPath from "./coupon_path";
import Toggle from "./toggle";
import CouponUnExpired from "./coupon_unexpired";
import CouponExpired from "./coupon_expired";
import BasicPagination from "./paggination";

function Coupon() {
  return (
    <>
      <div className="position-absolute detailPath d-flex">
        <CouponPath />
      </div>
      <div className="title p-5 mb-5">
        <div className="titleContent">
          <h2 className=" fw-bold titleFirst">優</h2>
          <h2 className=" fw-bold">惠券</h2>
        </div>
      </div>
      <div className="tableFrame d-flex">
        <div className="tableLeft">
          <FunctionToggle />
        </div>
        <div className="tableRight">
          <div className="unExpired">
            <div className="unExpiredWord">未過期 / 可使用</div>
            <div className="d-flex">
              <Toggle />
            </div>
          </div>
          <div className="unExpiredCoupon">
            <CouponUnExpired />
          </div>
          <div className="expired">
            <div className="expiredWord">已過期 / 不可使用</div>
          </div>
          <div className="expiredCoupon">
            <CouponExpired />
          </div>
          <div className="d-flex justify-content-end">
            <BasicPagination />
          </div>
        </div>
      </div>
    </>
  );
}
export default Coupon;
