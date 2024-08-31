import React, { useEffect, useState } from 'react';
import styles from './AddToWishList.module.scss';
import classNames from 'classnames/bind';
import { useGlobalContext } from '../../../components/GlobalContext';
const cx = classNames.bind(styles);

function AddToWishList({ productId }) {
    const { user, setWishList } = useGlobalContext();
    const [isWish, setIsWish] = useState(false); // Correctly initialize state with useState
    // Function to handle adding to wish list
    const handleWishListBtn = async () => {
        try {
            // Check if the item is already in the wishlist
            if (isWish) {
                // Remove from wishlist
                const response = await fetch('http://localhost:8081/removeFromWishList', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        user: user,
                        productId: productId,
                    }),
                });

                const data = await response.json();
                if (response.ok) {
                    setTimeout(() => {
                        setWishList(prev => prev - 1);
                        setIsWish(false); // Set isWish to false after removing from wishlist
                    }, 750);
                } else {
                    console.error('Error:', data.error);
                }
            } else {
                // Add to wishlist
                const response = await fetch('http://localhost:8081/addToWishList', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        user: user,
                        productId: productId,
                    }),
                });

                const data = await response.json();
                if (response.ok) {
                    setTimeout(() => {
                        setWishList(data.wishListCount);
                        setIsWish(true); // Set isWish to true after adding to wishlist
                    }, 500);
                } else {
                    console.error('Error:', data.error);
                }
            }
        } catch (error) {
            console.error('Error toggling wishlist status:', error);
        }
    };
    useEffect(() => {
        const fetchWishList = async () => {
            try {
                const response = await fetch('http://localhost:8081/getWishList', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ user, }), // Gửi branchName qua body
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                const isInWishList = result.some(item => item.id_product === productId);
                setIsWish(isInWishList); // Set the initial state based on the fetched wishlist

            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchWishList();
    }, [user, productId]);

    return (
        <>
            <button
                className={cx("card-action-btn", { "active": isWish })}
                aria-labelledby="card-label-2"
                onClick={handleWishListBtn}  
            >
            <ion-icon name={isWish ? "heart" : "heart-outline"} /> {/* Icon based on state */}
            </button>
        </>
    );
}

export default AddToWishList;
