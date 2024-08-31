import classNames from "classnames/bind";
import styles from './GoTopBtn.module.scss'
import { useEffect } from "react";
const cx = classNames.bind(styles)
function GoTopBtn(){
    useEffect(() => {
        const goTopBtn = document.querySelector("[data-go-top]");
        const handleScroll = () => {
            if (window.scrollY >= 80) {
              goTopBtn.classList.add(cx("active")); 
    
            } else {
              goTopBtn.classList.remove(cx("active")); 
            }
          };
    
          window.addEventListener("scroll", handleScroll);
    })
    return(
      
        <div>
          <a href="#top" className={cx("go-top-btn")} data-go-top>
              <ion-icon name="arrow-up-outline"></ion-icon>
          </a>
        </div>
    )
}
export default GoTopBtn;