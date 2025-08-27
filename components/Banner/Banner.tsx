import Slider from "react-slick";
import Image from "next/image";
import BannerSlick from "../config/slider";
import classes from "./Banner.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../Button/Button";
import ProductProps from "@/models/ProductProps";

interface BannerSliderProps {
  products: ProductProps[];
}

const Banner: React.FC<BannerSliderProps> = ({ products }) => {
  return (
    <section className={classes["banner-wrap"]}>
      <div className="container">
        <div className={classes.banner}>
          {products.length === 0 && (
            <p className={classes.error}>No products available.</p>
          )}

          {products.length > 0 && (
            <Slider {...BannerSlick}>
              {products.map((product) => (
                <div key={product.id} className={classes.content}>
                  <div className={classes.left}>
                    <div className={classes.quote}>
                      The Smart Choice for Smart Living
                    </div>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <Button
                      name="Shop Now"
                      left={false}
                      right={true}
                      cart={false}
                      href="/products"
                    />
                  </div>
                  <div className={classes.right}>
                    <Image
                      src={product.thumbnail || "/images/fallback.png"}
                      alt={product.title}
                      width={368}
                      height={408}
                    />
                    <div className={classes["price-wrap"]}>
                      <div className={classes.price}>${product.price}</div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner;
