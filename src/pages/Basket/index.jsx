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
        <title> Glamify | Basket</title>
      </Helmet>
      <div className="basket_page_container">
        {basket.length === 0 ? (
          <p>Your basket is empty.</p>
        ) : (
          <div className="basket_container">
            <table className="basket_table">
              <tbody>
                {basket.map((item, index) => (
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
                            <span>{color.colorName}</span>
                          </div>
                        </td>
                        <td>
                          <div className="quantity_actions">
                            <button
                              onClick={(e) =>
                                decrement(item._id, color.colorName, e)
                              }
                            >
                              -
                            </button>
                            <span>{color.quantity}</span>
                            <button
                              onClick={(e) =>
                                addToBasket(item._id, color.colorName, e)
                              }
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>${item.price * color.quantity}</td>
                        <td>
                          <button
                            onClick={() => removeFromBasket(item.productId)}
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
                    {/* <span>${totalPrice.toFixed(2)}</span> */}
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
                    {/* <span>${(totalPrice + 5).toFixed(2)}</span> */}
                  </div>
                  <form className="checkout_row promo_code">
                    <input type="text" placeholder="Enter promo Code" />
                    <button>Add</button>
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
