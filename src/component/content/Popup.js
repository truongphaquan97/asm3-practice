import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Popup.css";
import { useNavigate } from "react-router-dom";

//Popup của sản phẩm sau khi được click vào ảnh của sản phẩm
function Popup(props) {
  //Component này lấy id của sản phẩm được click vào view detail để chuyển tieip61 sang trang DetailPage
  const navigate = useNavigate();
  return (
    <div className="popup-box">
      <div className="overlay" onClick={props.delete}></div>
      <div className="box">
        <div>
          <button className="btn-close" onClick={props.delete}></button>
        </div>
        <Row className="popup-detail">
          <Col className="bg" xs="6">
            <img src={props.data.img1} alt="san pham" />
          </Col>
          <Col className="bg popup-text" xs="6">
            <h5>{props.data.name}</h5>
            <p className="popup-price">
              {props.data.price.toLocaleString()} VND
            </p>
            <p className="short">{props.data.shortDesc}</p>
            <button
              onClick={() => {
                navigate(`/detail/${props.data.id.$oid}`);
              }}
            >
              <i className="fa-solid fa-cart-shopping"></i> View Detail
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Popup;
