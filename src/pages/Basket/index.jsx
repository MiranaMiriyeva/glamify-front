import React, { useContext, useState } from "react";
import "./index.scss";
import BasketContext from "../../context/basket/basketContext";
import AuthContext from "../../context/auth/authContext";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const Basket = () => {
  const { basket, addToBasket, increment, decrement, removeFromBasket, total } =
    useContext(BasketContext);
  const { isAuth } = useContext(AuthContext);

  const initialValues = {
    phone: "",
    address: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
  };

  const validationSchema = Yup.object({
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number is not valid")
      .required("Required"),
    address: Yup.string().required("Required"),

    cardNumber: Yup.string()
      .matches(/^\d{16}$/, "Card number must be 16 digits")
      .required("Required"),

    cardExpiry: Yup.string()
      .matches(
        /^(0[1-9]|1[0-2])\/\d{2}$/,
        "Expiry date must be in MM/YY format"
      )
      .required("Required"),

    cardCVC: Yup.string()
      .matches(/^\d{3}$/, "CVC must be 3 digits")
      .required("Required"),
  });

  const onSubmit = async (values) => {
    const order = basket.map((product) => ({
      productId: product.productId,
      name: product.name,
      price: product.price,
      colors: product.addedColors.map((color) => ({
        colorName: color.colorName,
        quantity: color.quantity,
      })),
    }));

    const checkoutData = {
      ...values,
      order,
    };

    try {
      const response = await fetch(
        "https://glamify-back.onrender.com/checkout",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(checkoutData),
        }
      );

      const data = await response.json();
      toast("Order completed successfully!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred during login");
    }
  };

  return (
    <div className="basket_page">
      <Helmet>
        <title>Glamify | Basket</title>
      </Helmet>
      <div className="basket_page_container">
        {basket.length === 0 ? (
          <div className="empty_basket">
            <img
              src="https://static.vecteezy.com/system/resources/previews/015/571/205/non_2x/cosmetics-store-with-girl-skincare-cosmetic-perfume-makeup-and-beauty-products-choice-in-in-flat-cartoon-hand-drawn-templates-illustration-vector.jpg"
              alt="empty_basket"
            />
            <p>Your basket is empty.</p>
            <Link to="/products">Shop Now</Link>
          </div>
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
                                increment(product, color.colorName)
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

                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                  >
                    {({ values }) => (
                      <Form className="checkout_form">
                        <div className="form_group">
                          <Field
                            name="phone"
                            type="text"
                            placeholder="Enter your phone number"
                          />
                          <ErrorMessage
                            name="phone"
                            component="div"
                            className="error_msg"
                          />
                        </div>

                        <div className="form_group">
                          <Field
                            name="address"
                            type="text"
                            placeholder="Enter your address"
                          />
                          <ErrorMessage
                            name="address"
                            component="div"
                            className="error_msg"
                          />
                        </div>

                        <>
                          <div className="form_group">
                            <Field
                              name="cardNumber"
                              type="text"
                              placeholder="Enter card number"
                            />
                            <ErrorMessage
                              name="cardNumber"
                              component="div"
                              className="error_msg"
                            />
                          </div>

                          <div className="form_group">
                            <Field
                              name="cardExpiry"
                              type="text"
                              placeholder="MM/YY"
                            />
                            <ErrorMessage
                              name="cardExpiry"
                              component="div"
                              className="error_msg"
                            />
                          </div>

                          <div className="form_group">
                            <Field
                              name="cardCVC"
                              type="text"
                              placeholder="CVC"
                            />
                            <ErrorMessage
                              name="cardCVC"
                              component="div"
                              className="error_msg"
                            />
                          </div>
                        </>

                        <button type="submit" className="submit_button">
                          Place Order
                        </button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
