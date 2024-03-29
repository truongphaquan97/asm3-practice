import { useNavigate } from "react-router-dom";
import "./ProductInShop.css";

//Component này chứa thông tin của 1 sản phẩm: ảnh, tên và giá. Khi click vào thẻ này sẽ chuyển hướng đến DetailPage ứng với id của sản phẩm được click
const ProductInShop = (props) => {
  const navigate = useNavigate();

  return (
    <div
      // key={props.key}
      className="product-detail"
      onClick={() => {
        navigate(`/detail/${props.data.id.$oid}`);
      }}
    >
      <img src={props.data.img1} alt="products" />
      <h4>{props.data.name}</h4>
      <p>{props.data.price.toLocaleString()} VND</p>
    </div>
  );
};

export default ProductInShop;
