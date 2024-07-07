import images from '../../../assets';
import styles from './CTALayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function CTALayout(){
    return(
        <div>
            <ul className={cx("cta-list")}>

                <li>
                <div className={cx("cta-card")} style={{backgroundImage: `url(${images.cta_1})`}}>
                    <p className={cx("card-subtitle")}>Adidas Shoes</p>

                    <h3 className={cx("h2", "card-title")}>The Summer Sale Off 50%</h3>

                    <a href="#" className={cx("btn", "btn-link")}>
                    <span>Shop Now</span>

                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                    </a>
                </div>
                </li>

                <li>
                <div className={cx("cta-card")} style={{backgroundImage: `url(${images.cta_2})`}}>
                    <p className={cx("card-subtitle")}>Nike Shoes</p>

                    <h3 className={cx("h2", "card-title")}>Makes Yourself Keep Sporty</h3>

                    <a href="#" className={cx("btn", "btn-link")}>
                    <span>Shop Now</span>

                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                    </a>
                </div>
                </li>

            </ul>
        </div>
    )
}
export default CTALayout;