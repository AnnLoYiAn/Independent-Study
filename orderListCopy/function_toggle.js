import { Link } from "react-router-dom";
function FunctionToggle() {
  return (
    <>
      <ul>
        <li>
          <Link className="btnLink btnHover">會員中心</Link>
        </li>
        <li>
          <Link to="/profile/orders" className="btnLink btnHover">
            我的訂單
          </Link>
        </li>
        <li>
          <Link to="/profile/coupon" className="btnLink btnHover">
            優惠券
          </Link>
        </li>
        <li>
          <Link className="btnLink btnHover">聊天室</Link>
        </li>
        <li>
          <Link className="btnLink btnHover">購物車</Link>
        </li>
        <li>
          <Link className="btnLink btnHover">評價總覽</Link>
        </li>
        <li>
          <Link className="btnLink btnHover">收藏清單</Link>
        </li>
      </ul>
    </>
  );
}
export default FunctionToggle;
