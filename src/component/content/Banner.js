import { useNavigate } from "react-router-dom";
import "./Banner.css";
import { useDispatch } from "react-redux";
const Banner = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlerToCollection = () => {
    navigate("/shop");
    dispatch({
      type: "ALL",
      payload: { data: props.product, category: "all" },
    });
  };

  return (
    <div className="wrap-banner">
      <div
        className="banner"
        style={{ backgroundImage: "url(./images/banner1.jpg)" }}
      >
        <p>NEW INSPIRATION 2020</p>
        <h2>20% OFF ON NEW</h2>
        <h2>SEASON</h2>
        <button onClick={handlerToCollection}>Browse collections</button>
      </div>
    </div>
  );
};

export default Banner;
