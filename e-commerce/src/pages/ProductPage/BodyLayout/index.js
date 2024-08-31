import styles from './BodyLayout.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect, useRef } from 'react';
import Pagination from '../../../components/ReusedLayout/Pagination';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../../components/GlobalContext';
import AddToCartBtn from '../../../components/ReusedFunction/AddToCartBtn';
import AddToWishList from '../../../components/ReusedFunction/AddToWishList';
import QuickViewBtn from '../../../components/ReusedFunction/QuickViewBtn';
const images = require.context('../../../assets/images', false, /\.(jpg|jpeg|png)$/);

const cx = classNames.bind(styles);
// const images = require.context('../../../assets/images', false, /\.(jpg|jpeg|png)$/);
function BodyLayout() {
    const [branches, setBranches] = useState([]);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]); // State to manage cart items
    const [hasMore, setHasMore] = useState(true); // New state to track if there are more products
    const location = useLocation();
    const navigate = useNavigate();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page'), 10);
    const currentPage = isNaN(page) ? 1 : page;
    const [isQuickViewOpen, setQuickViewOpen] = useState(false); // State to control modal visibility
    const [selectedFilters, setSelectedFilters] = useState({
        branch: null,
        category: null,
        price: null,
        currentPage: 1,
      });
    const onPageChange = (pageNumber) => {
        navigate(`/product?page=${pageNumber}`);
    };
    useEffect(() => {
        fetch('http://localhost:8081/branch')
            .then(res => res.json())
            .then(branches => setBranches(branches))
            .catch(error => console.log(error));
    }, []);
    useEffect(() => {
        fetch('http://localhost:8081/category')
            .then(res => res.json())
            .then(categories => setCategories(categories))
            .catch(error => console.log(error));
    }, []);
    
    useEffect(() => {
        const fetchProducts = async () => {
            
            try {
                const response = await fetch('http://localhost:8081/getProductsPaged', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ 
                        selectedFilters, 
                    }), // Gửi branchName qua body
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                if (Array.isArray(result)) {
                    setProducts(result);
                    setHasMore(result.length === 20); // Xác định nếu có nhiều sản phẩm hơn
                } else {
                    // Nếu không có dữ liệu hoặc dữ liệu không hợp lệ, xử lý lỗi
                    console.error('Unexpected response format:', result);
                    setProducts([]);
                    setHasMore(false);
                }


            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [selectedFilters]);
    const handleFilterClick = (type, value) => {
        
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            [type]: prevFilters[type] === value ? null : value,
        }));
    };
    const handleClick = (pageNumber, filterType, filterValue) => {
        onPageChange(pageNumber); // Update the page number in URL
        handleFilterClick(filterType, filterValue); // Apply the filter
      };
    //   useEffect(() => {
    //     flyingImageRefs.current.forEach((imgRef, index) => {
    //       if (imgRef && cartLocation) {
    //         const { top: cartTop, left: cartLeft } = cartLocation;
    //         const { top: imgTop, left: imgLeft } = imgRef.getBoundingClientRect();
    
    //         const deltaX = cartLeft - imgLeft;
    //         const deltaY = cartTop - imgTop;
    
    //         imgRef.style.setProperty('--delta-x', `${deltaX}px`);
    //         imgRef.style.setProperty('--delta-y', `${deltaY}px`);
    
    //         imgRef.classList.add(cx('fly-to-cart'));
    //       }
    //     });
    //   }, [products, cartLocation]);
    // Function to handle quick view button click
    const handleQuickViewClick = () => {
        setQuickViewOpen(true);
    };

    // Function to close the quick view modal
    const handleCloseModal = () => {
        setQuickViewOpen(false);
    };
    return(
        <div className={cx("body-container")}>
            <div className={cx("main-content")}>
                <aside className={cx('sidebar')}>
                <ul className={cx('sidebar-list')}>
                    <li className={cx('sidebarItem')}>
                        <input type="checkbox" id="branch" className={cx('dropdownToggle')} />
                        <label htmlFor="branch" className={cx('dropdownLabel')}>Branch</label>
                        <ul className={cx('dropdownList')}>
                            {branches.map((branch) => (
                                <li
                                    key={branch.id}
                                    onClick={() => handleFilterClick('branch', branch.name)}
                                    className={cx({ selected: selectedFilters.branch === branch.name })}
                                >
                                    {branch.name}
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className={cx('sidebarItem')}>
                        <input type="checkbox" id="category" className={cx('dropdownToggle')} />
                        <label htmlFor="category" className={cx('dropdownLabel')}>Category</label>
                        <ul className={cx('dropdownList')}>
                            {categories.map((category) => (
                                <li
                                    key={category.id}
                                    onClick={() => handleFilterClick('category', category.name)}
                                    className={cx({ selected: selectedFilters.category === category.name })}
                                >
                                    {category.name}
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className={cx('sidebarItem')}>
                        <input type="checkbox" id="price" className={cx('dropdownToggle')} />
                        <label htmlFor="price" className={cx('dropdownLabel')}>Price</label>
                        <ul className={cx('dropdownList')}>
                            <li
                                key="1"
                                onClick={() => handleFilterClick('price', '1')}
                                className={cx({ selected: selectedFilters.price === '1' })}
                            >
                                Under $100
                            </li>
                            <li
                                key="2"
                                onClick={() => handleFilterClick('price', '2')}
                                className={cx({ selected: selectedFilters.price === '2' })}
                            >
                                $100 - $150
                            </li>
                            <li
                                key="3"
                                onClick={() => handleFilterClick('price', '3')}
                                className={cx({ selected: selectedFilters.price === '3' })}
                            >
                                Over $150
                            </li>
                        </ul>
                    </li>
                </ul>
                </aside>
                <div className={cx("products-wrapper")}>
                <ul className={cx("product-list")}>
                    {products.map((product,index) => (
                        
                        <li className={cx("product-item")} key={product.id}>
                        
                        <div className={cx("product-card")} tabIndex={0}>
                            <figure className={cx("card-banner")}>
                            
                            <img
                                src={images(`./${product.product_url}`)}
                                width={350}
                                height={350}
                                loading="lazy"
                                alt={product.product_name}
                                className={cx("image-contain")}
                            />
                            <div className={cx("card-badge")}>New</div>
                            <ul className={cx("card-action-list")}>
                                <li className={cx("card-action-item")}>
                                <AddToCartBtn
                                    productId={product.id}
                                    productUrl={images(`./${product.product_url}`)} // Truyền URL hình ảnh sản phẩm
                                />
                                <div className={cx("card-action-tooltip")} id="card-label-1">
                                    Add to Cart
                                </div>
                                </li>
                                <li className={cx("card-action-item")}>
                                <AddToWishList
                                productId={product.id}
                                />
                                <div className={cx("card-action-tooltip")} id="card-label-2">
                                    Add to Whishlist
                                </div>
                                </li>
                                <li className={cx("card-action-item")}>
                                <button
                                    className={cx("card-action-btn")}
                                    aria-labelledby="card-label-3"
                                    onClick={handleQuickViewClick}
                                >
                                    <ion-icon name="eye-outline" />
                                </button>
                                <div className={cx("card-action-tooltip")} id="card-label-3">
                                    Quick View
                                </div>
                                <>
                                {/* Quick View Modal */}
                                    <QuickViewBtn isOpen={isQuickViewOpen} onClose={handleCloseModal} product={product}/>
                                </>
                                </li>
                                <li className={cx("card-action-item")} >
                                <button
                                    className={cx("card-action-btn")}
                                    aria-labelledby="card-label-4"
                                >
                                    <ion-icon name="repeat-outline" />
                                </button>
                                <div className={cx("card-action-tooltip")} id="card-label-4">
                                    Compare
                                </div>
                                </li>
                            </ul>
                            </figure>
                            <div className={cx("card-content")}>
                            <div className={cx("card-cat")}>
                                {product.categories.split('/').map((category, index) => (
                                    <span key={index}>
                                        <a href="#" className={cx("card-cat-link")}>{category}</a>
                                        {index < product.categories.split('/').length - 1 && "/"}
                                    </span>
                                ))}
                            </div>
                            <h3 className={cx("h3", "card-title")}>
                                <a href={`/productdetail?id=${product.id}`}>{product.product_name}</a>
                            </h3>
                            <data className={cx("card-price")} value={product.product_price}>
                                ${product.product_price}
                            </data>
                            </div>
                        </div>
                        </li>
                    ))}
                
                
                    </ul>
                    <div className={cx('pagination')}>
                    <Pagination
                    currentPage={currentPage}
                    handleClick={handleClick}
                    hasMore={hasMore} // Pass hasMore to Pagination
                    />
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}
export default BodyLayout;