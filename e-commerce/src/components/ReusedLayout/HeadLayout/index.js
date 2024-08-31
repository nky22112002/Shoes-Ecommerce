import React, { useEffect, useState, useRef } from 'react';
import styles from "./HeadLayout.module.scss"
import classNames from "classnames/bind"
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useGlobalContext } from '../../GlobalContext';
import {useDispatch} from "react-redux";
const images = require.context('../../../assets/images', false, /\.(jpg|jpeg|png|svg)$/);

const cx = classNames.bind(styles);



function HeadLayout(){
  
  const iconRef = useRef(null);
  const [flash, setFlash] = useState(false);
  const badgeRef = useRef(null);
  const { user, cartCount, setCartLocation, wishList, isClick, setIsClick} = useGlobalContext();
  const [isNavActive, setIsNavActive] = useState(false);
  const [navCartData, setNavCartData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const currentPath = window.location.pathname;
    const navbarLinks = document.querySelectorAll('.navbar-link');

    navbarLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add(cx('active'));
        }
    });
}, []);

  useEffect(() => {
    const overlay = document.querySelector("[data-overlay]");
    const navOpenBtn = document.querySelector("[data-nav-open-btn]");
    const navbar = document.querySelector("[data-navbar]");
    const navCloseBtn = document.querySelector("[data-nav-close-btn]");
    const header = document.querySelector("[data-header]");
    const goTopBtn = document.querySelector("[data-go-top]");
    const navOpenCart = document.querySelector("[data-nav-open-cart]");
    const navCloseCart = document.querySelector("[data-nav-close-cart]");
    const navCartList = document.querySelector("[data-nav-cart-list]");
    
    if (overlay && navOpenBtn && navbar && navCloseBtn && header && goTopBtn && navCartList && navOpenCart && navCloseCart) {
      const navElementsMenu = [overlay, navOpenBtn, navCloseBtn];
      const navElementsCart = [navOpenCart, navCloseCart];
      const handleClickNavbarMenu = () => {
        navbar.classList.toggle(cx("active"));
        overlay.classList.toggle(cx("active")); 
  
        if (navbar.classList.contains(cx("active"))) {
          // Lớp 'active' đã được áp dụng
          setIsNavActive(true);
        } else {
          // Lớp 'active' chưa được áp dụng
          setIsNavActive(false);
        }
        };
      const handleClickNavbarCart = () => {
        if(!isNavActive){
          navCartList.classList.toggle(cx("active"));
          fetchNavCart();
        }
      }
      navElementsCart.forEach((element) => {
        
        element.addEventListener("click", handleClickNavbarCart);
      })
      navElementsMenu.forEach((element) => {

        element.addEventListener("click", handleClickNavbarMenu);

      });

      const handleScroll = () => {
        if (window.scrollY >= 80) {
          header.classList.add(cx("active"));

        } else {
          header.classList.remove(cx("active"));
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        navElementsMenu.forEach((element) => {
          element.removeEventListener("click", handleClickNavbarMenu);
        });
        navElementsCart.forEach((element) => {
          element.removeEventListener("click", handleClickNavbarCart);
        })
        window.removeEventListener("scroll", handleScroll);
      };
        

    }

  }, [!isNavActive]); 
  
  
  useEffect(() => {
    if (iconRef.current) {
      setCartLocation(iconRef.current.getBoundingClientRect()); // Lưu vị trí của icon giỏ hàng
    }
  }, []);
  

  useEffect(() => {
    if (badgeRef.current) {
      setFlash(true);
      const timer = setTimeout(() => {
        setFlash(false);
      }, 500); // Thời gian khớp với animation

      return () => clearTimeout(timer);
    }
  }, [cartCount]);
  
  const fetchNavCart = async () => {
    try {
      const response = await fetch('http://localhost:8081/getCartListNav', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: user }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      setNavCartData(result);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  };
  
  const handleQuantityControl = async (productId, action) => {
    try {

    // Optimistic Update: Update state immediately
      setNavCartData((prevData) => {
        return prevData.reduce((acc, item) => {
          if (item.id_product === productId) {
            const newQuantity = action === '+' ? item.quantity + 1 : item.quantity - 1;
            if (newQuantity > 0) {
              // Keep the item in the cart with updated quantity
              acc.push({ ...item, quantity: newQuantity });
            }
            // If the new quantity is 0, do not push the item (remove it from the cart)
          } else {
            // Keep other items as they are
            acc.push(item);
          }
          return acc;
        }, []);
      });
      const response = await fetch('http://localhost:8081/updateCartListNav', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: productId,
          user: user,
          action: action,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Gọi lại fetchNavCart ngay sau khi cập nhật
      await fetchNavCart();
  
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };
  

  useEffect(() => {
      fetchNavCart();
      setIsClick(false);
  }, [user, cartCount, isClick]);


  
    return(
            <header className={cx("header")} data-header>
            <div className={cx("container")}>
                <div className={cx("overlay")} data-overlay />
                <a href="/" className={cx("logo")}>
                <img
                    src={images(`./logo.svg`)}
                    width={160}
                    height={50}
                    alt="Footcap logo"
                />
                </a>
                <button
                className={cx("nav-open-btn")}
                data-nav-open-btn
                aria-label="Open Menu"
                >
                <ion-icon name="menu-outline" />
                </button>
                <nav className={cx("navbar")} data-navbar>
                <button
                    className={cx("nav-close-btn")}
                    data-nav-close-btn
                    aria-label="Close Menu"
                >
                    <ion-icon name="close-outline" />
                </button>
                <a href="#" className={cx("logo")}>
                    <img
                    src={images(`./logo.svg`)}
                    width={190}
                    height={50}
                    alt="Footcap logo"
                    />
                </a>
                <ul className={cx("navbar-list")}>
                    <li className={cx("navbar-item")}>
                    <NavLink
                        to="/"
                        className={cx("navbar-link", { active: location.pathname === "/" })}
                    >
                        Home
                    </NavLink>
                    </li>
                    <li className={cx("navbar-item")}>
                    <NavLink
                        to="/product"
                        className={cx("navbar-link", { active: location.pathname === "/product" })}
                    >
                        Products
                    </NavLink>
                    </li>
                    <li className={cx("navbar-item")}>
                        <NavLink
                            to="/about"
                            className={cx("navbar-link", { active: location.pathname === "/about" })}
                        >
                            About
                        </NavLink>
                    </li>
                    
                    <li className={cx("navbar-item")}>
                        <NavLink
                            to="/contact"
                            className={cx("navbar-link", { active: location.pathname === "#" })}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <ul className={cx("nav-action-list")}>
                    <li>
                    <button className={cx("nav-action-btn")}>
                        <ion-icon name="search-outline" aria-hidden="true" />
                        <span className={cx("nav-action-text")}>Search</span>
                    </button>
                    </li>
                    <li>
                    <a href="/login" className={cx("nav-action-btn")}>
                        <ion-icon name="person-outline" aria-hidden="true" />
                        <span className={cx("nav-action-text")}>{user ? (<p>Welcome, {user}!</p>) : ('Login / Register')}</span>
                    </a>
                    </li>
                    <li>
                    <button className={cx("nav-action-btn")}>
                        <ion-icon name="heart-outline" aria-hidden="true" />
                        <span className={cx("nav-action-text")}>Wishlist</span>
                        <data className={cx("nav-action-badge")} value={wishList} aria-hidden="true">
                        {wishList}
                        </data>
                    </button>
                    </li>
                    <li>
                    <button className={cx("nav-action-btn")} data-nav-open-cart>
                      <ion-icon name="bag-outline" aria-hidden="true" ref={iconRef}/>
                      <data className={cx("nav-action-text")} value={navCartData.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}>
                        Basket: <strong>${navCartData.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</strong>
                      </data>
                      <data
                        className={cx("nav-action-badge", { flash })}
                        value={cartCount}
                        aria-hidden="true"
                        ref={badgeRef}
                      >
                        {cartCount}
                      </data>
                    </button>
                    </li>
                </ul>
                </nav>
                <nav className={cx("nav-cart-list")} data-nav-cart-list>
                  <span className={cx("nav-cart-count")}>Giỏ hàng ({cartCount})</span>
                  <button className={cx("nav-close-cart")} data-nav-close-cart aria-label='Close cart'>
                    <ion-icon name="close-outline" />
                  </button>
                  <ul className={cx("cart-list")}>
                  {navCartData.map((data) => (
                    <li key={data.id_product} className={cx("cart-item")}>
                      <img
                          src={images(`./${data.url}`)}
                          alt={data.url}
                      />
                      <div className={cx("product-info")}>
                        <span>{data.name}</span>
                        <strong>${data.price}</strong>
                      </div>
                      <div className={cx("quantity-control")} >
                        <button className={cx("btn-decrease")} onClick={() => handleQuantityControl(data.id_product, '-')}><ion-icon name="remove-outline"/></button>
                        <input className={cx("quantity-input")} value={data.quantity} readOnly/>
                        <button className={cx("btn-increase")} onClick={() => handleQuantityControl(data.id_product, '+')}><ion-icon name="add-outline"/></button>
                      </div>
                    </li>
                  ))}
                    
                  </ul>
                  <div className={cx("nav-cart-summary")}>
                    <p>Total: ${navCartData.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
                    <a href="/checkout" className={cx("nav-cart-checkout-btn")}>
                      Checkout
                    </a>
                  </div>
                </nav>
            </div>
            </header>
           
            
    )
}
export default HeadLayout;