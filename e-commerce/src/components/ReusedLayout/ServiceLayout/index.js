import images from '../../../assets';
import styles from './ServiceLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function ServiceLayout(){
    return(
        <div>
            <ul className={cx("service-list")}>

                <li className={cx("service-item")}>
                <div className={cx("service-card")}>

                    <div className={cx("card-icon")}>
                    <img src={images.service_1} width="53" height="28" loading="lazy" alt="Service icon"/>
                    </div>

                    <div>
                    <h3 className={cx("h4", "card-title")}>Free Shiping</h3>

                    <p className={cx("card-text")}>
                        All orders over <span>$150</span>
                    </p>
                    </div>

                </div>
                </li>

                <li className={cx("service-item")}>
                <div className={cx("service-card")}>

                    <div className={cx("card-icon")}>
                    <img src={images.service_2} width="43" height="35" loading="lazy" alt="Service icon"/>
                    </div>

                    <div>
                    <h3 className={cx("h4", "card-title")}>Quick Payment</h3>

                    <p className={cx("card-text")}>
                        100% secure payment
                    </p>
                    </div>

                </div>
                </li>

                <li className={cx("service-item")}>
                <div className={cx("service-card")}>

                    <div className={cx("card-icon")}>
                    <img src={images.service_3} width="40" height="40" loading="lazy" alt="Service icon"/>
                    </div>

                    <div>
                    <h3 className={cx("h4", "card-title")}>Free Returns</h3>

                    <p className={cx("card-text")}>
                        Money back in 30 days
                    </p>
                    </div>

                </div>
                </li>

                <li className={cx("service-item")}>
                <div className={cx("service-card")}>

                    <div className={cx("card-icon")}>
                    <img src={images.service_4} width="40" height="40" loading="lazy" alt="Service icon"/>
                    </div>

                    <div>
                    <h3 className={cx("h4", "card-title")}>24/7 Support</h3>

                    <p className={cx("card-text")}>
                        Get Quick Support
                    </p>
                    </div>

                </div>
                </li>

                </ul>
        </div>
    )
}
export default ServiceLayout;