import classNames from "classnames/bind";
import styles from "./ProductLayout.module.scss";
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import AddToCartBtn from '../../ReusedFunction/AddToCartBtn';
import AddToWishList from '../../ReusedFunction/AddToWishList';
import QuickViewBtn from '../../ReusedFunction/QuickViewBtn';
const cx = classNames.bind(styles);
const images = require.context('../../../assets/images', false, /\.(jpg|jpeg|png)$/);

function ProductLayout({selectedBranch }){
    const [products, setProducts] = useState([]);
    const [isQuickViewOpen, setQuickViewOpen] = useState(false); // State to control modal visibility

    
    // useEffect(() => {
    //     fetch('http://localhost:8081/getTopProducts')
    //         .then(res => {
    //             if (!res.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return res.json();
    //         })
    //         .then(data => {
    //             const [productData] = data;
    //             setProducts(productData);
    //         })
    //         .catch(error => console.log('Error fetching products:', error));
    // }, []);
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8081/getTopProducts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ branchName: selectedBranch }), // Gửi branchName qua body
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                setProducts(result); // Cập nhật state với kết quả từ backend
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [selectedBranch]);
    // Function to handle quick view button click
    const handleQuickViewClick = () => {
        setQuickViewOpen(true);
    };

    // Function to close the quick view modal
    const handleCloseModal = () => {
        setQuickViewOpen(false);
    };
    
    
    
 return(
    <div>
        <ul className={cx("product-list")}>
            {products.map(product => (
                    <li className={cx("product-item")} key={product.id}>
                        <div 
                        className={cx("product-card")} 
                        tabIndex={0}
                        >
                            <figure className={cx("card-banner")}>
                            <img 
                                src={images(`./${product.product_url}`)}
                                width={312}
                                height={350}
                                loading="lazy"
                                alt={product.product_name}
                                className={cx("image-contain")}
                            />
                            <div className={cx("card-badge")}>New</div>
                            <ul className={cx("card-action-list")}>
                                <li className={cx("card-action-item")} key={`${product.id}-cart`}>
                                <AddToCartBtn
                                    productId={product.id}
                                    productUrl={images(`./${product.product_url}`)} 
                                />
                                <div className={cx("card-action-tooltip")} id="card-label-1">
                                    Add to Cart
                                </div>
                                </li>
                                <li className={cx("card-action-item")} key={`${product.id}-heart`}>
                                <AddToWishList
                                productId={product.id}
                                />
                                <div className={cx("card-action-tooltip")} id="card-label-2">
                                    Add to Whishlist
                                </div>
                                </li>
                                <li className={cx("card-action-item")} key={`${product.id}-eye`}>
                                <button
                                    className={cx("card-action-btn")}
                                    aria-labelledby="card-label-3"
                                    onClick={handleQuickViewClick} // Handle click to open modal
                                >
                                    <ion-icon name="eye-outline" />
                                </button>
                                <div className={cx("card-action-tooltip")} id="card-label-3">
                                    Quick View
                                </div>
                                <>
                                {/* Quick View Modal */}
                                    <QuickViewBtn isOpen={isQuickViewOpen} onClose={handleCloseModal} product={product}/>
                                </>
                                </li>
                                <li className={cx("card-action-item")} key={`${product.id}-repeat`}>
                                <button
                                    className={cx("card-action-btn")}
                                    aria-labelledby="card-label-4"
                                >
                                    <ion-icon name="repeat-outline" />
                                </button>
                                <div className={cx("card-action-tooltip")} id="card-label-4">
                                    Compare
                                </div>
                                </li>
                            </ul>
                            </figure>
                            <div className={cx("card-content")}>
                            <div className={cx("card-cat")}>
                            {product.categories.split('/').map((category, index) => (
                                <span key={index}>
                                    <a href="#" className={cx("card-cat-link")}>{category}</a>
                                    {index < product.categories.split('/').length - 1 && "/"}
                                </span>
                            ))}
                            </div>
                            <h3 className={cx("h3", "card-title")}>
                                <a href={`/productdetail?id=${product.id}`} style={{ color: '#551A8B' }}>{product.product_name}</a>
                            </h3>
                            <data className={cx("card-price")} value="180.85">
                                ${product.product_price}
                            </data>
                            </div>
                        </div>
                        </li>
                    ))}
        </ul>

    </div>
 )
}
export default ProductLayout;