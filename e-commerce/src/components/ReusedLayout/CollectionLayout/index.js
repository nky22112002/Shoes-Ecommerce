import images from "../../../assets";
import styles from "./CollectionLayout.module.scss"
import classNames from "classnames/bind"

const cx = classNames.bind(styles);
function CollectionLayout(){
    return(
        <div>
            <ul className={cx("collection-list", "has-scrollbar")}>
            <li>
                <div
                className={cx("collection-card")}
                style={{ backgroundImage: `url(${images.colection_1})` }}
                >
                <h3 className={cx("h4", "card-title")}>Men Collections</h3>
                <a href="#" className={cx("btn", "btn-secondary")}>
                    <span>Explore All</span>
                    <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                </a>
                </div>
            </li>
            <li>
                <div
                className={cx("collection-card")}
                style={{ backgroundImage: `url(${images.colection_2})` }}
                >
                <h3 className={cx("h4", "card-title")}>Women Collections</h3>
                <a href="#" className={cx("btn", "btn-secondary")}>
                    <span>Explore All</span>
                    <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                </a>
                </div>
            </li>
            <li>
                <div
                className={cx("collection-card")}
                style={{ backgroundImage: `url(${images.colection_3})` }}
                >
                <h3 className={cx("h4", "card-title")}>Sports Collections</h3>
                <a href="#" className={cx("btn", "btn-secondary")}>
                    <span>Explore All</span>
                    <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                </a>
                </div>
            </li>
            </ul>
        </div>
    )
        

}
export default CollectionLayout;