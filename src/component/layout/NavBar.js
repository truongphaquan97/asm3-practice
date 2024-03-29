import { Form, useLoaderData, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { NavItem } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const products = useLoaderData();

  console.log(products);
  //user để lưu thông tin người đang đăng nhập. Ở đây em chỉ lấy tên để hiển thị
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Chuyển hướng đến HomePage
  const handlerToHome = () => {
    console.log("redirecting...");
    navigate("/");
  };

  //Chuyển hướng đến ShopPage
  const handlerToShop = () => {
    navigate("/shop");
    dispatch({ type: "ALL", payload: { data: products, category: "all" } });
  };

  //Chuyển hướng đến CartPage
  const handlerToCart = () => {
    navigate("/cart");
  };

  //Chuyển đến AuthPage để đăng nhập
  const handlerToLogin = () => {
    navigate("/login");
  };

  //Lấy thông tin user đang đăng nhập
  const userCurrent = useSelector((state) => state.list.auth);

  //Thay đổi thanh NavBar theo trạng thái đăng nhập phụ thuộc theo userCurrent
  useEffect(() => {
    if (userCurrent) {
      if (userCurrent.fullName.length > 1) {
        var a = userCurrent.fullName;

        //Lấy vị trí cách đầu tiên
        var b = a.indexOf(" ");
        console.log(b);

        //Lấy họ ra
        var c = a.slice(0, b);
        console.log(c);

        // chuyển thành array
        var d = a.split(" ");
        console.log(d);

        //xóa đầu array lấy các chữ cuối
        d.shift();

        //Lấy chữ cái đầu của tên còn lại
        var e = d.map((e) => e.charAt(0));

        //Xóa bỏ mảng chuyển thành string cho dính nhau
        var f = e.join("");

        //Ghép họ và 2 chữ cái còn lại
        var name = c + f;

        //Xóa dấu Tiếng việt
        name = name
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/đ/g, "d")
          .replace(/Đ/g, "D");

        setUser(name);
        console.log(name);
      } else {
        setUser(userCurrent.fullName);
      }
    }
    if (!userCurrent) {
      setUser(null);
    }
  }, [userCurrent]);

  return (
    <div className="nav-header">
      <Nav vertical className="header">
        <div className="left-header">
          <NavItem className="home-header">
            <button onClick={handlerToHome}>Home</button>
          </NavItem>
          <NavItem className="shop-header">
            <button onClick={handlerToShop}>Shop</button>
          </NavItem>
        </div>
        <NavItem>
          <h2 className="center-header">BOUTIQUE</h2>
        </NavItem>
        <div className="right-header">
          <NavItem className="cart-header">
            <button onClick={handlerToCart}>
              <i className="fa-solid fa-cart-shopping"></i> Cart
            </button>
          </NavItem>
          <NavItem className="login-header">
            {user ? (
              <button>
                <i className="fa fa-user" />
                {user} ▼
              </button>
            ) : (
              <button onClick={handlerToLogin}>Login</button>
            )}
          </NavItem>
          {user && (
            <Form className="logout-header" action="/logout" method="POST">
              <button>{"( Logout )"}</button>
            </Form>
          )}
        </div>
      </Nav>
    </div>
  );
};
export default NavBar;
