import React from "react";
import "./index.scss";
import HLSPlayer from "../../hlsplayer";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { TiHeartOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
const videoSrc =
  "https://vod-cmaf.freecaster.com/parfums_christian_dior/9dbed422-0d8a-4934-9de0-750c825eb7c5/oue06ZXNhYrlNDTGgaR2VACu.m3u8";
const Home = () => {
  return (
    <>
      <section id="hero-section">
        <HLSPlayer src={videoSrc} />
        <div className="text animate-slide-in">
          <h1>Discover Your Beauty</h1>
          <p>Pamper Yourself with Our Professional Services and </p>
          <p>High-Quality Products.</p>
        </div>
      </section>
      <section id="about-artist">
        <div className="container">
          <div className="text">
            <h2>The center of attention.</h2>
            <p>
              My love of makeup started young while often sneaking into my
              mother’s makeup vanity and playing with various shades of
              lipstick, eyeshadow and blush. Makeup became a full blown
              obsession after four years of art school where I learned to master
              the airbrush technique.
            </p>
            <button>CONTACT US</button>
          </div>

          <img
            src="https://i.pinimg.com/564x/9e/2b/f5/9e2bf56f8e38f9271cac92e73385f7af.jpg"
            alt="about-artist"
          />
        </div>
      </section>
      <section id="best-services">
        <div className="container">
          <h2>BEST MAKEUP SERVICES</h2>
          <p>Professional makeup</p>
          <div className="box-container">
            <div className="box">
              <img
                src="https://i.pinimg.com/736x/72/93/bf/7293bf1a499ffc702782daa9ae2b0a27.jpg"
                alt=""
              />
              <div className="details details-t">
                <h5>DAILY MAKEUP</h5>
                <span>From $20.0</span>
              </div>
            </div>

            <div className="box">
              <div className="details">
                <h5>WEDDING MAKEUP</h5>
                <span>From $50.0</span>
              </div>
              <img
                className="img-b"
                src="https://i.pinimg.com/736x/8b/39/9c/8b399c53a83665af25477cbe352c20a3.jpg"
                alt=""
              />
            </div>

            <div className="box box-t">
              <img
                src="https://i.pinimg.com/564x/5f/7f/3b/5f7f3b276fc80f0887cac1c3bde8c0c7.jpg"
                alt=""
              />
              <div className="details details-t">
                <h5>EVENT MAKEUP</h5>
                <span>From $40.0</span>
              </div>
            </div>

            <div className="box">
              <div className="details">
                <h5>CREATIVE MAKEUP</h5>
                <span>From $70.0</span>
              </div>
              <img
                className="img-b"
                src="https://i.pinimg.com/564x/92/ef/bb/92efbbce81465d2ce21bc57a9bb5eb56.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section id="gallery">
        {/* <h2>Check out our gallery</h2> */}
        <div className="image-boxes">
          <img
            className="img1"
            src="https://i.pinimg.com/736x/5b/2b/e7/5b2be7f0d8332357975cebe2e47ccc4f.jpg"
            alt=""
          />
          <img
            className="img2"
            src="https://images.squarespace-cdn.com/content/v1/5a931a17b27e397ab1207496/1519697733098-6SMVDPJSNDUJN39RM64X/IMGL8671.JPG?format=500w"
            alt=""
          />
          <img
            className="img3"
            src="https://i.pinimg.com/564x/01/e8/04/01e80491c53d65f4e1811a9927ad071f.jpg"
            alt=""
          />
          <img
            className="img4"
            src="https://i.pinimg.com/564x/e7/20/4f/e7204ffdd26efd821bdd81edcaecbfe7.jpg"
            alt=""
          />
          <img
            className="img5"
            src="https://i.pinimg.com/564x/94/7f/7d/947f7deef4871b42220426a5d2d01da7.jpg"
            alt=""
          />
          <img
            className="img6"
            src="https://i.pinimg.com/564x/3d/7b/ed/3d7bed9170eede1436c6692041117d25.jpg"
            alt=""
          />
          <img
            className="img7"
            src="https://i.pinimg.com/564x/60/82/c5/6082c55aa05dc6db9b5b99caece155ea.jpg"
            alt=""
          />
        </div>
      </section>
      <section id="home_products_section">
        <div className="home_products_section_container">
          <h2>BEAUTY PRODUCTS</h2>
          <p className="bp_heading">Beauty products</p>
          <div className="home_products_box_container">
            <div className="home_products_box">
              <img src="https://i.imgur.com/480rSE8.png" alt="" />
              <p className="home_products_box_category">Lipstick</p>
              <p className="home_products_box_name">KIKO Creamy Lipstick</p>
              <p className="home_products_box_price">$25.0</p>
              <div className="home_products_box_icons">
                <HiOutlineShoppingBag />
                <TiHeartOutline />
              </div>
            </div>

            <div className="home_products_box">
              <img src="https://i.imgur.com/Iv99fLK.png" alt="" />
              <p className="home_products_box_category">Palette</p>
              <p className="home_products_box_name">KIKO Eyeshadow Plaette</p>
              <p className="home_products_box_price">$20.0</p>
              <div className="home_products_box_icons">
                <HiOutlineShoppingBag />
                <TiHeartOutline />
              </div>
            </div>

            <div className="home_products_box">
              <img
                src="https://www.kikocosmetics.com/_next/image/?url=https%3A%2F%2Fassets.joqhl8w6.on-eva.io%2Fblob%2F18c0d6b8-7ae7-4cfe-8066-4c80ac73e944&w=384&q=75"
                alt=""
              />
              <p className="home_products_box_category">Mascara</p>
              <p className="home_products_box_name">KIKO Volume Mascara</p>
              <p className="home_products_box_price">$18.0</p>
              <div className="home_products_box_icons">
                <HiOutlineShoppingBag />
                <TiHeartOutline />
              </div>
            </div>

            <div className="home_products_box">
              <img
                src="https://www.kikocosmetics.com/_next/image/?url=https%3A%2F%2Fassets.joqhl8w6.on-eva.io%2Fblob%2Fbe1fa520-7b5f-325c-64fe-8be7b643d95f&w=384&q=75"
                alt=""
              />
              <p className="home_products_box_category">Foundation</p>
              <p className="home_products_box_name">KIKO Powder Foundation</p>
              <p className="home_products_box_price">$20.0</p>
              <div className="home_products_box_icons">
                <HiOutlineShoppingBag />
                <TiHeartOutline />
              </div>
            </div>
          </div>
          <div className="home_products_section_ending">
            <Link to={"/shop"}>VIEW ALL PRODUCTS</Link>
            <hr />
          </div>
        </div>
      </section>
      <section id="tips_section">
        <div className="tips_section_container">
          <h2>MAKEUP ARTIST TIPS</h2>
          <p className="tips_heading">Makeup artist tips</p>
          <div className="tips_section_box_container">
            <Link
              className="tips_section_box"
              to={
                "https://www.youtube.com/watch?v=H01k32xOb9s&pp=ygULbWFrZXVwIHRpcHM%3D"
              }
            >
              <img
                src="https://i.pinimg.com/564x/c6/09/a8/c609a854e42f5abcd6b28b1e121eb363.jpg"
                alt=""
              />
              <h4>Tips From Makeup Artists You’ve Never Heard</h4>
              <div>
                <div className="tips_section_box_author">Rosie Chapman </div>|
                <div className="tips_section_box_date">Jul 5, 2024</div>
              </div>
            </Link>
            <Link
              className="tips_section_box"
              to={
                "https://www.youtube.com/watch?v=H01k32xOb9s&pp=ygULbWFrZXVwIHRpcHM%3D"
              }
            >
              <img
                src="https://i.pinimg.com/564x/e4/f2/92/e4f292a5e60b32823fe9d74d23eaa40c.jpg"
                alt=""
              />
              <h4>Everything I Learned From A Professional Makeup Artist</h4>
              <div>
                <div className="tips_section_box_author">Rosie Chapman</div>|
                <div className="tips_section_box_date">Jul 10, 2024</div>
              </div>
            </Link>

            <Link
              className="tips_section_box"
              to={
                "https://www.youtube.com/watch?v=H01k32xOb9s&pp=ygULbWFrZXVwIHRpcHM%3D"
              }
            >
              <img
                src="https://i.pinimg.com/564x/e4/0d/64/e40d64037ff9995be5608d4e11d389f0.jpg"
                alt=""
              />
              <h4>10 Makeup-Artist Tips That Surprised (and Delighted) Us</h4>
              <div>
                <div className="tips_section_box_author">Rosie Chapman</div>|
                <div className="tips_section_box_date">Jul 15, 2024</div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section id="contact_section">
        <div className="contact_section_container">
          <div className="left_side">
            <h2>BOOK ONLINE FOR</h2>
            <span>10% DISCOUNT</span>
          </div>
          <div className="right_side">
            <h2>GET A QUOTE</h2>
            <form>
              <div>
                <input type="text" placeholder="Name" required />
                <input type="number" placeholder="Phone number" required />
              </div>
              <div>
                <input type="email" placeholder="Email" required />
                <select required>
                  <option value="Makeup">Makeup</option>
                  <option value="Hair">Hair</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <textarea placeholder="Your message"></textarea>
              <button className="book_btn">Book</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
