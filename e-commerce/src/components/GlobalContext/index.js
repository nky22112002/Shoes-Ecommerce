// src/contexts/GlobalContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

// Tạo Context
const GlobalContext = createContext();

// Tạo Provider
export const GlobalProvider = ({ children }) => {
  const [cartLocation, setCartLocation] = useState(null);
  const [isClick, setIsClick] = useState(false);
  const [btnPosition, setBtnPosition] = useState({ left: 0, top: 0 });
  const [isProductDetail, setIsProductDetail] = useState(false);
  const [wishList, setWishList] = useState(() => {
    const savedWishList = localStorage.getItem('wishList');
    return savedWishList ? JSON.parse(savedWishList) : null;
  });
  const [cartCount, setCartCount] = useState(() => {
    const savedCartCount = localStorage.getItem('cartCount');
    return savedCartCount ? JSON.parse(savedCartCount) : null;
  });

  // Khai báo các giá trị toàn cục ở đây
  const [user, setUser] = useState(() => {
    // Lấy giá trị user từ localStorage khi khởi tạo
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  useEffect(() => {
    if (wishList) {
      localStorage.setItem('wishList', JSON.stringify(wishList));
    } else {
      localStorage.removeItem('wishList');
    }
  }, [wishList]);
  // Lưu giá trị user vào localStorage mỗi khi nó thay đổi
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);
  useEffect(() => {
    if (cartCount) {
      localStorage.setItem('cartCount', JSON.stringify(cartCount));
    } else {
      localStorage.removeItem('cartCount');
    }
  }, [cartCount]);
  return (
    <GlobalContext.Provider value={{ 
    user, setUser, 
    cartCount, setCartCount, 
    cartLocation, setCartLocation, 
    wishList, setWishList,
    isClick, setIsClick,
    btnPosition, setBtnPosition, 
    isProductDetail, setIsProductDetail,
    }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Hook tiện lợi để sử dụng Context
export const useGlobalContext = () => useContext(GlobalContext);
