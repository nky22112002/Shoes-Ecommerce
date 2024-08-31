import styles from './CTALayout.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
const images = require.context('../../../assets/images', false, /\.(jpg|jpeg|png)$/);

const cx = classNames.bind(styles);
function CTALayout(){
    const [cta, setCTA] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8081/CTA')
            .then(res => res.json())
            .then(cta => setCTA(cta))
            .catch(error => console.log(error));
    }, []);
    return(
        <div>
            <ul className={cx("cta-list")}>
                {cta.map((data) => (
                    <li key={data.id}>
                        <div className={cx("cta-card")} style={{backgroundImage: `url(${images(`./${data.url}`)})`}}>
                            <p className={cx("card-subtitle")}>{data.title}</p>

                            <h3 className={cx("h2", "card-title")}>{data.content}</h3>

                            <a href="#" className={cx("btn", "btn-link")}>
                            <span>Shop Now</span>

                            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default CTALayout;