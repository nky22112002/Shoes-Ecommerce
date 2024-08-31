import React, { useRef, useEffect, useState } from 'react';
import styles from './AddToCartBtn.module.scss';
import classNames from 'classnames/bind';
import { useGlobalContext } from '../../../components/GlobalContext';

const cx = classNames.bind(styles);

function AddToCartBtn({ productId, productUrl, children, className }) {
    const { user, setCartCount, cartLocation, setIsClick } = useGlobalContext();
    const btnRef = useRef(null); // Reference for the button
    const flyingImageRef = useRef(null);
    const [isFlying, setIsFlying] = useState(false);
    const { btnPosition, setBtnPosition, isProductDetail, setIsProductDetail } = useGlobalContext();

    const updateBtnPosition = () => {
        if (btnRef.current) {
            const rect = btnRef.current.getBoundingClientRect();
            setBtnPosition({ left: rect.left, top: rect.top });
        }
    };
    useEffect(() => {
        // Initial update of button position when component mounts
        updateBtnPosition();
        window.addEventListener('resize', updateBtnPosition); // Update position on window resize

        return () => {
            window.removeEventListener('resize', updateBtnPosition);
        };
    }, []);
    useEffect(() => {
        if (isFlying && flyingImageRef.current && cartLocation) {
            const img = flyingImageRef.current;
            const { top: cartTop, left: cartLeft } = cartLocation;

            // Get the position of the flying image
            let imgRect = flyingImageRef.current.getBoundingClientRect();
            console.log("imgRectleft-imgRectTop:", imgRect.left, imgRect.top);
            console.log("btn position:", btnPosition);

            // Check if imgRect is valid, if not use btnRef position
            const startLeft = imgRect.left !== undefined ? imgRect.left : btnPosition.left;
            const startTop = imgRect.top !== undefined ? imgRect.top : btnPosition.top;

            console.log("startLeft:", startLeft);
            console.log("startTop:", startTop);
            console.log("end location:", cartLocation);

            // Calculate the movement based on valid coordinates
            const deltaX = cartLeft - startLeft;
            const deltaY = cartTop - startTop;
            console.log("deltaX:", deltaX);
            console.log("deltaY:", deltaY);
            img.style.setProperty('--delta-x', `${deltaX}px`);
            img.style.setProperty('--delta-y', `${deltaY}px`);
            if (isProductDetail) {
                img.style.left = `${btnPosition.left}px`;
                img.style.top = `${btnPosition.top}px`;
                setIsProductDetail(false);
            }
            
        }
    }, [isFlying, cartLocation, btnPosition, isProductDetail]);

    const triggerFlyEffect = () => {
        setIsFlying(true);
    };

    // Function to handle adding to cart
    const handleAddToCart = async () => {
        updateBtnPosition();
        try {
            const response = await fetch('http://localhost:8081/addToCart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId,
                    user,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                setIsClick(true);
                triggerFlyEffect(); // Trigger flying effect
                setTimeout(() => {
                    setCartCount(data.productCount);
                }, 1000);
            } else {
                console.error('Error:', data.error);
            }
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };

    useEffect(() => {
        if (isFlying) {
            const timeoutId = setTimeout(() => {
                setIsFlying(false);
                flyingImageRef.current.classList.remove(cx('fly-to-cart'));
            }, 1000); // Thời gian trùng với thời lượng animation

            return () => clearTimeout(timeoutId);
        }
    }, [isFlying]);

    return (
        <>
            <img
                ref={flyingImageRef}
                src={productUrl}
                alt="Flying"
                className={cx("flying-image", { 'fly-to-cart': isFlying })}
                style={{
                    display: isFlying ? 'block' : 'none',
                }}
            />

            <button
                ref={btnRef}
                className={cx("card-action-btn", className)}
                aria-labelledby="card-label-1"
                onClick={handleAddToCart}
            >
                <ion-icon name="cart-outline" />
                {children}
            </button>
        </>
    );
}

export default AddToCartBtn;
