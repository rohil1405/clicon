import { useState } from "react";
import TabContent from "./ProductTabContent";
import classes from "./product-details.module.css";
import { ProductDetailProps } from "@/models/ProductDetailProps";

interface ProductTabsProps {
  product: ProductDetailProps;
}

const ProductTabs = ({ product }: ProductTabsProps) => {
  const [activeTab, setActiveTab] = useState<
    "info" | "reviews" | "warranty" | "QR"
  >("info");

  return (
    <div className={classes.tabs}>
      <ul>
        <li
          className={activeTab === "info" ? classes.active : ""}
          onClick={() => setActiveTab("info")}
        >
          Product info
        </li>
        <li
          className={activeTab === "reviews" ? classes.active : ""}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </li>
        <li
          className={activeTab === "warranty" ? classes.active : ""}
          onClick={() => setActiveTab("warranty")}
        >
          Warranty
        </li>
        <li
          className={activeTab === "QR" ? classes.active : ""}
          onClick={() => setActiveTab("QR")}
        >
          QR
        </li>
      </ul>

      <div className={classes.tabContent}>
        <TabContent activeTab={activeTab} product={product} />
      </div>
    </div>
  );
};

export default ProductTabs;
