import { Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import "./DetailPage.css";
import { useDispatch } from "react-redux";

const DetailPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [idData, setIdData] = useState();
  const [related, setRelated] = useState();

  const navigate = useNavigate();
  const dataFromLoader = useLoaderData();
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    const showDetail = () => {
      const dataOneId = dataFromLoader.find(
        (de) => de.id.$oid === params.productId
      );
      console.log(dataOneId);
      setIdData(dataOneId);

      const sameCategory = dataFromLoader.filter(
        (product) => product.category === dataOneId.category
      );
      console.log(sameCategory);

      if (sameCategory.length > 1) {
        var leftData = sameCategory.filter(
          (left) => left.id.$oid !== params.productId
        );
      } else {
        leftData = null;
      }
      setRelated(leftData);
    };
    showDetail();
  }, [dataFromLoader, params.productId]);

  const typeQuantityHandler = (e) => {
    e.preventDefault();
    setQuantity(Number(e.target.value));
    console.log(e.target.value);
  };

  const downQuantity = (e) => {
    e.preventDefault();

    if (quantity === 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const riseQuantity = (e) => {
    e.preventDefault();

    setQuantity(quantity + 1);
  };

  const addCartHandler = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_CART",
      payload: { data: idData, quantity: quantity },
    });
  };
  return (
    <div>
      <div className="wrap-shop">
        <div className="topic-shop">
          <h1>SHOP</h1>
          <p>SHOP</p>
        </div>
      </div>
      <div className="wrap-top">
        <Row className="detail-top">
          <Col className="bg small-img" xs="1">
            <img src={idData && idData.img1} alt={`${idData && idData.name}`} />
            <img src={idData && idData.img2} alt={`${idData && idData.name}`} />
            <img src={idData && idData.img3} alt={`${idData && idData.name}`} />
            <img src={idData && idData.img4} alt={`${idData && idData.name}`} />
          </Col>
          <Col className="bg big-img" xs="5">
            <img src={idData && idData.img4} alt={`${idData && idData.name}`} />
          </Col>
          <Col className="bg detail-id" xs="6">
            <h2>{idData && idData.name}</h2>
            <p className="price-page-detail">{idData && idData.price} VND</p>
            <p className="short-page-detail">{idData && idData.shortDesc}</p>
            <div className="detail-category">
              <p className="category-bold">CATEGORY: </p>
              <p>{idData && idData.category}</p>
            </div>
            <form className="quantity">
              <label>QUANTITY</label>
              <button className="btn-left" onClick={downQuantity}>
                ◂
              </button>
              <input value={quantity} onChange={typeQuantityHandler}></input>
              <button className="btn-right" onClick={riseQuantity}>
                ▸
              </button>
              <button className="add-cart" onClick={addCartHandler}>
                Add to cart
              </button>
            </form>
          </Col>
        </Row>
      </div>
      <div className="wrap-des">
        <div className="detail-des">
          <button className="des-btn">DESCRIPTION</button>
          <h4>PRODUCT DESCRIPTION</h4>
          <p>
            {idData &&
              idData.longDesc
                .replaceAll("•", "-")
                .replace("Tính năng nổi bật", "TÍNH NĂNG NỔI BẬC")}
          </p>
        </div>
      </div>
      <div className="wrap-relate">
        <h4>RELATED PRODUCTS</h4>
      </div>
      <div className="wrap-relate">
        <div className="display-relate">
          {related
            ? related.map((relate, index) => (
                <div
                  key={index}
                  onClick={() => {
                    navigate(`/detail/${relate.id.$oid}`);
                  }}
                >
                  <img
                    className="related-img"
                    src={relate && relate.img1}
                    alt="dataRelated"
                  />
                  <h5 className="name-relate">{relate && relate.name}</h5>
                  <p className="price-relate">
                    {relate && relate.price.toLocaleString()}
                    VND
                  </p>
                </div>
              ))
            : "Not related product"}
        </div>
      </div>
    </div>
  );
};
export default DetailPage;
