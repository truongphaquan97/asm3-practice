import { Col, InputGroup, Row } from "react-bootstrap";
import "./MoreInfo.css";
import { Fragment } from "react";

//Đây là thành phần cuối cùng trong phần content của trang trước khi đi xuống Footer
const MoreInfo = () => {
  return (
    <Fragment>
      <div className="wrap-more">
        <div className="shipping">
          <Row>
            <Col className="bg">
              <h5>FREE SHIPPING</h5>
              <p>Free shipping worlwide</p>
            </Col>
            <Col className="bg">
              <h5>24 X 7 SERVICE</h5>
              <p>Free shipping worlwide</p>
            </Col>
            <Col className="bg">
              <h5>FESTIVAL OFFER</h5>
              <p>Free shipping worlwide</p>
            </Col>
          </Row>
        </div>
      </div>
      <div className="wrap-more">
        <div className="email">
          <Row>
            <Col className="bg" xs="6">
              <h5>LET'S BE FRIENDS!</h5>
              <p>Nisi nisi tempor consequat laboris nisi.</p>
            </Col>
            <Col className="bg" xs="6">
              <InputGroup className="input-email">
                <input placeholder="Enter your email address" />
                <button>Subbsribe</button>
              </InputGroup>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
};

export default MoreInfo;
