import { useEffect } from "react";
import { usePublicSocket } from "../helper/usePublicSocket";
import { useGetGoldPriceForLandingPage } from "../services/apis/goldPrice/queries";
import { usePriceStore } from "../store/zustand/goldPriceStore";

export const useGoldPrice = () => {
  const { setPrices } = usePriceStore();
  const { data: apiGoldData, isLoading } = useGetGoldPriceForLandingPage();
  const { addEventListener, removeEventListener } = usePublicSocket();

  // Update Gold & Silver prices from API
  useEffect(() => {
    if (apiGoldData) {
      setPrices(apiGoldData);
    }
  }, [apiGoldData, setPrices]);

  // Listen for Real-Time Price Updates via Socket
  useEffect(() => {
    const updateListener = (data) => {
      setPrices(data);
    };

    addEventListener("public-gold-price", updateListener);

    return () => {
      removeEventListener("public-gold-price", updateListener);
    };
  }, [addEventListener, removeEventListener, setPrices]);

  return { isLoading, apiGoldData };
};
