import { useLoaderData } from "react-router-dom";
import ProductInShop from "../component/content/ProductInShop";
import SideBar from "../component/content/SideBar";
import "./ShopPage.css";
import { useSelector } from "react-redux";
import { Pagination } from "reactstrap";
import { PaginationItem, PaginationLink } from "reactstrap";

const ShopPage = () => {
  //Lấy dữ liệu từ loader
  const request = useLoaderData();

  //Dữ liệu sản phẩm hiển thị theo dispatch của store action.type = "FILTER". VÀ dùng nó để hiển thị component ProductList
  const dataShop = useSelector((state) => state.list.listItem);

  return (
    <div className="shop-page">
      <div className="wrap-title-shop">
        <div className="topic-shop">
          <h1>SHOP</h1>
          <p>SHOP</p>
        </div>
      </div>
      <div className="wrap-shop">
        <SideBar data={request} />
        <div className="wrap-all-product">
          <div className="list-shop">
            <div>
              <input
                className="input-shop"
                placeholder="Enter Search Here!"
              ></input>
            </div>
            <div className="sort-product">
              <select name="sort-product">
                <option value="default-sort">Default sorting</option>
                <option value="name-sort">Name</option>
                <option value="low-price">Price low to high</option>
                <option value="high-price">Price high to low</option>
              </select>
            </div>
          </div>
          <div className="grid-container wrap-produst-list">
            {dataShop.length === 0
              ? ""
              : dataShop.map((list, index) => (
                  <ProductInShop key={index} data={list} request={request} />
                ))}
          </div>
          <div className="whole-pan">
            <Pagination
              aria-label="Page navigation example"
              size="sm"
              className="page-ul"
            >
              <PaginationItem className="page-li">
                <PaginationLink first href="#" className="page-a" />
              </PaginationItem>
              {dataShop.length === 0 ? (
                ""
              ) : (
                <PaginationItem active>
                  <PaginationLink href="#" className="page-a">
                    1
                  </PaginationLink>
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationLink
                  href="#"
                  last
                  className={
                    dataShop.length !== 0 ? "page-a" : "page-a page-a-plus"
                  }
                />
              </PaginationItem>
            </Pagination>
            <p className="text-pan">
              Showing 1-9 of {dataShop.length === 0 ? "0" : "9"} results
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShopPage;
