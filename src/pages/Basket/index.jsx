import React, { useContext } from "react";
import { BasketContext } from "../../context/basket/basketContext";
import "./index.scss";

const Basket = () => {
  const { basket, incrementQuantity, decrementQuantity, removeFromBasket } =
    useContext(BasketContext);

  // Ürünleri grupla (aynı ürünün farklı renklerini birleştir)
  const groupedBasket = basket.reduce((acc, item) => {
    const key = item._id; // Ürünün ID'sine göre grupla
    if (!acc[key]) {
      acc[key] = {
        ...item,
        colors: [], // Renkleri burada birleştireceğiz
      };
    }
    // Renk bilgilerini ekleyelim
    const selectedColor = item.colors.find(
      (color) => color._id === item.selectedColorId
    );
    acc[key].colors.push({
      ...selectedColor,
      quantity: item.quantity,
    });
    return acc;
  }, {});

  const groupedBasketArray = Object.values(groupedBasket);

  // Toplam fiyatı hesapla
  const totalPrice = basket.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="basket_page">
      <div className="basket_page_container">
        {basket.length === 0 ? (
          <p>Your basket is empty.</p>
        ) : (
          <>
            {/* <h2>Your Basket</h2> */}
            <div className="basket_container">
              {/* Sepet Tablosu */}
              <table className="basket_table">
                <tbody>
                  {groupedBasketArray.map((item, index) => (
                    <React.Fragment key={index}>
                      <tr className="product_row">
                        <td rowSpan={item.colors.length + 1}>
                          <div className="product_info">
                            <img src={item.mainImage} alt={item.name} />
                            <p className="item_name">{item.name}</p>
                          </div>
                        </td>
                      </tr>
                      {item.colors.map((color, colorIndex) => (
                        <tr key={colorIndex} className="color_row">
                          <td>
                            <div className="color_info">
                              <img
                                src={color.colorImages[0]}
                                alt={color.colorName}
                              />
                              <span>{color.colorName}</span>
                            </div>
                          </td>
                          <td>
                            <div className="quantity_actions">
                              <button
                                onClick={() =>
                                  decrementQuantity(item._id, color._id)
                                }
                              >
                                -
                              </button>
                              <span>{color.quantity}</span>
                              <button
                                onClick={() =>
                                  incrementQuantity(item._id, color._id)
                                }
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td>${item.price * color.quantity}</td>
                          <td>
                            <button
                              onClick={() =>
                                removeFromBasket(item._id, color._id)
                              }
                              className="remove_button"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>

              {/* Checkout Bölümü */}
              <div className="basket_checkout">
                <h3>Order Summary</h3>
                <div className="basket_checkout_container">
                  <div className="checkout_details">
                    <div className="checkout_row">
                      <span>Subtotal</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="checkout_row">
                      <span>Shipping</span>
                      <span>$5.00</span>
                    </div>
                    <div className="checkout_row">
                      <span>Discount</span>
                      <span>-$0.00</span>
                    </div>
                    <div className="checkout_row total">
                      <span>Total</span>
                      <span>${(totalPrice + 5).toFixed(2)}</span>
                    </div>
                    <form className="checkout_row promo_code">
                      <input type="text" placeholder="Enter promo Code" />
                      <button>Add</button>
                    </form>
                  </div>

                  <button className="checkout_button">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Basket;
