import OrderDetail from "./order_detail";
import OrderInvalid from "./order_invalid";
function BasicTable() {
  return (
    <>
      <table>
        <tr>
          <th>訂單編號</th>
          <th>日期</th>
          <th>總金額</th>
          <th>運送方式</th>
          <th>付款方式</th>
          <th>訂單狀態</th>
          <th>出貨狀態</th>
          <th>操作</th>
        </tr>
        <tr>
          <td className="OrderNumber">20221214196</td>
          <td>2022/12/14</td>
          <td>NT $2090</td>
          <td>超取</td>
          <td>ATM轉帳</td>
          <td>
            訂單成立
            <br />
            已繳費
          </td>
          <td>已出貨</td>
          <td>
            <OrderDetail />
          </td>
        </tr>
        <tr>
          <td className="OrderNumber">20221214196</td>
          <td>2022/12/14</td>
          <td>NT $2090</td>
          <td>超取</td>
          <td>ATM轉帳</td>
          <td>
            訂單成立
            <br />
            已繳費
          </td>
          <td>已出貨</td>
          <td>
            <OrderDetail />
          </td>
        </tr>
        <tr>
          <td className="OrderNumber">20221214196</td>
          <td>2022/12/14</td>
          <td>NT $2090</td>
          <td>超取</td>
          <td>ATM轉帳</td>
          <td>
            訂單成立
            <br />
            已繳費
          </td>
          <td>已出貨</td>
          <td>
            <OrderDetail />
          </td>
        </tr>
        <tr>
          <td className="OrderNumber">20221214196</td>
          <td>2022/12/14</td>
          <td>NT $2090</td>
          <td>超取</td>
          <td>ATM轉帳</td>
          <td>
            訂單成立
            <br />
            已繳費
          </td>
          <td>已出貨</td>
          <td>
            <OrderDetail />
          </td>
        </tr>
        <tr className="OrderSpecial">
          <td>20221214196</td>
          <td>2022/12/14</td>
          <td>NT $2090</td>
          <td>超取</td>
          <td>ATM轉帳</td>
          <td>訂單取消</td>
          <td>-</td>
          <td>
            <OrderInvalid />
          </td>
        </tr>
        <tr className="borderNone">
          <td className="OrderNumber">20221214196</td>
          <td>2022/12/14</td>
          <td>NT $2090</td>
          <td>超取</td>
          <td>ATM轉帳</td>
          <td>
            訂單成立
            <br />
            已繳費
          </td>
          <td>已出貨</td>
          <td>
            <OrderDetail />
          </td>
        </tr>
      </table>
    </>
  );
}
export default BasicTable;
