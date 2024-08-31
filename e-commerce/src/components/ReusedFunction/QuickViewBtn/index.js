import React, { useRef, useEffect, useState } from 'react';
import styles from './QuickViewBtn.module.scss';
import classNames from 'classnames/bind';
import { useGlobalContext } from '../../../components/GlobalContext';

const images = require.context('../../../assets/images', false, /\.(jpg|jpeg|png)$/);

const cx = classNames.bind(styles);

function AddToCartBtn({ isOpen, onClose, product, url}) {
    if (!isOpen) return null;


    return (
        <>
            <div className={cx('modal-overlay')} onClick={onClose}>
                <div className={cx('modal-content')} onClick={(e) => e.stopPropagation()}>
                    <button className={cx('modal-close')} onClick={onClose}>
                        &times;
                    </button>
                    <img
                        src={images(`./${product.product_url}`)}
                        loading="lazy"
                        alt={product.product_name}
                        className={cx("modal-imgs")}
                    />
                    <div className={cx("modal-data")}>
                        <span>{product.product_name}</span>
                        <data className={cx("card-price")} value={product.product_price}>
                            ${product.product_price}
                        </data>                    
                        </div>
                    </div>
            </div>
        </>
    );
}

export default AddToCartBtn;
