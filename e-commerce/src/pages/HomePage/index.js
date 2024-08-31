import images from "../../assets";
import { FooterLayout } from "../../components/ReusedLayout";
import HeadLayout from "../../components/ReusedLayout/HeadLayout";
import AdsLayout from "../../components/ReusedLayout/AdsLayout";
import CollectionLayout from "../../components/ReusedLayout/CollectionLayout";
import styles from "./HomePage.mudule.scss";
import React, { useEffect, useState } from 'react';
import classNames from "classnames/bind";
import ProductLayout from "../../components/ReusedLayout/ProductLayout";
import CTALayout from "../../components/ReusedLayout/CTALayout";
import SpecialLayout from "../../components/ReusedLayout/SpecialLayout";
import ServiceLayout from "../../components/ReusedLayout/ServiceLayout";
import InstaPost from "../../components/ReusedLayout/InstaPost";
import BranchLayout from "./BranchLayout";
import { GoTopBtn } from "../../components/ReusedFunction";
const cx = classNames.bind(styles);
function HomePage() {
    const [selectedBranch, setSelectedBranch] = useState(null);
    useEffect(() => {
        const goTopBtn = document.querySelector("[data-go-top]");
        const handleScroll = () => {
            if (window.scrollY >= 80) {
              goTopBtn.classList.add(cx("active"));
    
            } else {
              goTopBtn.classList.remove(cx("active")); 
            }
          };
    
          window.addEventListener("scroll", handleScroll);
    })
    const handleBranchSelect = (branch) => {
        setSelectedBranch(branch);
    };
    
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
                    <BranchLayout onBranchSelect={handleBranchSelect} />
                    <ProductLayout selectedBranch={selectedBranch} />
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
            <GoTopBtn/>
            <div className={cx("container")}><FooterLayout/></div>
        </div>
        
    )
  }
  
  export default HomePage;