import React, { useContext } from "react";
import "./index.scss";
import BasketContext from "../../context/basket/basketContext";
import AuthContext from "../../context/auth/authContext";
import { Helmet } from "react-helmet-async";

const Basket = () => {
  const { basket, addToBasket, decrement, removeFromBasket, total } =
    useContext(BasketContext);
  const { isAuth } = useContext(AuthContext);

  return (
    <div className="basket_page">
      <Helmet>
        <title>Glamify | Basket</title>
      </Helmet>
      <div className="basket_page_container">
        {basket.length === 0 ? (
          <p>Your basket is empty.</p>
        ) : (
          <div className="basket_container">
            <table className="basket_table">
              <tbody>
                {basket.map((product, productIndex) => (
                  <React.Fragment key={product.productId}>
                    <tr className="product_row">
                      <td rowSpan={product.addedColors.length + 1}>
                        <div className="product_info">
                          <img src={product.mainImage} alt={product.name} />
                          <p className="item_name">{product.name}</p>
                        </div>
                      </td>
                    </tr>
                    {product.addedColors.map((color, colorIndex) => (
                      <tr key={colorIndex} className="color_row">
                        <td>
                          <div className="color_info">
                            <img
                              src={color.colorImage}
                              alt={`${product.name} - ${color.colorName}`}
                            />
                            <span>{color.colorName}</span>
                          </div>
                        </td>
                        <td>
                          <div className="quantity_actions">
                            <button
                              onClick={() =>
                                decrement(product, color.colorName)
                              }
                            >
                              -
                            </button>
                            <span>{color.quantity}</span>
                            <button
                              onClick={() =>
                                addToBasket(product, color.colorName)
                              }
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>${(product.price * color.quantity).toFixed(2)}</td>
                        <td>
                          <button
                            onClick={() =>
                              removeFromBasket(product, color.colorName)
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
            <div className="basket_checkout">
              <h3>Order Summary</h3>
              <div className="basket_checkout_container">
                <div className="checkout_details">
                  <div className="checkout_row">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
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
                    <span>${(total + 5).toFixed(2)}</span>
                  </div>
                  <form
                    className="checkout_row promo_code"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <input type="text" placeholder="Enter promo Code" />
                    <button type="submit">Add</button>
                  </form>
                </div>
                <button className="checkout_button">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
