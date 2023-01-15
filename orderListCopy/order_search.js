function OrderSearch() {
  return (
    <>
      <div className="input-group ">
        <input
          ype="text"
          className="form-control inputSearch"
          placeholder="搜尋訂單..."
        />
        <button className="btn btnSearch" type="button">
          搜尋
        </button>
      </div>
    </>
  );
}
export default OrderSearch;
