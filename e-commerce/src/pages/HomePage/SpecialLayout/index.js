import images from '../../../assets';
import styles from './SpecialLayout.mudule.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function SpecialLayout(){
    return (
            <div className={cx("special-container")}>
                <div className={cx("special-banner")} style={{backgroundImage: `url(${images.special_banner})`}}>
                        <h2 className={cx("h3", "banner-title")}>New Trend Edition</h2>
                        <a href="#" className={cx("btn", "btn-link")}>
                        <span>Explore All</span>
                        <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                        </a>
                    </div>
                    <div className={cx("special-product")}>
                        <h2 className={cx("h2", "section-title")}>
                        <span className={cx("text")}>Nike Special</span>
                        <span className={cx("line")}></span>
                        </h2>
                        <ul className={cx("has-scrollbar")}>
                        <li className={cx("product-item")}>
                            <div className={cx("product-card")} tabindex="0">
                            <figure className={cx("card-banner")}>
                                <img src={images.product_1} width="312" height="350" loading="lazy"
                                alt="Running Sneaker Shoes" className={cx("image-contain")}/>
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
                                <a href="#" className={cx("card-cat-link")}>Men</a> /
                                <a href="#" className={cx("card-cat-link")}>Women</a>
                                </div>
                                <h3 className={cx("h3", "card-title")}>
                                <a href="#">Running Sneaker Shoes</a>
                                </h3>
                                <data className={cx("card-price")} value="180.85">$180.85</data>
                            </div>
                            </div>
                        </li>
                        <li className={cx("product-item")}>
                            <div className={cx("product-card")} tabindex="0">
                            <figure className={cx("card-banner")}>
                                <img src={images.product_2} width="312" height="350" loading="lazy"
                                alt="Leather Mens Slipper" className={cx("image-contain")}/>
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
                                <a href="#" className={cx("card-cat-link")}>Men</a> /
                                <a href="#" className={cx("card-cat-link")}>Sports</a>
                                </div>
                                <h3 className={cx("h3", "card-title")}>
                                <a href="#">Leather Mens Slipper</a>
                                </h3>
                                <data className={cx("card-price")} value="190.85">$190.85</data>
                            </div>
                            </div>
                        </li>
                        <li className={cx("product-item")}>
                            <div className={cx("product-card")} tabindex="0">
                            <figure className={cx("card-banner")}>
                                <img src={images.product_3} width="312" height="350" loading="lazy"
                                alt="Simple Fabric Shoe" className={cx("image-contain")}/>
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
                                <a href="#" className={cx("card-cat-link")}>Men</a> /
                                <a href="#" className={cx("card-cat-link")}>Women</a>
                                </div>
                                <h3 className={cx("h3", "card-title")}>
                                <a href="#">Simple Fabric Shoe</a>
                                </h3>
                                <data className={cx("card-price")} value="160.85">$160.85</data>
                            </div>
                            </div>
                        </li>
                        <li className={cx("product-item")}>
                            <div className={cx("product-card")} tabindex="0">
                            <figure className={cx("card-banner")}>
                                <img src={images.product_4} width="312" height="350" loading="lazy"
                                alt="Air Jordan 7 Retro " className={cx("image-contain")}/>
                                <div className={cx("card-badge")}> -25%</div>
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
                                <a href="#" className={cx("card-cat-link")}>Men</a> /
                                <a href="#" className={cx("card-cat-link")}>Sports</a>
                                </div>
                                <h3 className={cx("h3 card-title")}>
                                <a href="#">Air Jordan 7 Retro </a>
                                </h3>
                                <data className={cx("card-price")} value="170.85">$170.85 <del>$200.21</del></data>
                            </div>
                            </div>
                        </li>
                        </ul>
                </div>
            </div>

    
    )
}
export default SpecialLayout;