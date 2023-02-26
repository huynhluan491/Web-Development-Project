import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import CustomerNavTitle from './CustomerNavTitle/CustomerNavTitle';
import TextTitle from './HomeTextTitle/HomeTextTitle';
import HomeProductBestSale from './HomeProductBestSale/index';
import SliderBanner from './SliderBanner/index';
import ProductNavTitle from './ProductNavTitle/ProductNavTitle';
import NewProducts from './PromotedProducts/NewProducts/NewProducts';
import TabProductCate from '~/components/TabProductsCate/TabProductCate';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <SliderBanner />
            <CustomerNavTitle />
            <ProductNavTitle />
            <TextTitle />
            <HomeProductBestSale cate={'phone'} srcImgBanner={require('~/assets/images/anh-sale-tet.png')} />
            <HomeProductBestSale cate={'laptop'} srcImgBanner={require('~/assets/images/phu-kien-hot.png')} />
            <TabProductCate />
        </div>
    );
}

export default Home;
