import React, { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import BasketContext from "./basketContext";

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useLocalStorage("basket", []);
  const [total, setTotal] = useLocalStorage("total", []);

  function addToBasket(item) {
    let findedElemIndex = basket.findIndex((elem) => elem._id == item._id);
    console.log(findedElemIndex);
    if (findedElemIndex == -1) {
      setBasket([...basket, { ...item, count: 1 }]);
      return;
    }
    console.log("dusdu");
    console.log(basket[findedElemIndex].count);
    basket[findedElemIndex].count++;
    setBasket([...basket]);
  }

  function decrement(item) {
    console.log("clicked");
    let findedElemIndex = basket.findIndex((elem) => elem._id == item._id);
    console.log(basket[findedElemIndex].count);
    if (basket[findedElemIndex].count != 1) {
      basket[findedElemIndex].count--;
      setBasket([...basket]);
    } else {
      setBasket(basket.filter((elem) => elem._id != item._id));
    }
  }

  function removeFromBasket(item) {
    setBasket(basket.filter((elem) => elem._id != item._id));
  }
  //   setTotal(
  //     basket.reduce(
  //       (total, acc) => total + item.count*item.price,
  //       0
  //     )
  //   );
  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, decrement, removeFromBasket, total }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
