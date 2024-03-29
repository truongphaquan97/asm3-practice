import MoreInfo from "./MoreInfo";
import "./ProductHome.css";
//import Wrapper from "../modal/Wrapper";
import Popup from "./Popup";
import { useSelector, useDispatch } from "react-redux";

const Products = (props) => {
  const dispatch = useDispatch();

  //Đây là sản phẩm được click vào ở trong jsx phía dưới
  const listOne = useSelector((state) => state.toggle.data);

  //Hàm này có action ẩn popup, hoạt động khi click vào dấu X hoặc tấm nền
  const deletePopuphandler = () => {
    dispatch({ type: "HIDE_POPUP" });
  };

  //const windowSize = useRef([window.innerWidth, window.innerHeight]);
  return (
    <div>
      {listOne && <Popup delete={deletePopuphandler} data={listOne} />}
      <div className="wrap-product">
        <div className="title-product">
          <p>MADE THE HARD WAY</p>
          <h5>TOP TRENDING PRODUCTS</h5>
        </div>
      </div>
      <div className="wrap-product">
        <div className="grid-container product">
          {props.product.map((pro, index) => (
            <div key={index.toString()} className="box-product">
              <img
                src={pro.img1}
                alt="products"
                onClick={() => {
                  dispatch({ type: "SHOW_POPUP", data: pro });
                  console.log(pro);
                }}
                style={{ width: "100%" }}
                className="img-product"
              />
              <h4>{pro.name}</h4>
              <p>{pro.price.toLocaleString()} VND</p>
            </div>
          ))}
        </div>
      </div>
      <MoreInfo />
    </div>
  );
};

export default Products;
