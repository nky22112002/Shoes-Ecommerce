import styles from './InstaPost.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

const images = require.context('../../../assets/images', false, /\.(jpg|jpeg|png)$/);


const cx = classNames.bind(styles);
function InstaPost(){
    const [insta, setInsta] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8081/insta-post')
            .then(res => res.json())
            .then(insta => setInsta(insta))
            .catch(error => console.log(error));
    }, []);
    return(
        <div>
            <ul className={cx("insta-post-list", "has-scrollbar")}>
                {insta.map((data) => (
                    <li className={cx("insta-post-item")} key={data.id}>
                        <img src={images(`./${data.url}`)} width="100" height="100" loading="lazy" alt="Instagram post"
                            className={cx("insta-post-banner", "image-contain")}/>
                        <a href="#" className={cx("insta-post-link")}>
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </li>
                ))}

            </ul>
        </div>
    )
}
export default InstaPost;