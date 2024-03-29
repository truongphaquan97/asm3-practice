import { json, useLoaderData } from "react-router-dom";
import Banner from "../component/content/Banner";
import Collection from "../component/content/Collection";
import ProductHome from "../component/content/ProductHome";
import PopupChat from "../component/content/PopupChat";
//Trang HomePage
const HomePage = () => {
  //Ley61 dữ liệu loasder của trang
  const products = useLoaderData();

  return (
    <div className="home-content">
      <Banner product={products} />
      <Collection product={products} />
      <ProductHome product={products} />
      <PopupChat />
    </div>
  );
};
export default HomePage;

//Hàm Loader lấy thông tin sản phẩm
export async function loader() {
  //Yêu cầu lấy thông tin từ api
  const response = await fetch(
    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
  );

  //Kiểm lỗi tại đây
  if (!response.ok) {
    throw json({ message: "Could not fetch product." }, { status: 500 });
  } else {
    //nếu không lổi thì lấy dữ liệu về và đọc dữ liệu
    const data = await response.json();
    console.log(data);

    //Lưu dữ liệu vào object và đặt tên
    const request = data.map((product) => {
      return {
        id: product._id,
        name: product.name,
        price: parseInt(product.price),
        category: product.category,
        shortDesc: product.short_desc,
        longDesc: product.long_desc,
        img1: product.img1,
        img2: product.img2,
        img3: product.img3,
        img4: product.img4,
      };
    });

    return request;
  }
}
