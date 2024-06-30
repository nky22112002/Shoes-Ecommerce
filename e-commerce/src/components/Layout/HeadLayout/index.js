import styles from "./HeadLayout.module.scss"
import classNames from "classnames/bind"
import images from "../../../assets";

const cx = classNames.bind(styles);
function HeadLayout(){
    return(
            <header className={cx("header")} data-header="">
            <div className={cx("container")}>
                <div className={cx("overlay")} data-overlay="" />
                <a href="#" className={cx("logo")}>
                <img
                    src={images.logo}
                    width={160}
                    height={50}
                    alt="Footcap logo"
                />
                </a>
                <button
                className={cx("nav-open-btn")}
                data-nav-open-btn=""
                aria-label="Open Menu"
                >
                <ion-icon name="menu-outline" />
                </button>
                <nav className={cx("navbar")} data-navbar="">
                <button
                    className={cx("nav-close-btn")}
                    data-nav-close-btn=""
                    aria-label="Close Menu"
                >
                    <ion-icon name="close-outline" />
                </button>
                <a href="#" className={cx("logo")}>
                    <img
                    src={images.logo}
                    width={190}
                    height={50}
                    alt="Footcap logo"
                    />
                </a>
                <ul className={cx("navbar-list")}>
                    <li className={cx("navbar-item")}>
                    <a href="#" className={cx("navbar-link")}>
                        Home
                    </a>
                    </li>
                    <li className={cx("navbar-item")}>
                    <a href="#" className={cx("navbar-link")}>
                        About
                    </a>
                    </li>
                    <li className={cx("navbar-item")}>
                    <a href="#" className={cx("navbar-link")}>
                        Products
                    </a>
                    </li>
                    <li className={cx("navbar-item")}>
                    <a href="#" className={cx("navbar-link")}>
                        Shop
                    </a>
                    </li>
                    <li className={cx("navbar-item")}>
                    <a href="#" className={cx("navbar-link")}>
                        Blog
                    </a>
                    </li>
                    <li className={cx("navbar-item")}>
                    <a href="#" className={cx("navbar-link")}>
                        Contact
                    </a>
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
                    <a href="#" className={cx("nav-action-btn")}>
                        <ion-icon name="person-outline" aria-hidden="true" />
                        <span className={cx("nav-action-text")}>Login / Register</span>
                    </a>
                    </li>
                    <li>
                    <button className={cx("nav-action-btn")}>
                        <ion-icon name="heart-outline" aria-hidden="true" />
                        <span className={cx("nav-action-text")}>Wishlist</span>
                        <data className={cx("nav-action-badge")} value={5} aria-hidden="true">
                        5
                        </data>
                    </button>
                    </li>
                    <li>
                    <button className={cx("nav-action-btn")}>
                        <ion-icon name="bag-outline" aria-hidden="true" />
                        <data className={cx("nav-action-text")} value={318.0}>
                        Basket: <strong>$318.00</strong>
                        </data>
                        <data className={cx("nav-action-badge")} value={4} aria-hidden="true">
                        4
                        </data>
                    </button>
                    </li>
                </ul>
                </nav>
            </div>
            </header>

    )
}
export default HeadLayout;