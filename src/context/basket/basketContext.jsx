import React, { createContext } from "react";
import useLocalStorage from "use-local-storage";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useLocalStorage("basket", []);

  // Sepete ürün ekleme fonksiyonu
  const addToBasket = (product, selectedColorId) => {
    const existingItem = basket.find(
      (item) =>
        item._id === product._id && item.selectedColorId === selectedColorId
    );

    if (existingItem) {
      // Eğer ürün sepette varsa, miktarını artır
      setBasket((prevBasket) =>
        prevBasket.map((item) =>
          item._id === product._id && item.selectedColorId === selectedColorId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Eğer ürün sepette yoksa, yeni ürün olarak ekle
      const newItem = {
        ...product,
        selectedColorId,
        quantity: 1, // Varsayılan miktar
      };
      setBasket((prevBasket) => [...prevBasket, newItem]);
    }
  };

  // Miktarı artırma fonksiyonu
  const incrementQuantity = (productId, selectedColorId) => {
    setBasket((prevBasket) =>
      prevBasket.map((item) =>
        item._id === productId && item.selectedColorId === selectedColorId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Miktarı azaltma fonksiyonu
  const decrementQuantity = (productId, selectedColorId) => {
    setBasket((prevBasket) =>
      prevBasket.map((item) =>
        item._id === productId && item.selectedColorId === selectedColorId
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
            }
          : item
      )
    );
  };

  // Ürünü sepetten kaldırma fonksiyonu
  const removeFromBasket = (productId, selectedColorId) => {
    setBasket((prevBasket) =>
      prevBasket.filter(
        (item) =>
          !(item._id === productId && item.selectedColorId === selectedColorId)
      )
    );
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        addToBasket,
        incrementQuantity,
        decrementQuantity,
        removeFromBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
