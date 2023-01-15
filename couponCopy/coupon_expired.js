import { AiOutlineShopping } from "react-icons/ai";
function CouponExpired() {
  return (
    <>
      <div className="Coupon2">
        <div className="CouponLeft">
          <div className="CouponIcon">
            <AiOutlineShopping className="shoppingIcon" />
          </div>
          <div className="CouponContent">
            1212 <br />
            購物狂歡節
          </div>
        </div>
        <div className="CouponRight">
          <div className="CouponUp">
            <div className="discount">9.5 折</div>
            <div className="lowest">低消 $1000</div>
          </div>
          <div className="CouponDown">
            <div className="date">12/18 生效</div>
            <div className="rules">使用規則</div>
          </div>
        </div>
      </div>
      <div className="Coupon2">
        <div className="CouponLeft">
          <div className="CouponIcon">
            <AiOutlineShopping className="shoppingIcon" />
          </div>
          <div className="CouponContent">
            1212 <br />
            購物狂歡節
          </div>
        </div>
        <div className="CouponRight">
          <div className="CouponUp">
            <div className="discount">9.5 折</div>
            <div className="lowest">低消 $1000</div>
          </div>
          <div className="CouponDown">
            <div className="date">12/18 生效</div>
            <div className="rules">使用規則</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CouponExpired;
