import styles from './InstaPost.module.scss';
import classNames from 'classnames/bind';
import images from '../../../assets';

const cx = classNames.bind(styles);
function InstaPost(){
    return(
        <div>
            <ul className={cx("insta-post-list", "has-scrollbar")}>

                <li className={cx("insta-post-item")}>
                <img src={images.post_1} width="100" height="100" loading="lazy" alt="Instagram post"
                    className={cx("insta-post-banner", "image-contain")}/>

                <a href="#" className={cx("insta-post-link")}>
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
                </li>

                <li className={cx("insta-post-item")}>
                <img src={images.post_2} width="100" height="100" loading="lazy" alt="Instagram post"
                    className={cx("insta-post-banner", "image-contain")}/>

                <a href="#" className={cx("insta-post-link")}>
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
                </li>

                <li className={cx("insta-post-item")}>
                <img src={images.post_3} width="100" height="100" loading="lazy" alt="Instagram post"
                    className={cx("insta-post-banner", "image-contain")}/>

                <a href="#" className={cx("insta-post-link")}>
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
                </li>

                <li className={cx("insta-post-item")}>
                <img src={images.post_4} width="100" height="100" loading="lazy" alt="Instagram post"
                    className={cx("insta-post-banner", "image-contain")}/>

                <a href="#" className={cx("insta-post-link")}>
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
                </li>

                <li className={cx("insta-post-item")}>
                <img src={images.post_5} width="100" height="100" loading="lazy" alt="Instagram post"
                    className={cx("insta-post-banner", "image-contain")}/>

                <a href="#" className={cx("insta-post-link")}>
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
                </li>

                <li className={cx("insta-post-item")}>
                <img src={images.post_6} width="100" height="100" loading="lazy" alt="Instagram post"
                    className={cx("insta-post-banner", "image-contain")}/>

                <a href="#" className={cx("insta-post-link")}>
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
                </li>

                <li className={cx("insta-post-item")}>
                <img src={images.post_7} width="100" height="100" loading="lazy" alt="Instagram post"
                    className={cx("insta-post-banner", "image-contain")}/>

                <a href="#" className={cx("insta-post-link")}>
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
                </li>

                <li className={cx("insta-post-item")}>
                <img src={images.post_8} width="100" height="100" loading="lazy" alt="Instagram post"
                    className={cx("insta-post-banner", "image-contain")}/>

                <a href="#" className={cx("insta-post-link")}>
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
                </li>

                </ul>
        </div>
    )
}
export default InstaPost;