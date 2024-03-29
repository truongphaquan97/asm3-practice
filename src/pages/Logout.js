import { redirect } from "react-router-dom";
import store from "../store/index";

//Action logout
export const action = () => {
  //Hàm đăng xuất
  const saveStateStore = () => {
    store.dispatch({
      type: "ON_LOGOUT",
    });
  };
  //Gọi hàm và chuyển hướng về trang login
  saveStateStore();

  return redirect("/login");
};
