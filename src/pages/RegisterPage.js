import { useEffect, useRef } from "react";
import { Form, Link, redirect, useSearchParams } from "react-router-dom";

const RegisterPage = () => {
  //Lấy params
  const [searchParams] = useSearchParams();

  //ref để theo dõi input
  const formRef = useRef();

  //Hàm nảy xóa value input khi đăng ký thành công
  const resetHandler = () => {
    formRef.current.reset();
  };

  //resetHandler() chạy khi params thay đổi
  useEffect(() => {
    resetHandler();
  }, [searchParams]);

  return (
    <div className="wrap-login">
      <div
        className="login-page"
        style={{ backgroundImage: "url(./images/banner1.jpg)" }}
      >
        <div className="wrap-form">
          <Form method="post" className="form-login" ref={formRef}>
            <h2>Sign Up</h2>

            <div className="wrap-row full-name">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                required
                suggested="current-password"
              ></input>
            </div>

            <div className="wrap-row email">
              <label>Email</label>
              <input
                type="email"
                name="email"
                required
                suggested="current-password"
              ></input>
            </div>
            <div className="wrap-row password">
              <label>Password</label>
              <input type="password" name="password" required></input>
            </div>

            <div className="wrap-row phone">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                required
                suggested="current-password"
              ></input>
            </div>
            <div className="btn-signup">
              <button>SIGN UP</button>
            </div>
            <div className="btn-toggle">
              <p>
                Login?
                <Link to="/login"> Click</Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;

export const action = async ({ request }) => {
  //Dữ liệu lấy từ Form
  const data = await request.formData();
  const authData = {
    fullName: data.get("fullName"),
    email: data.get("email"),
    password: data.get("password"),
    phone: data.get("phone"),
  };

  //Lấy tong tin user từ localStorage
  const userArr = JSON.parse(localStorage.getItem("userArr")) ?? [];

  //Hàm validate
  const validateHandler = () => {
    //LẦn lượt kiểm tra tên, email, mật khẩu xem có nhập hợp lệ không?
    if (authData.fullName.trim().length === 0) {
      alert("Vui lòng điền Họ và tên đầy đủ!");
      return false;
    }

    if (!authData.email.includes("@")) {
      alert("Vui lòng điền email hợp lệ!");
      return false;
    }

    if (authData.password.length < 8) {
      alert("Vui lòng điền mật khẩu dài hơn 8 ký tự!");
      return false;
    }

    //Hợp lệ thì tiếp tục validate
    if (userArr) {
      //Check xem email này đã đăng ký chưa
      const userLogin = userArr.find((user) => user.email === authData.email);

      //nếu có thì báo đã đăng ký
      if (userLogin) {
        console.log(userLogin);
        alert("Email đã đăng ký!");
        return false;
      }
    }

    //Nếu không có gì thì trả về true
    return true;
  };

  //Gọi hàm lấy giá trị
  const isPassData = validateHandler();
  console.log(isPassData);

  //Nếu hàm false thì trả về null
  if (!isPassData) {
    return null;
  }

  //Thông tin hợp lệ thì tiến hành đăng ký và nhập user vào userArr
  userArr.push(authData);

  //Lưu xuống localStorage
  localStorage.setItem("userArr", JSON.stringify(userArr));

  //CHuyển hướng đến nơi login
  return redirect("/login");
};
