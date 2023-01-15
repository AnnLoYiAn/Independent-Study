import "./order_list.scss";
import OrderPath from "./order_path";
import OrderStatus from "./order_status";
import OrderSearch from "./order_search";
import FunctionToggle from "./function_toggle";
import BasicTable from "./order_table";
import BasicPagination from "./pagination";

function OrderList() {
  return (
    <>
      <div className="title p-5 d-flex">
        <h2 className=" fw-bold titleFirst">我</h2>
        <h2 className=" fw-bold">的訂單</h2>
      </div>
      <div className="Nav-title d-flex justify-content-between">
        <div className="d-flex px-3 detailPath">
          <OrderPath />
        </div>

        <div className="statusSearch">
          <div className="orderStatus">
            <OrderStatus />
          </div>
          <OrderSearch />
        </div>
      </div>
      <div className="tableFrame d-flex">
        <div className="tableLeft">
          <FunctionToggle />
        </div>
        <div className="tableRight">
          <BasicTable />
        </div>
      </div>
      <div className="paginatedOutside d-flex justify-content-end">
        <BasicPagination className="paginated" />
      </div>
    </>
  );
}
export default OrderList;
