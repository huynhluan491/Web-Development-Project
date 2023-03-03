import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ProductDetailDesc.module.scss';
import ProductRating from '../ProductRating/ProductRating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);

const formatCurrency = (str) => {
    const regex = /\d{1,3}(?=(\d{3})+(?!\d))/g;
    return `${str.toString().replace(regex, '$&,')}₫`;
};

function ProductDetailDesc(props) {
    const [count, setCount] = useState(0);

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleCartAdd = () => {
        if (count > 0) {
            toast.success('Thêm sản phẩm thành công!', {
                position: 'top-center',
                autoClose: 2001,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
            setCount(0);
            //update cart
        } else {
            toast.error('Vui lòng chọn số lượng sản phẩm!', {
                position: 'top-center',
                autoClose: 2001,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
        }
    };

    const handleBuyNow = () => {
        //mua ngay
        if (count <= 0) {
            toast.error('Vui lòng chọn số lượng sản phẩm!', {
                position: 'top-center',
                autoClose: 2001,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
        }
    };

    return (
        <div className={cx('product-detail-container')}>
            <ToastContainer style={{ zIndex: 1000000 }} />
            <p className={cx('product-detail-title')}> {props.product.name}</p>
            <div className={cx('product-detail-subtitle')}>
                <p className={cx('product-detail-id')}>{`Mã sản phẩm: ${props.product.id}`}</p>
                <p className={cx('product-detail-brand')}>{`Thương hiệu: ${props.product.brand}`}</p>
            </div>
            <p className={cx('product-detail-price')}>{formatCurrency(props.product.price)}</p>
            <ProductRating ratings={props.product.ratings} />
            <div className={cx('product-feature-wrapper')}>
                {props.product.features?.map((feature, id) => (
                    <p className={cx('product-feature')} key={id}>
                        - {feature}
                    </p>
                ))}
            </div>
            <div className={cx('counter')}>
                <button className={cx('decrement')} onClick={handleDecrement}>
                    -
                </button>
                <div className={cx('count-wrapper')}>
                    <span className={cx('count')}>{count}</span>
                </div>
                <button className={cx('increment')} onClick={handleIncrement}>
                    +
                </button>
            </div>
            <button className={cx('cart-add')} onClick={handleBuyNow}>
                <FontAwesomeIcon className={cx('text-icon')} icon={faDollarSign} />
                <span className={cx('text')}>Mua ngay</span>
            </button>
            <button className={cx('buy-now')} onClick={handleCartAdd}>
                <FontAwesomeIcon className={cx('text-icon')} icon={faShoppingCart} />
                <span className={cx('text')}>Thêm vào giỏ hàng</span>
            </button>
        </div>
    );
}

export default ProductDetailDesc;
