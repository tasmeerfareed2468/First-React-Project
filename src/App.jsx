import React from 'react';
import './App.css';

export default function App() {
  return (
    <>
      {/* CDN Links */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      />

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg sticky-top shadow">
        <div className="container">
          <a className="navbar-brand" href="#">
            Food <span>man</span>
          </a>

          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#special">Special</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#chef">Chef</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              <li className="nav-item cart-icon ms-lg-3">
                <a href="#">
                  <img src="/Images/shopping-bag.png" alt="Shopping bag icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-title">
                Fresh & Delicious <span>Fast Food</span> Restaurant Experience
              </h1>
              <p className="hero-text">
                Foodman is your go-to online food restaurant for tasty burgers, crispy zinger burgers, juicy grilled chicken, spicy chicken curry, and fast food made with fresh ingredients. Enjoy quick food delivery and the best restaurant taste at home.
              </p>
              <a href="#special" className="custom-btn">
                Order Delicious Fast Food Online
              </a>
            </div>
            <div className="col-lg-6 hero-img text-center">
              <img
                src="/Images/header2-removebg-preview.png"
                alt="Foodman fast food"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Special Dishes */}
      <section className="special-dishes-section py-5" id="special">
        <div className="container">
          <div className="section-title">
            <h1>Our Special Dishes</h1>
            <p>Fresh, Delicious & High-Quality Restaurant Food</p>
          </div>

          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-6 col-lg-4">
              <div className="card food-card p-3">
                <img src="/Images/delivery3.png" alt="Chicken Curry" />
                <div className="card-body">
                  <h5>Chicken Curry</h5>
                  <p>
                    Delicious spicy chicken curry made with fresh ingredients and traditional flavors.
                  </p>
                  <div className="rating mb-3">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="price">500 Rs</span>
                    <button className="add-btn">Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-6 col-lg-4">
              <div className="card food-card p-3">
                <img src="/Images/burger.png" alt="Zinger Burger" />
                <div className="card-body">
                  <h5>Zinger Burger</h5>
                  <p>
                    Crispy zinger burger with juicy chicken, cheese, and special sauce.
                  </p>
                  <div className="rating mb-3">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="price">450 Rs</span>
                    <button className="add-btn">Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-6 col-lg-4">
              <div className="card food-card p-3">
                <img src="/Images/delivery2.png" alt="Grilled Chicken" />
                <div className="card-body">
                  <h5>Grilled Chicken</h5>
                  <p>
                    Healthy grilled chicken cooked with fresh herbs and premium spices.
                  </p>
                  <div className="rating mb-3">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="price">700 Rs</span>
                    <button className="add-btn">Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="services-section" id='services'>
        <div className="container">
          <div className="section-title text-center mb-5">
  <h1>Our Services</h1>
  <p className="gradient-text">
    We deliver fresh, high-quality, and delicious fast food right to your doorstep.
  </p>
</div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="icon-box green">
                  <i className="fa-solid fa-bowl-food"></i>
                </div>
                <h3>Order Delicious Fast Food Online</h3>
                <p>
                  Easily order burgers, grilled chicken, chicken curry, BBQ meals, and delicious fast food online with quick delivery and fresh ingredients from Foodman Restaurant.
                </p>
                <a href="#" className="read-more">
                  Read More <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="icon-box red">
                  <i className="fa-solid fa-truck"></i>
                </div>
                <h3>Fast & Secure Food Delivery</h3>
                <p>
                  Enjoy fast food delivery services with hot and fresh meals, crispy burgers, grilled chicken, and tasty restaurant food delivered quickly to your doorstep.
                </p>
                <a href="#" className="read-more">
                  Read More <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="icon-box blue">
                  <i className="fa-regular fa-star"></i>
                </div>
                <h3>Enjoy Fresh & Quality Meals</h3>
                <p>
                  Taste premium quality fast food, spicy chicken curry, juicy burgers, BBQ dishes, and healthy meals prepared with fresh ingredients by expert chefs.
                </p>
                <a href="#" className="read-more">
                  Read More <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="chef-section py-5" id="chef">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6 text-center">
              <div className="chef-img-box mx-auto">
                <img
                  src="/Images/cheif-removebg-preview.png"
                  alt="Professional Chef"
                  className="img-fluid chef-img"
                />
              </div>
            </div>

            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="chef-title">
                Cooked By the Chief in the World
              </h1>
              <p className="chef-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla quos natus laborum sit! Ipsa sint reiciendis nesciunt optio corrupti Lorem ipsum dolor sit, amet
              </p>
              <ul className="chef-list">
                <li>
                  <i className="fa-solid fa-square-check green"></i>
                  Enjoy ipsum dolor sit amet consectetur adipisicing elit. Quaerat, harum.
                </li>
                <li>
                  <i className="fa-solid fa-square-check blue"></i>
                  Experience ipsum dolor sit amet consectetur adipisicing elit. Quaerat, harum.
                </li>
                <li>
                  <i className="fa-solid fa-square-check red"></i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, harum.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="site-footer">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6">
              <h3 className="footer-brand">Food <span>man</span></h3>
              <p className="footer-about">
                Foodman is one of the best fast food restaurant websites offering crispy burgers, grilled chicken, chicken curry, BBQ meals, healthy food, and fast online food delivery services with fresh ingredients and premium taste.
              </p>
            </div>

            <div className="col-lg-2 col-md-6 col-6">
              <h5 className="footer-heading">Menu</h5>
              <ul className="footer-links">
                <li>Special Burgers</li>
                <li>Chicken Curry Meals</li>
                <li>Fast Food Delivery</li>
                <li>Online Food Ordering</li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 col-6">
              <h5 className="footer-heading">Information</h5>
              <ul className="footer-links">
                <li>About Foodman Restaurant</li>
                <li>Contact Food Delivery Team</li>
                <li>24/7 Customer Support</li>
                <li>Fresh Food Quality</li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="footer-heading">Company</h5>
              <ul className="footer-links">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Food Delivery Services</li>
                <li>Restaurant Careers</li>
              </ul>
            </div>
          </div>

          <hr className="footer-divider" />

          <p className="copyright-text text-center mb-0">
            © 2026 Foodman | All Rights Reserved. Designed & Developed by <span className="developer-name">Tasmeer Fareed</span>
          </p>
        </div>
      </footer>
    </>
  );
}