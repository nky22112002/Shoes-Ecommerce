import classNames from "classnames/bind";
import styles from "./Pagination.module.scss";

const cx = classNames.bind(styles);

function Pagination({ currentPage, handleClick, hasMore }) {
    const handlePageClick = (pageNumber) => {
        handleClick(pageNumber, 'currentPage', pageNumber);
    };

    return (
        <div className={cx('pagination')}>
            <button
                disabled={currentPage === 1}
                onClick={() => handlePageClick(1)}
                className={cx('pagination-btn', { disabled: currentPage === 1 })}
            >
                {'<<'}
            </button>
            <button
                disabled={currentPage === 1}
                onClick={() => handlePageClick(currentPage - 1)}
                className={cx('pagination-btn', { disabled: currentPage === 1 })}
            >
                {'<'}
            </button>
            <button
                key={currentPage}
                className={cx('pagination-btn')}
            >
                {currentPage}
            </button>
            <button
                disabled={!hasMore}
                onClick={() => handlePageClick(currentPage + 1)}
                className={cx('pagination-btn', { disabled: !hasMore })}
            >
                {'>'}
            </button>
        </div>
    );
}

export default Pagination;
