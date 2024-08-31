import { useLocation, useParams } from 'react-router-dom';
import styles from './ProductDetailPage.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import HeadLayout from '../../components/ReusedLayout/HeadLayout'
import AddToCartBtn from '../../components/ReusedFunction/AddToCartBtn';
import '../../components/GlobalStyles/GlobalStyles.scss'
import { useGlobalContext } from '../../components/GlobalContext';
const images = require.context('../../assets/images', false, /\.(jpg|jpeg|png)$/);
const cx = classNames.bind(styles);
function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
function ProductDetailPage() {
    const query = useQuery();
    const id = query.get('id'); // Get the id from the URL query parameters
    const [product, setProduct] = useState([]);
    const [productDetails, setProductDetails] = useState([]);
    const { setBtnPosition, setIsProductDetail } = useGlobalContext();
    useEffect(() => {
        fetchProduct();
    }, [id]);
    useEffect(() => {
        fetchProductDetails();
      }, [id]);
    useEffect(() => {
        const btnRect = document.querySelector('.add-to-bag').getBoundingClientRect();
        setBtnPosition({ left: btnRect.left, top: btnRect.top });
        setIsProductDetail(true); // Mark as ProductDetail
    }, []);

    const fetchProduct = async () => {
        try {
          const response = await fetch('http://localhost:8081/getProduct', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productId: id}),
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const result = await response.json();
          console.log("result: ", result);
          setProduct(result);
        } catch (error) {
          console.error('Error fetching cart:', error);
        }
      };
      const fetchProductDetails = async () => {
        try {
          const response = await fetch('http://localhost:8081/getProductDetails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productId: id}),
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
            const text = await response.text();
            console.log("Response Text:", text);

            // Parse the response text to JSON
            const data = JSON.parse(text);
            console.log("Parsed Data:", data);
            setProductDetails(data);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };
    
    const handleThumbnailHover = (event) => {
        const mainImage = document.getElementById('mainImage');
        const largeImageFile = event.target.getAttribute('data-large');
    
        try {
          mainImage.src = images(`./${largeImageFile}`); // Dynamically set the src using the images function
        } catch (e) {
          console.error("Image not found:", largeImageFile);
        }
      };
      
    return(
      <div className={cx("product-detail-container")}>
      <HeadLayout />
      <div className={cx("product-detail-wrapper-left")}>
        <div className={cx("thumbnail-container")}>
          {product.url && (
            <img
              src={images(`./${product.url}`)}
              alt={`Thumbnail ${product.id}`}
              data-large={product.url}
              className={cx("thumbnail")}
              onMouseOver={handleThumbnailHover}
            />
          )}
    
          {productDetails.map((productDetail) => (
            productDetail.type === "thumbnail" && productDetail.url && ( // Check if url is defined
              <img
                src={images(`./${productDetail.url}`)}
                key={productDetail.id}
                alt={`Thumbnail ${productDetail.id}`}
                className={cx("thumbnail")}
                data-large={productDetail.url}
                onMouseOver={handleThumbnailHover}
              />
            )
          ))}
        </div>
        {product.url && (
          <img
            src={images(`./${product.url}`)}
            alt={product.name}
            className={cx("product-detail-image")}
            id="mainImage"
          />
        )}
      </div>
      <div className={cx("product-detail-wrapper-right")}>
        <h3 className={cx("h3", "product-detail-card-title")}>{product.name}</h3>
        <data className={cx("product-detail-card-price")}>${product.price}</data>
        <option>Select size</option>
        
        <div>
          <AddToCartBtn
            productId={product.id}
            productUrl={product.url ? images(`./${product.url}`) : ''} // Ensure product.url is checked
            className="add-to-bag" // Use GlobalStyles class directly
          >
            Add to Bag
          </AddToCartBtn>
        </div>
        <button className={cx("favorite-btn")}>
          <ion-icon name="heart-outline" />
          Favorite
        </button>
        <span>{product.description}</span>
      </div>
    </div>
    
    )
}
export default ProductDetailPage;