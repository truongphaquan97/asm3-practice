import { useDispatch, useSelector } from "react-redux";
import "./PopupChat.css";
import { useEffect, useRef } from "react";

//Box livechat
const PopupChat = () => {
  const dispatch = useDispatch();

  //State này lưu trữ giá trị boolean khi click vào biểu tượng messenger
  const isChat = useSelector((state) => state.toggle.chat);

  //State này lưu nội dung tin nhắn do client gửi cho supporter
  const chat = useSelector((state) => state.inbox.data);

  //Lưu nội dung tin nhắn được lưu ở localStorage
  const inboxData = JSON.parse(localStorage.getItem("inboxData")) ?? [];

  //Theo dõi gai trị được nhập từ input
  let inputRef = useRef();

  //Ref nằm ở <div> nằm dưới cùng của box chat. Mục đích để cuộn đến div này sau mỗi lần gửi tin nhắn
  let scrollRef = useRef(null);

  //Hàm chạy sau khi click nút gưi tin nhắn
  const sendHandler = () => {
    //Gửi nội dung tin nhắn đến store
    dispatch({
      type: "SEND",
      payload: { data: inputRef.current.value },
    });

    //sau khi gửi làm trống giá trị input
    inputRef.current.value = "";
  };

  useEffect(() => {
    //Cuộn đến cuối box chat dau mỗi lần chat thay đổi
    scrollRef.current?.scrollIntoView(false);
  }, [chat]);

  useEffect(() => {
    //Cuộn đến cuối box chat sau khi đóng và mở lại box chat
    scrollRef.current?.scrollIntoView(false);
  }, [isChat]);

  //const textInbox = useSelector((state) => state.inbox.data);

  const liveChatHandler = () => {
    //Hàm đóng mở box chat sau khi click vào biểu tượng messenger
    dispatch({
      type: "LIVE_CHAT",
      payload: { toggle: !isChat },
    });
  };

  return (
    <div>
      {isChat ? (
        <div className="wrap-chat">
          <div className="box-chat">
            <div className="support-title">
              <p>Customer Support</p>
              <button>Let's Chat App</button>
            </div>
            <div className="text-chat">
              <ul className="text-box-chat">
                <li className="my-chat">Xin chào</li>
                <li className="my-chat">Làm thế nào để xem sản phẩm?</li>
                <div style={{ display: "flex", width: "100%" }}>
                  <img
                    className="they-img"
                    src="./images/supporter.png"
                    alt="supporter"
                  />
                  <li className="they-chat">ADMIN: Chào bạn</li>
                </div>
                <div style={{ display: "flex", width: "100%" }}>
                  <img
                    className="they-img"
                    src="./images/supporter.png"
                    alt="supporter"
                  />
                  <li className="they-chat">
                    ADMIN: Bạn có thể vào mục Shop để xem các sản phẩm
                  </li>
                </div>
                {inboxData
                  ? inboxData.map((ib, index) => (
                      <li className="li-my-chat" key={index}>
                        {ib}
                      </li>
                    ))
                  : ""}
                <div className="scroll-div" ref={scrollRef}></div>
              </ul>
            </div>
            <div className="form-type">
              <div>
                <img
                  className="support-img"
                  src="./images/supporter.png"
                  alt="supporter"
                />
                <input
                  className="support-input"
                  placeholder="Enter Message!"
                  type="text"
                  name="text"
                  ref={inputRef}
                ></input>
                <i className="fa-solid fa-paperclip"></i>
                <i className="fa-solid fa-face-smile"></i>
                <button className="btn-send" onClick={sendHandler}>
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="wrap-mess">
        <button onClick={liveChatHandler}>
          <i className="fa-brands fa-facebook-messenger" />
        </button>
      </div>
    </div>
  );
};

export default PopupChat;
