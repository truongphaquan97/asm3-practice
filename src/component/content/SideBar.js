import { useDispatch, useSelector } from "react-redux";
import "./SideBar.css";
import { useEffect } from "react";

const SideBar = (props) => {
  const dispatch = useDispatch();

  //các sản phẩm được lọc theo action.type === "FILTER"
  //   const dataReduxFilter = useSelector((state) => state.list.listItem);
  //   console.log(dataReduxFilter);

  //Array chứa tất cả sản phẩm
  const dataFilter = JSON.parse(localStorage.getItem("array")) ?? [];
  console.log(dataFilter);

  //Đây là string hiển thị category của từng nhóm sản phẩm. "all" hiển thị hết 8 sản phẩm
  const storeCategory = useSelector((state) => state.list.category);

  const showAllHandler = () => {
    dispatch({ type: "ALL", payload: { data: dataFilter, category: "all" } });
  };

  useEffect(() => {
    if (!storeCategory) {
      showAllHandler();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showIphoneHandler = () => {
    dispatch({
      type: "FILTER",
      payload: { data: props.data, category: "iphone" },
    });
  };

  //Hàm hiện sản phẩm có category ipad khi click vào button tương ứng
  const showIpadHandler = () => {
    dispatch({
      type: "FILTER",
      payload: { data: props.data, category: "ipad" },
    });
  };

  //Hàm hiện sản phẩm có category macbook khi click vào button tương ứng
  const showMacbookHandler = () => {
    dispatch({
      type: "FILTER",
      payload: { data: props.data, category: "macbook" },
    });
  };

  //Hàm hiện sản phẩm có category airpod khi click vào button tương ứng
  const showAirpodHandler = () => {
    dispatch({
      type: "FILTER",
      payload: { data: props.data, category: "airpod" },
    });
  };

  //Hàm hiện sản phẩm có category watch khi click vào button tương ứng
  const showWatchHandler = () => {
    dispatch({
      type: "FILTER",
      payload: { data: props.data, category: "watch" },
    });
  };

  //Hàm hiện sản phẩm có category mouse khi click vào button tương ứng
  const showMouseHandler = () => {
    dispatch({
      type: "FILTER",
      payload: { data: props.data, category: "mouse" },
    });
  };

  //Hàm hiện sản phẩm có category keyboard khi click vào button tương ứng
  const showKeyboardHandler = () => {
    dispatch({
      type: "FILTER",
      payload: { data: props.data, category: "keyboard" },
    });
  };

  //Hàm hiện sản phẩm có category other khi click vào button tương ứng
  const showOtherHandler = () => {
    dispatch({
      type: "FILTER",
      payload: { data: props.data, category: "other" },
    });
  };

  return (
    <div className="side-shop">
      <h4>CATEGORIES</h4>
      <ul>
        <li className="brand">APPLE</li>
        <li
          className={
            storeCategory === "all"
              ? "type-product change-color"
              : "type-product"
          }
          onClick={showAllHandler}
        >
          <button>ALL</button>
        </li>
        <li className="title-product">IPHONE & MAC</li>
        <li
          className={
            storeCategory === "iphone"
              ? "type-product change-color"
              : "type-product"
          }
          onClick={showIphoneHandler}
        >
          <button>Iphone</button>
        </li>
        <li
          className={
            storeCategory === "ipad"
              ? "type-product change-color"
              : "type-product"
          }
          onClick={showIpadHandler}
        >
          <button>Ipad</button>
        </li>
        <li
          className={
            storeCategory === "macbook"
              ? "type-product change-color"
              : "type-product"
          }
          onClick={showMacbookHandler}
        >
          <button>Macbook</button>
        </li>
        <li className="title-product">WIRELESS</li>
        <li
          className={
            storeCategory === "airpod"
              ? "type-product change-color"
              : "type-product"
          }
          onClick={showAirpodHandler}
        >
          <button>Airpod</button>
        </li>
        <li
          className={
            storeCategory === "watch"
              ? "type-product change-color"
              : "type-product"
          }
          onClick={showWatchHandler}
        >
          <button>Watch</button>
        </li>
        <li className="title-product">OTHER</li>
        <li
          className={
            storeCategory === "mouse"
              ? "type-product change-color"
              : "type-product"
          }
          onClick={showMouseHandler}
        >
          <button>Mouse</button>
        </li>
        <li
          className={
            storeCategory === "keyboard"
              ? "type-product change-color"
              : "type-product"
          }
          onClick={showKeyboardHandler}
        >
          <button>Keyboard</button>
        </li>
        <li
          className={
            storeCategory === "other"
              ? "type-product change-color"
              : "type-product"
          }
          onClick={showOtherHandler}
        >
          <button>Other</button>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
