import { useNavigate } from "react-router-dom";
import "./Collection.css";
import { useDispatch } from "react-redux";

const Collection = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showIphoneHandler = () => {
    navigate("/shop");

    dispatch({
      type: "FILTER",
      payload: { data: props.product, category: "iphone" },
    });
    // localStorage.setItem("array", JSON.stringify(props.product));
  };
  const showMacbookHandler = () => {
    navigate("/shop");

    dispatch({
      type: "FILTER",
      payload: { data: props.product, category: "macbook" },
    });
  };
  const showIpadHandler = () => {
    navigate("/shop");

    dispatch({
      type: "FILTER",
      payload: { data: props.product, category: "ipad" },
    });
  };
  const showWatchHandler = () => {
    navigate("/shop");

    dispatch({
      type: "FILTER",
      payload: { data: props.product, category: "watch" },
    });
  };
  const showAirpodHandler = () => {
    navigate("/shop");

    dispatch({
      type: "FILTER",
      payload: { data: props.product, category: "airpod" },
    });
  };

  return (
    <div className="wrap-collec">
      <div className="collection">
        <div className="text-collec">
          <p>CAREFULLY CREATED COLLECTION</p>
          <h5>BROWSE OUR CATEGORIES</h5>
        </div>
        <div className="list-1">
          <img
            onClick={showIphoneHandler}
            src="./images/product_1.png"
            alt="cell phone"
            width="48.5%"
          />
          <img
            onClick={showMacbookHandler}
            src="./images/product_2.png"
            alt="cell phone"
            width="48.5%"
          />
        </div>
        <div className="list-2">
          <img
            onClick={showIpadHandler}
            src="./images/product_3.png"
            alt="cell phone"
            width="32%"
          />
          <img
            onClick={showWatchHandler}
            src="./images/product_4.png"
            alt="cell phone"
            width="32%"
          />
          <img
            onClick={showAirpodHandler}
            src="./images/product_5.png"
            alt="cell phone"
            width="32%"
          />
        </div>
      </div>
    </div>
  );
};

export default Collection;
