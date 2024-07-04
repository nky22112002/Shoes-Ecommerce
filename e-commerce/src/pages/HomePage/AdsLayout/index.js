import images from "../../../assets";
import styles from "./AdsLayout.module.scss"
import classNames from "classnames/bind"

const cx = classNames.bind(styles);

function AdsLayout(){
    return(
            <div>
                <h2 className={cx('h1', 'hero-title')}>
                New Summer
                <strong>Shoes Collection</strong>
                </h2>
                <p className={cx('hero-text')}>
                Competently expedite alternative benefits whereas leading-edge catalysts
                for change. Globally leverage existing an expanded array of leadership.
                </p>
                <button className={cx('btn', 'btn-primary')}>
                <span>Shop Now</span>
                <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                </button>
            </div>

    )
}
export default AdsLayout;