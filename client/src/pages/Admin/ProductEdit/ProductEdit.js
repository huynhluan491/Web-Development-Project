import classNames from 'classnames/bind';
import styles from './ProductEdit.module.scss';
import { useRef } from 'react';
import { deleteProductById, addProduct, updateProductById } from '~/functions/ProductFetch';

const cx = classNames.bind(styles);

const ProductEdit = ({ jwt, data, setProductChange, setShowEditForm, formType = '' }) => {
    return (
        <div className={cx('form-wrapper')}>
            <div onClick={() => setShowEditForm(false)} className={cx('form-background')} />
            <form onSubmit={(e) => HandleSubmit(e)} ref={formRef} className={cx('form')}>
                <label className={cx('label')} htmlFor="productID">
                    Product ID:
                </label>
                <input
                    className={cx('input', 'id-input')}
                    defaultValue={data.productID}
                    type="number"
                    id="productID"
                    name="productID"
                    placeholder="vd:101"
                    required
                    readOnly
                />
                <div>
                    <label className={cx('label', 'check-box-label')} htmlFor="favorite">
                        Favorite:
                    </label>
                    <input
                        className={cx('check-box-input')}
                        defaultChecked={data.favorite === 1}
                        type="checkbox"
                        id="favorite"
                        name="favorite"
                    ></input>
                </div>
                <label className={cx('label')} htmlFor="stock">
                    Stock:
                </label>
                <input
                    className={cx('input')}
                    defaultValue={data.stock}
                    type="number"
                    id="stock"
                    name="stock"
                    required
                    placeholder="vd:100"
                />
                <label className={cx('label')} htmlFor="name">
                    Name:
                </label>
                <input
                    className={cx('input')}
                    defaultValue={data.name}
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="vd:latop XYZ100"
                />
                <label className={cx('label')} htmlFor="sale">
                    Sale:
                </label>
                <input
                    className={cx('input')}
                    defaultValue={data.sale}
                    type="text"
                    id="sale"
                    name="sale"
                    placeholder="vd:10%"
                />
                <label className={cx('label')} htmlFor="image">
                    Image Link:
                </label>
                <input
                    className={cx('input')}
                    defaultValue={data.image}
                    type="text"
                    id="image"
                    name="image"
                    required
                    placeholder="vd:abc.com"
                />
                <label className={cx('label')} htmlFor="brand">
                    Brand:
                </label>
                <input
                    className={cx('input')}
                    defaultValue={data.brand}
                    type="text"
                    id="brand"
                    name="brand"
                    required
                    placeholder="vd:apple"
                />
                <label className={cx('label')} htmlFor="price">
                    Price:
                </label>
                <input
                    className={cx('input')}
                    defaultValue={data.price}
                    type="number"
                    id="price"
                    name="price"
                    required
                    placeholder="vd:1000"
                />
                <label className={cx('label')} htmlFor="category">
                    Category:
                </label>
                <input
                    className={cx('input')}
                    defaultValue={data.category}
                    type="text"
                    id="category"
                    name="category"
                    required
                    placeholder="vd:laptop"
                />
                <label className={cx('label')} htmlFor="description">
                    Description:
                </label>
                <input
                    className={cx('input')}
                    defaultValue={data.description}
                    type="text"
                    id="description"
                    name="description"
                    required
                    placeholder="vd:laptop nay cuc manh "
                />
                {formType === 'UpdateRemove' ? (
                    <div className={cx('button-wrapper')}>
                        <button id="updateBTN" className={cx('update-button', 'button')}>
                            SỬA
                        </button>
                        <button id="removeBTN" className={cx('delete-button', 'button')}>
                            XÓA
                        </button>
                    </div>
                ) : (
                    <div className={cx('button-wrapper')}>
                        <button id="addBTN" className={cx('add-button', 'button')}>
                            THÊM
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default ProductEdit;