import { useDispatch } from "react-redux";
import "./CartPage.css";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const CartPage = () => {
  const products = useLoaderData();
  //Dữ liệu giỏ hàng lấy từ localStorage
  const dataCart = JSON.parse(localStorage.getItem("cart")) ?? [];
  console.log(dataCart);

  //Số tiền được tính tổng lấy từ localStorage
  const sum = JSON.parse(localStorage.getItem("total")) ?? [];
  console.log(sum);

  //State này lưu trữ sữ liệu được update khi click vào tăng/giảm quantity
  const [cartUpdate, setCartUpdate] = useState(dataCart);
  console.log(cartUpdate);

  //Hàm này thực hiện update khi khi click vào tăng hoặc giảm
  const updateHandler = () => {
    //Do ở chổ button có action.type === UPDATE_CART nên lấy thông tin update mới từ localStorage
    const update = JSON.parse(localStorage.getItem("cart")) ?? [];

    //Lưu dữ liệu này vào state để hiển thị thông tin giỏ hàng
    setCartUpdate(update);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Chuyển hướng về ShopPage khi click vào Continue shopping
  const changeToShop = () => {
    navigate("/shop");
    dispatch({ type: "ALL", payload: { data: products, category: "all" } });
  };

  //Chuyển hướng đến CheckoutPage khi click vào Proceed to checkout
  const changToProceed = () => {
    navigate("/checkout");
  };
  // useEffect(() => {
  //   console.log(sum);
  //   console.log(1);
  // }, []);
  //Ở bên phải của table có cột remove có biểu tượng thùng rác, Tại đây có sự kiên onClick để xóa sản phẩm đó khỏi giỏ hàng
  return (
    <>
      <div className="wrap-cart">
        <div className="topic-cart">
          <h1>CART</h1>
          <p>CART</p>
        </div>
      </div>
      {dataCart.length !== 0 ? (
        <div className="title-shoping-cart">
          <h2>SHOPPING CART</h2>
        </div>
      ) : (
        ""
      )}

      <div className="wrap-invoice">
        <div className="wrap-table">
          {dataCart.length !== 0 ? (
            <table className="table">
              <tr className="tr-title">
                <td>IMAGE</td>
                <td>PRODUCT</td>
                <td>PRICE</td>
                <td>QUANTITY</td>
                <td>TOTAL</td>
                <td className="remove-td">REMOVE</td>
              </tr>

              {dataCart.map((product, index) => (
                <tr className="tr-map" key={index}>
                  <td className="td-img">
                    <img
                      src={product.data.img1}
                      alt="san pham"
                      width="100%"
                      height="100%"
                    />
                  </td>
                  <td className="cart-name-product">{product.data.name}</td>
                  <td className="table-opacity">
                    {Number(product.data.price).toLocaleString()} VND
                  </td>
                  <td className="td-button">
                    <button
                      onClick={() => {
                        var updateQuantity = product.quantity;
                        if (updateQuantity > 1) {
                          updateQuantity = product.quantity - 1;
                        } else {
                          updateQuantity = 1;
                        }

                        dispatch({
                          type: "UPDATE_CART",
                          payload: {
                            data: product.data,
                            quantity: updateQuantity,
                          },
                        });
                        console.log("clicked");
                        updateHandler();
                      }}
                    >
                      ◂
                    </button>
                    <span>{Number(product.quantity)}</span>
                    <button
                      onClick={() => {
                        dispatch({
                          type: "UPDATE_CART",
                          payload: {
                            data: product.data,
                            quantity: product.quantity + 1,
                          },
                        });
                        console.log("click");
                        updateHandler();
                      }}
                    >
                      ▸
                    </button>
                  </td>
                  <td className="table-opacity">
                    {(
                      product.data.price * Number(product.quantity)
                    ).toLocaleString()}
                    VND
                  </td>
                  <td>
                    <i
                      className="fa-regular fa-trash"
                      onClick={() => {
                        dispatch({
                          type: "DELETE_CART",
                          payload: {
                            data: product.data,
                            quantity: product.quantity,
                          },
                        });
                        updateHandler();
                      }}
                    />
                  </td>
                </tr>
              ))}
            </table>
          ) : (
            <p className="warning">Bạn chưa chọn sản phẩm nào!</p>
          )}
          <div
            className={
              dataCart.length !== 0
                ? "redirect-btn"
                : "change-continue-shopping"
            }
          >
            {dataCart.length !== 0 ? (
              <button onClick={changeToShop} className="continue-shopping">
                ← Continue shopping
              </button>
            ) : (
              <button onClick={changeToShop} className="new-continue-shopping">
                ← Continue shopping
              </button>
            )}
            {dataCart.length !== 0 && (
              <button onClick={changToProceed} className="checkout">
                Proceed to checkout →
              </button>
            )}
          </div>
        </div>

        {dataCart.length !== 0 ? (
          <div className="cart-total">
            <div>
              <h3>CART TOTAL</h3>
              <p className="subtotal">
                <span className="sub-title">SUBTOTAL</span>
                <span className="sub-price">{sum.toLocaleString()} VND</span>
              </p>
              <p className="invoice-price">
                <span className="total-title">TOTAL</span>
                <span className="total-price">{sum.toLocaleString()} VND</span>
              </p>
            </div>
            <div>
              <div className="input-coupon">
                <input placeholder="Enter your coupon"></input>
              </div>
              <div className="btn-coupon">
                <button>
                  <i className="fa-solid fa-gift" />
                  <span className="apply-coupon">Apply coupon</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden-total"></div>
        )}
      </div>
    </>
  );
};
export default CartPage;
