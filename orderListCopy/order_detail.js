import { Link } from "react-router-dom";
function OrderDetail() {
  return (
    <>
      <button className="btnDetail">
        <Link to="/profile/orders/:id" className="btnContent">
          查看詳細
        </Link>
      </button>
    </>
  );
}
export default OrderDetail;
