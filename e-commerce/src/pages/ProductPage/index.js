import { FooterLayout, HeadLayout} from '../../components/ReusedLayout';
import BodyLayout from './BodyLayout';
import { useLocation } from 'react-router-dom';
import styles from './ProductPage.module.scss';
import classNames from 'classnames/bind';
import { GoTopBtn } from '../../components/ReusedFunction';
const cx = classNames.bind(styles);

function ProductPage() {
    const location = useLocation();
    const username = location.state?.data;
    return(
        <div>
            <div className={cx('container')}><HeadLayout user={username}/></div>
            <div className={cx('body-container')}>
                <BodyLayout/>
            </div>
            <GoTopBtn/>
            <FooterLayout/>
        </div>
    )
}
export default ProductPage;