/* Список карток зображень. 
 * Створює DOM-елемент такої структури.
 */
import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem';
//import apiService from '../Api/apiService';
//import styles from "./ContactForm.module.css";
import '../../styles.css';

const ImageGallery = ({ images, onClickImg }) => (
  <ul className="ImageGallery">
        {images.map(({ id, webformatURL, largeImageURL }) => {
            return (
                <ImageGalleryItem key={id} src={webformatURL} alt="There is a picture" onClick={() => onClickImg(largeImageURL)} />
            )
        })}
  </ul>
)

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired
  })).isRequired,
  onClickImg: PropTypes.func.isRequired
}

export default ImageGallery;











// const ImageGallery extends Component {

//     listRef = createRef();

//     componentDidUpdate(prevProps) {
//         const { current } = this.listRef;

//         if (current && prevProps.images !== this.props.images) {
//             const scrollToElem =
//                 apiService.page * apiService.perPage - apiService.perPage;
//             if (!scrollToElem) return;
//             current.children[scrollToElem].scrollIntoView({
//                 behavior: "smooth",
//                 block: "start",
//             });
//         }
//     }

//     render() {
                    // const ImageGallery = ({ items, onModalCall }) => {
                    //     return (
                    //         <ul className="ImageGallery" >
                    //             {items.map(({ id, webformatURL, tags }) => (
                    //                 <ImageGalleryItem 
                    //                     key={id}          //- `id` - унікальний ідентифікатор
                    //                     img={webformatURL} //- `webformatURL` - посилання на маленьке зображення для списку карток
                    //                     onLarge={() => onModalCall(id)} //- `largeImageURL` - посилання на велике зображення для модального вікна
                    //                     tags={tags}      
                    //                 />
                    //             ))}
                    //         </ul>
                    //     );
                    // };

                    // ImageGallery.propTypes = {
                    //     items:PropTypes.arrayOf(
                    //         PropTypes.shape({
                    //             id: PropTypes.string,
                    //             webformatURL: PropTypes.string,
                    //             tags: PropTypes.string,
                    //     }),
                    // ),
                    // };
                    
                    // export default ImageGallery;




























     /* 
      *  on class 
      */
// import React, { Component } from "react";
// import PropTypes from 'prop-types';
// import ImageGalleryItem from './ImageGalleryItem';
// import apiService from '../Api/apiService';
// //import styles from "./ContactForm.module.css";
// import './styles.css';

// class ImageGallery extends Component {

//     listRef = createRef();

//     componentDidUpdate(prevProps) {
//         const { current } = this.listRef;

//         if (current && prevProps.images !== this.props.images) {
//             const scrollToElem =
//                 apiService.page * apiService.perPage - apiService.perPage;
//             if (!scrollToElem) return;
//             current.children[scrollToElem].scrollIntoView({
//                 behavior: "smooth",
//                 block: "start",
//             });
//         }
//     }

//     render() {
//         const { images, onModalOpen } = this.props;
//         const listItem = images.map(({ id, webformatURL, largeImageURL, tags }) => (
//             <ImageGalleryItem
//                 key={id}           //- `id` - унікальний ідентифікатор
//                 src={webformatURL} //- `webformatURL` - посилання на маленьке зображення для списку карток
//                 onModalOpen={() => onModalOpen(largeImageURL)} //- `largeImageURL` - посилання на велике зображення для модального вікна
//                 alt={tags}
//             />
//         ));

//         return (
//             <ul className="ImageGallery">
//                 <ImageGalleryItem images={images} onOpenModal={onOpenModal} />>
//             </ul>
//         );
//     }
// }

//     ImageGallery.propTypes = {
//         images: PropTypes.array.isRequired,
//         onOpenModal: PropTypes.func.isRequired
//     };
   
// export default ImageGallery;