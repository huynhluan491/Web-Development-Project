import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { CartIcon } from '~/Icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import config from '~/config';
import Search from './Search/Search';
import Login from '~/components/Login';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);

const menuTitles = [
    { title: 'Home', to: config.routes.home },
    { title: 'All Products', to: config.routes.allProducts },
    { title: 'Phone', to: config.routes.phone },
    { title: 'Laptop', to: config.routes.laptop },
    { title: 'Tablet', to: config.routes.tablet },
    { title: 'Watch', to: config.routes.watch },
    { title: 'Network Device', to: config.routes.networkDevice },
    { title: 'Keyboard', to: config.routes.keyboard },
];
const Header = () => {
    const [showLogin, setShowLogin] = useState(false);
    const { isLoggedIn } = useSelector((state) => state.UserReducer);
    const [loginState, setLoginState] = useState(isLoggedIn);
    const ToggleLogin = () => {
        setShowLogin(showLogin ? false : true);
    };
    useEffect(() => {
        if (isLoggedIn && !loginState) {
            setLoginState(true);
            toast.success('Đăng nhập thành công!', {
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
    }, [isLoggedIn]);
    const dispatch = useDispatch();
    const HandleLogOut = () => {
        dispatch({ type: 'LOGOUT' });
        setLoginState(false);
        toast.success('Đã đăng xuất!', {
            position: 'top-center',
            autoClose: 2001,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    }; //get location of cartIcon
    useEffect(() => {
        const cartIcon = document.querySelector(`.${cx('cart-btn')}`);
        const locate = cartIcon.getBoundingClientRect();
        const location = {
            type: 'GET_LOCATION',
            payload: {
                bottom: locate.bottom,
                top: locate.top,
                right: locate.right,
                left: locate.left,
            },
        };
        dispatch(location);
    }, []);
    //get the product qty in cart
    const cartReducer = useSelector((state) => state.CartReducer);
    const productQty = cartReducer.cartItem.length;
    return (
        <div className={cx('header-wrapper')}>
            <ToastContainer style={{ zIndex: 999999999 }} />
            <div className={cx('header-navigation')}>
                <div className={cx('menu-container')}>
                    <ul className={cx('item-list')}>
                        {menuTitles.map((item, index) => (
                            <Link key={index} to={item.to}>
                                <li>{item.title}</li>
                            </Link>
                        ))}
                    </ul>
                    {!isLoggedIn ? (
                        <div className={cx('right-top-header')}>
                            <div className={cx('login-btn')} onClick={ToggleLogin}>
                                <FontAwesomeIcon icon={faUser} className={cx('user-icon')} />
                                <p className={cx('text')}>Đăng nhập</p>
                            </div>
                        </div>
                    ) : (
                        <div className={cx('right-top-header')}>
                            <div className={cx('login-btn')} onClick={HandleLogOut}>
                                <FontAwesomeIcon icon={faUser} className={cx('user-icon')} />
                                <p className={cx('text')}>Đăng xuất</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className={cx('middle-header')}>
                <Link to={config.routes.home} className={cx('left-side-logo')}>
                    <div className={cx('logo')}>
                        <img src={require('~/assets/images/logo-page.png')} />
                    </div>
                </Link>
                <Search />
                <div className={cx('cart-feature')}>
                    <Link to={config.routes.checkout}>
                        <div className={cx('cart-btn')}>
                            <CartIcon className={cx('icon')} />
                        </div>
                    </Link>
                    <div className={cx('cart-detail')}>
                        <Link to={config.routes.checkout} className={cx('title')}>
                            <h1>Giỏ hàng</h1>
                        </Link>
                        <p className={cx('cart-quantity')}>({productQty}) sản phẩm</p>
                    </div>
                </div>
            </div>
            {showLogin && <Login ToggleLogin={ToggleLogin} />}
        </div>
    );
};

export default Header;
