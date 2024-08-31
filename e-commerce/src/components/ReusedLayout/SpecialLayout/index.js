import { useState, useEffect } from 'react';
import styles from './SpecialLayout.mudule.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const images = require.context('../../../assets/images', false, /\.(jpg|jpeg|png)$/);

function SpecialLayout(){
    const [products, setProduct] = useState([]);
    const [data, setData] = useState({id: '', url: ''});
    useEffect(() => {
        fetch('http://localhost:8081/specialProducts')
            .then(res => res.json())
            .then(products => setProduct(products))
            .catch(error => console.log(error));
    }, []);
    useEffect(() => {
        fetch('http://localhost:8081/banner')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setData(data);
            })
            .catch(error => console.error('Fetch error:', error));
    }, []);
    const imageUrl = data.url ? images(`./${data.url}`) : images('./special-banner.jpg');
    
    return (
            <div className={cx("special-container")}>
                <div className={cx("special-banner")} style={{backgroundImage: `url(${imageUrl})`}}>
                        <h2 className={cx("h3", "banner-title")}>New Trend Edition</h2>
                        <a href="#" className={cx("btn", "btn-link")}>
                        <span>Explore All</span>
                        <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                        </a>
                    </div>
                    <div className={cx("special-product")}>
                        <h2 className={cx("h2", "section-title")}>
                        <span className={cx("text")}>Shoes Special</span>
                        <span className={cx("line")}></span>
                        </h2>
                        <ul className={cx("has-scrollbar")}>
                            {products.map((product) => (
                                <li className={cx("product-item")} key={product.id}>
                                    <div className={cx("product-card")}  tabIndex={0}>
                                    <figure className={cx("card-banner")}>
                                        <img src={images(`./${product.url}`)} width="312" height="350" loading="lazy"
                                        alt={product.name} className={cx("image-contain")}/>
                                        <div className={cx("card-badge")}>New</div>
                                        <ul className={cx("card-action-list")}>
                                        <li className={cx("card-action-item")}>
                                            <button className={cx("card-action-btn")} aria-labelledby="card-label-1">
                                            <ion-icon name="cart-outline"></ion-icon>
                                            </button>
                                            <div className={cx("card-action-tooltip")} id="card-label-1">Add to Cart</div>
                                        </li>
                                        <li className={cx("card-action-item")}>
                                            <button className={cx("card-action-btn")} aria-labelledby="card-label-2">
                                            <ion-icon name="heart-outline"></ion-icon>
                                            </button>
                                            <div className={cx("card-action-tooltip")} id="card-label-2">Add to Whishlist</div>
                                        </li>
                                        <li className={cx("card-action-item")}>
                                            <button className={cx("card-action-btn")} aria-labelledby="card-label-3">
                                            <ion-icon name="eye-outline"></ion-icon>
                                            </button>
                                            <div className={cx("card-action-tooltip")} id="card-label-3">Quick View</div>
                                        </li>
                                        <li className={cx("card-action-item")}>
                                            <button className={cx("card-action-btn")} aria-labelledby="card-label-4">
                                            <ion-icon name="repeat-outline"></ion-icon>
                                            </button>
                                            <div className={cx("card-action-tooltip")} id="card-label-4">Compare</div>
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
                                        <a href="#">{product.name}</a>
                                        </h3>
                                        <data className={cx("card-price")} value={product.price}>${product.price}</data>
                                    </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                </div>
            </div>

    
    )
}
export default SpecialLayout;