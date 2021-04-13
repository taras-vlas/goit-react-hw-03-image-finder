/* 
 * Компонент елемента списка ImageGalleryItem з зображенням. 
 * Створює DOM-елемент такої структури:
 */
//import React, { Component } from "react";
import PropTypes from 'prop-types';
import defaultImage from '../default.jpg';
import styles from './ImageGalleryItem.module.css';
//import '../../styles.css';

const ImageGalleryItem = ({ src, alt, onClick }) => {

    return (
        <li className={styles.ImageGalleryItem}>
            <img className={styles.ImageGalleryItemImage}
            src={src}
            alt={alt}
            onClick={onClick}
        />
     </li>
    )
};

    ImageGalleryItem.propTypes = {
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    };
  
    ImageGalleryItem.defaultProps = {  
        src: defaultImage,
    };
    
export { ImageGalleryItem };




    







    
    /* 
     *  on class 
     */
// class ImageGalleryItem extends Component {
//     handlePassId = ({ target: { id } }) => {
//         const { onOpenModal } = this.props;
//         onOpenModal(id);
//     };

//     render() {
//       const { images } = this.props;
//       return (
//         images.map(image => (
//             <li className="ImageGalleryItem">
//                <img src=""
//                     alt=""
//                     className="ImageGalleryItem-image" />
//             </li>
//       )));
//     }    
// }

//     ImageGalleryItem.propTypes = {
//         images: PropTypes.arrayOf(
//             PropTypes.shape({
//                 imageId: PropTypes.number.isRequired,
//                 linkSmallImage: PropTypes.string.isRequired
//             })
//         ).isRequired,
//         onOpenModal: PropTypes.func.isRequired
//     };
  
// export default ImageGalleryItem;