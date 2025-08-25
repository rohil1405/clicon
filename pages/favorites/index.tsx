"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { productFavoritesActions } from "@/store/slice/Product";

const ProductFavoritesList = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.productFavorites);

  const remove = (id: number) => {
    dispatch(productFavoritesActions.remove(id));
  };

  return (
    <>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} width={50} />
              <span>
                {product.title} - ${product.price}
              </span>
              <button onClick={() => remove(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite products yet.</p>
      )}
    </>
  );
};

export default ProductFavoritesList;
