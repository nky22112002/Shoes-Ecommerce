import HeadLayout from '../../components/ReusedLayout/HeadLayout';
import styles from './AboutPage.module.scss'
import classNames from 'classnames/bind'
import { FooterLayout } from "../../components/ReusedLayout";
import BodyLayout from './BodyLayout';
import { GoTopBtn } from '../../components/ReusedFunction';

const cx = classNames.bind(styles);
function AboutPage(){
    return(
        <div>
            <HeadLayout/>
            <BodyLayout/>
            <GoTopBtn/>
            <FooterLayout/>
        </div>
    )
}
export default AboutPage;