import { Form } from "react-router-dom";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  //Lấy thông tin giỏ hàng từ localStorage
  const dataRomCart = JSON.parse(localStorage.getItem("cart")) ?? [];
  console.log(dataRomCart);

  //Tổng số tiền của đơn hàng
  const sum = JSON.parse(localStorage.getItem("total")) ?? [];
  console.log(sum);

  return (
    <>
      <div className="wrap-checkout">
        <div className="topic-checkout">
          <h1>CHECKOUT</h1>
          <span className="btn-back">
            <button>HOME</button>/<button>CART</button>/
            <button className="btn-active">CHECKOUT</button>
          </span>
        </div>
      </div>
      <div className="checkout-all">
        <div className="wrap-form-out">
          <h2 className="billing">BILLING DETAIL</h2>
          <Form className="form-checkout">
            <p>FULL NAME:</p>
            <input placeholder="Enter Your Name Here!"></input>
            <p>EMAIL:</p>
            <input placeholder="Enter Your Email Here!"></input>
            <p>PHONE NUMBER:</p>
            <input placeholder="Enter Your Phone Number Here!"></input>
            <p>ADDRESS:</p>
            <input placeholder="Enter Your Address Here!"></input>
            <button>Place order</button>
          </Form>
        </div>
        <div className="checkout-box">
          <h3>YOUR ORDER</h3>
          {dataRomCart.map((product, index) => (
            <div key={index} className="line-out">
              <p className="name-out">{product.data.name}</p>
              <p className="down-out">
                {product.data.price.toLocaleString()} VND
              </p>
              <p className="down-out">x {product.quantity}</p>
            </div>
          ))}
          <p>
            <span className="title-out">TOTAL</span>
            <span className="total-out">{sum.toLocaleString()} VND</span>
          </p>
        </div>
      </div>
    </>
  );
};
export default CheckoutPage;
