import classNames from "classnames/bind";
import styles from './BranchLayout.module.scss'
import { useState, useEffect, useRef} from "react";

const cx = classNames.bind(styles)
function BranchLayout({onBranchSelect }){
    const [branches, setBranches] = useState([]);
    const [selectedBranch, setSelectedBranch] = useState(null);
    const btnRefs = useRef([]);

    useEffect(() => {
        fetch('http://localhost:8081/')
            .then(res => res.json())
            .then(branches => setBranches(branches))
            .catch(error => console.log(error));
    }, []);
    const handleOnClickBtn = (value, index) => {
        setSelectedBranch(value === "Null" ? null : value);
        btnRefs.current.forEach(btn => {
            if (btn) {
                btn.classList.remove(cx('active'));
            }
        });

        if (btnRefs.current[index]) {
            btnRefs.current[index].classList.add(cx('active'));
        }

        if (onBranchSelect) {
            onBranchSelect(value === "Null" ? null : value);
        }
    };
    
    return(
        
        <div>
            <h2 className={cx("h2", "section-title")}>Bestsellers Products</h2>
            <ul className={cx("filter-list")}>
                <li>
                <button
                ref={el => btnRefs.current[0] = el}
                className={cx("filter-btn", "active")}
                value="Null"
                onClick={() => handleOnClickBtn('Null', 0)}
                >All
                </button>
                </li>
                {branches.map((branch, index) => (
                    <li key={index}>
                        <button className={cx("filter-btn")}
                        ref={el => btnRefs.current[index + 1] = el}
                         value={branch.name}
                         onClick={() => handleOnClickBtn(branch.branch_name, index + 1)}
                         >{branch.branch_name}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default BranchLayout;