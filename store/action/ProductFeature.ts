import { setFeatures } from "../slice/ProductFeature";
import Request from "@/utils/Request";
import { AppDispatch } from "../store";

export const getProductFeatures = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setFeatures({ loading: true, error: null }));
    const { data } = await Request({ url: "/data/featureData.json", configuration: {} });
    dispatch(setFeatures({ items: data, loading: false }));
  } catch (error: any) {
    dispatch(setFeatures({ loading: false, error: error.message || "Failed to load product features" }));
  }
};
