import React, { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import BasketContext from "./basketContext";

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useLocalStorage("basket", []);
  const addToBasket = (item, colorName) => {
    const productIndex = basket.findIndex(
      (product) => product.productId === item.productId
    );

    if (productIndex === -1) {
      setBasket([
        ...basket,
        {
          ...item,
          addedColors: [
            {
              colorName: item.colorName,
              colorImage: item.colorImages[0],
              quantity: 1,
            },
          ],
        },
      ]);
    } else {
      const product = basket[productIndex];
      const colorIndex = product.addedColors.findIndex(
        (color) => color.colorName === colorName
      );
      if (colorIndex === -1) {
        product.addedColors.push({
          colorName: item.colorName,
          colorImage: item.colorImages[0],
          quantity: 1,
        });
      } else {
        product.addedColors[colorIndex].quantity++;
      }
      const newBasket = [...basket];
      newBasket[productIndex] = product;
      setBasket(newBasket);
    }
  };

  const decrement = (item, colorName) => {
    const productIndex = basket.findIndex(
      (product) => product.productId === item.productId
    );
    if (productIndex === -1) return;

    const product = basket[productIndex];
    const colorIndex = product.addedColors.findIndex(
      (color) => color.colorName === colorName
    );
    if (colorIndex === -1) return;

    if (product.addedColors[colorIndex].quantity > 1) {
      product.addedColors[colorIndex].quantity--;
    } else {
      product.addedColors.splice(colorIndex, 1);
      if (product.addedColors.length === 0) {
        const newBasket = basket.filter((p) => p.productId !== item.productId);
        setBasket(newBasket);
        return;
      }
    }
    const newBasket = [...basket];
    newBasket[productIndex] = product;
    setBasket(newBasket);
  };

  const removeFromBasket = (item, colorName) => {
    const productIndex = basket.findIndex(
      (product) => product.productId === item.productId
    );
    if (productIndex === -1) return;

    const product = basket[productIndex];
    product.addedColors = product.addedColors.filter(
      (color) => color.colorName !== colorName
    );
    if (product.addedColors.length === 0) {
      const newBasket = basket.filter((p) => p.productId !== item.productId);
      setBasket(newBasket);
    } else {
      const newBasket = [...basket];
      newBasket[productIndex] = product;
      setBasket(newBasket);
    }
  };

  const total = basket.reduce((acc, product) => {
    const productTotal = product.addedColors.reduce(
      (sum, color) => sum + color.quantity * product.price,
      0
    );
    return acc + productTotal;
  }, 0);
  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, decrement, removeFromBasket, total }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
