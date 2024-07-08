import images from "../../assets";
import { FooterLayout } from "../../components/Layout";
import HeadLayout from "../../components/Layout/HeadLayout";
import AdsLayout from "./AdsLayout";
import CollectionLayout from "./CollectionLayout";
import styles from "./HomePage.mudule.scss";

import classNames from "classnames/bind";
import ProductLayout from "./ProductLayout";
import CTALayout from "./CTALayout";
import SpecialLayout from "./SpecialLayout";
import ServiceLayout from "./ServiceLayout";
import InstaPost from "./InstaPost";
const cx = classNames.bind(styles);
function HomePage() {
    return (
        <div>
            <div className={cx('container')}><HeadLayout/></div>
            <section
            className={cx('section', 'hero')}
            style={{ backgroundImage: `url(${images.backgroundImage})` }}
            >
                <div className={cx('container')}><AdsLayout/></div>
            </section>
            <section className={cx("section", "collection")}>
                <div className={cx("container")}>
                    <CollectionLayout/>
                </div>
            </section>
            <section className={cx('section', 'product')}>
                <div className={cx('container')}>
                    <ProductLayout/>
                </div>
            </section>
            <section className={cx("section", "cta")}><div className={cx("container")}><CTALayout/></div></section>
            <section className={cx("section", "special")}>
                    <div className={cx("container")}><SpecialLayout/></div>
            </section>
            <section className={cx("section", "service")}>
                    <ServiceLayout/>
                
            </section>
            <div className={cx("section", "insta-post")}>
                <InstaPost/>
            </div>
            <div className={cx("container")}><FooterLayout/></div>
            <a href="#top" className={cx("go-top-btn")} data-go-top>
                <ion-icon name="arrow-up-outline"></ion-icon>
            </a>
        </div>
        
    )
  }
  
  export default HomePage;