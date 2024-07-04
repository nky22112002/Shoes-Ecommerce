import images from "../../assets";
import { FooterLayout } from "../../components/Layout";
import HeadLayout from "../../components/Layout/HeadLayout";
import AdsLayout from "./AdsLayout";
import CollectionLayout from "./CollectionLayout";
import styles from "./HomePage.mudule.scss";

import classNames from "classnames/bind";
import ProductLayout from "./ProductLayout";
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
            <FooterLayout/>
        </div>
        
    )
  }
  
  export default HomePage;