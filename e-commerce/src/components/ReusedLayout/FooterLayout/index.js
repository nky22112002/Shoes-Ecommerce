import images from "../../../assets";
import styles from "./FooterLayout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function FooterLayout(){
    return(
        <footer className={cx("footer")}>
            <div className={cx("footer-top section")}>
                <div className={cx("container")}>
                <div className={cx("footer-brand")}>
                    <a href="#" className={cx("logo")}>
                    <img
                        src={images.logo}
                        width={160}
                        height={50}
                        alt="Footcap logo"
                    />
                    </a>
                    <ul className={cx("social-list")}>
                    <li>
                        <a href="#" className={cx("social-link")}>
                        <ion-icon name="logo-facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className={cx("social-link")}>
                        <ion-icon name="logo-twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className={cx("social-link")}>
                        <ion-icon name="logo-pinterest" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className={cx("social-link")}>
                        <ion-icon name="logo-linkedin" />
                        </a>
                    </li>
                    </ul>
                </div>
                <div className={cx("footer-link-box")}>
                    <ul className={cx("footer-list")}>
                    <li>
                        <p className={cx("footer-list-title")}>Contact Us</p>
                    </li>
                    <li>
                        <address className={cx("footer-link")}>
                        <ion-icon name="location" />
                        <span className={cx("footer-link-text")}>
                            2751 S Parker Rd, Aurora, CO 80014, United States
                        </span>
                        </address>
                    </li>
                    <li>
                        <a href="tel:+557343673257" className={cx("footer-link")}>
                        <ion-icon name="call" />
                        <span className={cx("footer-link-text")}>+557343673257</span>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:footcap@help.com" className={cx("footer-link")}>
                        <ion-icon name="mail" />
                        <span className={cx("footer-link-text")}>footcap@help.com</span>
                        </a>
                    </li>
                    </ul>
                    <ul className={cx("footer-list")}>
                    <li>
                        <p className={cx("footer-list-title")}>My Account</p>
                    </li>
                    <li>
                        <a href="#" className={cx("footer-link")}>
                        <ion-icon name="chevron-forward-outline" />
                        <span className={cx("footer-link-text")}>My Account</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className={cx("footer-link")}>
                        <ion-icon name="chevron-forward-outline" />
                        <span className={cx("footer-link-text")}>View Cart</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className={cx("footer-link")}>
                        <ion-icon name="chevron-forward-outline" />
                        <span className={cx("footer-link-text")}>Wishlist</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className={cx("footer-link")}>
                        <ion-icon name="chevron-forward-outline" />
                        <span className={cx("footer-link-text")}>Compare</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className={cx("footer-link")}>
                        <ion-icon name="chevron-forward-outline" />
                        <span className={cx("footer-link-text")}>New Products</span>
                        </a>
                    </li>
                    </ul>
                    <div className={cx("footer-list")}>
                    <p className={cx("footer-list-title")}>Opening Time</p>
                    <table className={cx("footer-table")}>
                        <tbody>
                        <tr className={cx("table-row")}>
                            <th className={cx("table-head")} scope="row">
                            Mon - Tue:
                            </th>
                            <td className={cx("table-data")}>8AM - 10PM</td>
                        </tr>
                        <tr className={cx("table-row")}>
                            <th className={cx("table-head")} scope="row">
                            Wed:
                            </th>
                            <td className={cx("table-data")}>8AM - 7PM</td>
                        </tr>
                        <tr className={cx("table-row")}>
                            <th className={cx("table-head")} scope="row">
                            Fri:
                            </th>
                            <td className={cx("table-data")}>7AM - 12PM</td>
                        </tr>
                        <tr className={cx("table-row")}>
                            <th className={cx("table-head")} scope="row">
                            Sat:
                            </th>
                            <td className={cx("table-data")}>9AM - 8PM</td>
                        </tr>
                        <tr className={cx("table-row")}>
                            <th className={cx("table-head")} scope="row">
                            Sun:
                            </th>
                            <td className={cx("table-data")}>Closed</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className={cx("footer-list")}>
                    <p className={cx("footer-list-title")}>Newsletter</p>
                    <p className={cx("newsletter-text")}>
                        Authoritatively morph 24/7 potentialities with error-free
                        partnerships.
                    </p>
                    <form action="" className={cx("newsletter-form")}>
                        <input
                        type="email"
                        name="email"
                        required=""
                        placeholder="Email Address"
                        className={cx("newsletter-input")}
                        />
                        <button type="submit" className={cx("btn btn-primary")}>
                        Subscribe
                        </button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            <div className={cx("footer-bottom")}>
                <div className={cx("container")}>
                <p className={cx("copyright")}>
                    © 2022{" "}
                    <a href="#" className={cx("copyright-link")}>
                    codewithsadee
                    </a>
                    . All Rights Reserved
                </p>
                </div>
            </div>
        </footer>

    );
}
export default FooterLayout;
