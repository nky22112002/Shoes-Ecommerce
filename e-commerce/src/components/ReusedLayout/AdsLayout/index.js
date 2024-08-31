import { useEffect, useState } from "react";
import styles from "./AdsLayout.module.scss"
import classNames from "classnames/bind"

const cx = classNames.bind(styles);

function AdsLayout(){
    const [ads, setAds] = useState({ title: '', content: '' });
    useEffect(() => {
        fetch('http://localhost:8081/Ads')
            .then(res => res.json())
            .then(ads => setAds(ads))
            .catch(error => console.log(error));
    }, []);

    return(
            <div>
                    <>
                    <h2 className={cx('h1', 'hero-title')}>
                    {ads.title}
                    <strong>Shoes Collection</strong>
                    </h2>
                    <p className={cx('hero-text')}>
                    {ads.content}
                    </p>
                    <button className={cx('btn', 'btn-primary')}>
                    <span>Shop Now</span>
                    <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                    </button>
                    </>                
            </div>

    )
}
export default AdsLayout;