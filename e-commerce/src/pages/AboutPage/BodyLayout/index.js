import images from '../../../assets';
import styles from './BodyLayout.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles);
function BodyLayout(){
    return(
        <div className={cx("about-container")}>
            <section className={cx("about-hero")} style={{ backgroundImage: `url(${images.backgroundImage})` }}>
                <h1>About Us</h1>
                <p>Welcome to ShoeShine, your number one source for all things shoes.</p>
            </section>

            <section className={cx("about-mission")}>
                <h2>Our Mission</h2>
                <p>
                    At ShoeShine, our mission is to provide customers with high-quality, fashionable, and affordable footwear. We believe that everyone deserves to step out in style, without compromising on comfort.
                </p>
            </section>

            <section className={cx("about-story")}>
                <h2>Our Story</h2>
                <p>
                    Founded in 2024, ShoeShine started as a small shoe store with a big dream - to make stylish footwear accessible to everyone. Over the years, we have grown into a trusted online retailer, serving customers from all walks of life. Our dedication to quality and customer satisfaction has helped us build a loyal following.
                </p>
            </section>

            <section className={cx("about-values")}>
                <h2>Our Values</h2>
                <ul>
                    <li><strong>Quality:</strong> We handpick the best materials to ensure every pair of shoes is durable and comfortable.</li>
                    <li><strong>Affordability:</strong> We offer competitive prices to make sure that you can always find the perfect pair within your budget.</li>
                    <li><strong>Customer Satisfaction:</strong> Our customer service team is here to assist you every step of the way.</li>
                </ul>
            </section>

            <section className={cx("about-contact")}>
                <h2>Contact Us</h2>
                <p>
                    Have any questions? We're here to help! You can reach us at:
                    <br />Email: nky22112002@gmail.com
                    <br />Phone: 0522452021
                </p>
            </section>
        </div>
    )
}
export default BodyLayout;