import classNames from 'classnames/bind';
import styles from './ProductBestSale.module.scss';
import ProductItem from '../ProductItem/index';
import dataBestSale from '~/data/data.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const ProductBestSale = () => {
    const title = 'Điện Thoại';
    return (
        <div className={cx('wrapper')}>
            {/* link den cac san pham la dien thoai */}
            <Link to={'/product/phone'}>
                <div className={cx('wrapper-title')}>
                    <span>{title}</span>
                </div>
            </Link>
            <div className={cx('wrapper-img')}>
                <img src={require('~/assets/images/i-n-tho-i-tet.png')} className={cx('wrapper-pic')} alt="anh tet" />
            </div>
            <div className={cx('wrapper-item')}>
                <div className={cx('wrapper-product')}>
                    <Swiper // khung
                        grabCursor={true}
                        modules={[FreeMode, Autoplay]}
                        className={cx('swiper')}
                        snap="true"
                        // autoplay={{ delay: 2500, disableOnInteraction: false }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 15,
                            },
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 15,
                            },
                        }}
                    >
                        {dataBestSale.map((item, index) => (
                            <SwiperSlide //khung nho hon chua item
                                key={index}
                                className={cx('swiper-item')}
                            >
                                <ProductItem key={index} data={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};
export default ProductBestSale;
