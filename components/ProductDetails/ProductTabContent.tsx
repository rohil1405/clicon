import Image from "next/image";
import classes from "./product-details.module.css";
import { ProductDetailProps } from "@/models/ProductDetailProps";

interface TabContentProps {
  activeTab: "info" | "reviews" | "warranty" | "QR";
  product: ProductDetailProps;
}

const TabContent = ({ activeTab, product }: TabContentProps) => {
  if (activeTab === "info") {
    return (
      <div className={classes.infoMain}>
        <div className={classes.headerTab}>
          <h2 className="h4">{product.title}</h2>
          <div className={classes.finalPrice}>${product.price}</div>
        </div>
        <p>
          <span>Description: </span>
          {product.description}
        </p>
        <ul>
          <li>
            <span>Category: </span>
            {product.category}
          </li>
          <li>
            <span>Discount: </span>
            {product.discountPercentage}
          </li>
          <li>
            <span>stock: </span>
            {product.stock}
          </li>
          {product.tags && product.tags.length > 0 && (
            <li>
              <span>Tags:</span> {product.tags.join(", ")}
            </li>
          )}
          <li>
            <span>Sku: </span>
            {product.sku}
          </li>
          <li>
            <span>Brand: </span>
            {product.brand}
          </li>
          <li>
            <span>Weight: </span>
            {product.weight}
          </li>
          <li>
            <span>Warranty Information: </span>
            {product.warrantyInformation}
          </li>
          <li>
            <span>Shipping Information: </span>
            {product.shippingInformation}
          </li>
          <li>
            <span>Availability Status: </span>
            {product.availabilityStatus}
          </li>
          <li>
            <span>Minimum Quantity: </span>
            {product.minimumOrderQuantity}
          </li>
          <li>
            <span>Return Policy </span>
            {product.returnPolicy}
          </li>
        </ul>
      </div>
    );
  }

  if (activeTab === "warranty") {
    if (!product?.warrantyInformation) {
      return <p className="loader"></p>;
    }
    return (
      <div className={classes.bigText}>
        {product.warrantyInformation || "No warranty information available"}
      </div>
    );
  }

  if (activeTab === "QR") {
    return product?.meta?.qrCode ? (
      <Image
        src={product.meta.qrCode}
        width={300}
        height={300}
        alt="qr-image"
        className={classes.qrImg}
      />
    ) : (
      <p className="loader"></p>
    );
  }

  if (activeTab === "reviews") {
    return (
      <div className={classes.main}>
        {product.reviews.map((review, id) => (
          <ul key={id}>
            <li>
              <span>Rating:</span> {review.rating}
            </li>
            <li>
              <span>Reviewer: </span>
              {review.reviewerName}
            </li>
            <li>
              <span>Comment: </span>
              {review.comment}
            </li>
            <li>
              <span>Date: </span>
              {new Date(review.date).toLocaleDateString()}
            </li>
          </ul>
        ))}
      </div>
    );
  }

  return null;
}

export default TabContent;