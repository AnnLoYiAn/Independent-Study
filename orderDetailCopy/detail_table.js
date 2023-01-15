import computerImage from "../images/testComputer.jpg";

function DetailTable() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>商品資料</th>
            <th>顏色</th>
            <th>單件價格</th>
            <th>數量</th>
            <th>小計</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="productInfo">
              <div className="d-flex">
                <div className="d-flex align-items-center imageFrame">
                  <img
                    className="computerImage mx-2"
                    src={computerImage}
                    alt=""
                  />
                </div>
                <div className="imageWords d-flex align-items-center">
                  <p className="pt-3">
                    NuPhy Halo65 Wireless
                    <br />
                    Mechanical Keyboard
                  </p>
                </div>
              </div>
            </td>
            <td>黑black</td>
            <td>NT$1580</td>
            <td>1</td>
            <td>NT$1580</td>
          </tr>
          <tr>
            <td className="productInfo">
              <div className="d-flex">
                <div className="d-flex align-items-center imageFrame">
                  <img
                    className="computerImage mx-2"
                    src={computerImage}
                    alt=""
                  />
                </div>
                <div className="imageWords d-flex align-items-center">
                  <p className="pt-3">
                    NuPhy Halo65 Wireless
                    <br />
                    Mechanical Keyboard
                  </p>
                </div>
              </div>
            </td>
            <td>黑black</td>
            <td>NT$1580</td>
            <td>1</td>
            <td>NT$1580</td>
          </tr>
          <tr>
            <td className="productInfo">
              <div className="d-flex">
                <div className="d-flex align-items-center imageFrame">
                  <img
                    className="computerImage mx-2"
                    src={computerImage}
                    alt=""
                  />
                </div>
                <div className="imageWords d-flex align-items-center">
                  <p className="pt-3">
                    NuPhy Halo65 Wireless
                    <br />
                    Mechanical Keyboard
                  </p>
                </div>
              </div>
            </td>
            <td>黑black</td>
            <td>NT$1580</td>
            <td>1</td>
            <td>NT$1580</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
export default DetailTable;
