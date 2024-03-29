import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { useDispatch } from "react-redux";
import { useRef } from "react";

//Trang Login/Sign up
const AuthPage = () => {
  //Lấy danh sách tài khoản đã đăn ký trước đó
  const userArr = JSON.parse(localStorage.getItem("userArr")) ?? [];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Theo dõi emal và password
  const emailRef = useRef();
  const passwordRef = useRef();

  //Hàm validate
  const validateHandler = () => {
    //Nếu chưa có tài khoảng thì chuyển sang trang Sign Up
    if (userArr === null) {
      alert("Bạn chưa có tài khoản. Vui lòng đăng ký trước khi đăng nhập!");
      navigate("/register");
    }
    if (!emailRef.current.value.includes("@")) {
      alert("Vui lòng điền email hợp lệ!");
      return false;
    }
    if (userArr) {
      //Nếu có tài khoản thì sẻ tiến hành check thông tin

      //Một email hợp lệ có @ và có mat85 trong danh sach userArr

      //Check xem có trong userArr không
      var userLogin = userArr.find(
        (user) => user.email === emailRef.current.value
      );
      console.log(userLogin);
      //Nếu không có thì chưa đăng ký hiện thông báo và value trở về ""
      if (!userLogin) {
        console.log(userLogin);
        emailRef.current.value = "";
        passwordRef.current.value = "";
        alert("Email chưa đăng ký!");
        return false;
      }
    }
    //Kiểm tra mật khẩu
    if (userLogin) {
      if (passwordRef.current.value.length < 8) {
        passwordRef.current.value = "";
        alert("Vui lòng điền mật khẩu dài hơn 8 ký tự!");
        return false;
      }
      console.log(typeof userLogin);
      //Mật khẩu vừa nhập phải khớp với mật khẩu trong userLogin
      if (userLogin.password !== passwordRef.current.value) {
        passwordRef.current.value = "";
        alert("Mật Khẩu không đúng!");
        return false;
      }
    }

    return true;
  };

  const submitForm = (e) => {
    e.preventDefault();

    //Gọi hàm validate
    const isPassData = validateHandler();

    if (!isPassData) {
      return null;
    }

    //Lấy userCurrent để lưu vào store khi chạy action ở dưới
    const userCurrent = userArr.find(
      (user) => user.email === emailRef.current.value
    );

    dispatch({
      type: "ON_LOGIN",
      payload: { current: userCurrent },
    });

    //Lưu userCurrent vào localStorage để lấy tên người dùng
    localStorage.setItem("userCurrent", JSON.stringify(userCurrent));

    //Login thành công chuyển hướng sang HomePage
    navigate("/");
  };

  return (
    <div className="wrap-login">
      <div
        className="login-page"
        style={{ backgroundImage: "url(./images/banner1.jpg)" }}
      >
        <div className="wrap-form">
          <form onSubmit={submitForm} className="form-login">
            <h2>Sign In</h2>
            <div className="wrap-row email">
              <label>Email</label>
              <input
                type="email"
                name="email"
                required
                ref={emailRef}
                suggested="current-password"
              ></input>
            </div>
            <div className="wrap-row password">
              <label>Password</label>
              <input
                type="password"
                name="password"
                required
                ref={passwordRef}
                suggested="current-password"
              ></input>
            </div>
            <div className="btn-signup">
              <button type="submit">SIGN IN</button>
            </div>
            <div className="btn-toggle">
              <p>
                Create an account?
                <Link to="/register"> Sign up</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AuthPage;
