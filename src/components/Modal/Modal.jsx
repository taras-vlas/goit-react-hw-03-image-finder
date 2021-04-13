     
     /*
      *  on class 
      */
import React, { Component } from "react";
//import PropTypes from "prop-types";
import styles from './Modal.module.css';



class Modal extends Component {
//export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleEsc)
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEsc)
  }

  handleEsc = e => {
    if (e.keyCode === 27 ) {  //"Escape"
      this.props.onClose();
    }
  }

  closeModal = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  }

  render() {
    return (
      <div className={styles.Overlay} onClick={this.closeModal}>
        <div className={styles.Modal}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Modal;










// class Modal extends Component {
 
//         componentDidMount() {
//           window.addEventListener("keydown", this.handleCloseModalEsc);
//         //console.log("componentDidMount()");
//         }

//         componentWillUnmount() {
//           window.removeEventListener("keydown", this.handleCloseModalEsc);
//          // console.log("componentDidUnmount()");
//         }
  
//   handleCloseModalEsc = ({ keyCode }) => {
//     if (keyCode === 27 ) {
//       this.props.onCloseModal();
//     }
//   };
//   handleBackdropClick = (event) => {
//     if (event.currentTarget !== event.target)
//       this.props.onCloseModal();
//   };

//   render() {
//     // const { images, imgId, onCloseModal } = this.props;
//     // const { largeImageURL } = this.props;
//     return (
//       <div className="Overlay" onClick={this.props.onCloseModal}>
//         <div className="Modal" >
//           <img src={this.props.largeImage} alt="" />
//         </div>
//       </div>
//     );
//   }
// };

// /* Визначення propTypes зовні класу Modal */
//   Modal.propTypes = {
//     images: PropTypes.arrayOf(
//       PropTypes.shape({
//         imageId: PropTypes.number.isRequired,
//         largeImageURL: PropTypes.string.isRequired
//       })
//     ).isRequired,
//     imgId: PropTypes.string.isRequired,
//     onCloseModal: PropTypes.func.isRequired
//   };


// export default Modal;















// import PropTypes from "prop-types";
// import "./styles.css";

// const Modal = ({ largeImageURL, tag }) => {
  
//   //       componentDidMount() {
//   //         window.addEventListener("keydown", this.handleCloseModalEsc);
//   // }

//   //       componentWillUnmount() {
//   //         window.removeEventListener("keydown", this.handleCloseModalEsc);
//   //       }
  
//   handleCloseModalEsc = ({ keyCode }) => {
//     if (keyCode === 27 ) {
//       this.props.onCloseModal();
//     }
//   };
//   handleBackdropClick = (event) => {
//     if (event.currentTarget !== event.target)
//       this.props.onCloseModal();
//   };

//   // render() {
//   //   const { images, imgId, onCloseModal } = this.props;
//   //   //const { largeImageURL } = findImg(images, +imgId);
//   //   const { largeImageURL } = this.props;
//     return (
//       <div className="Overlay">
//         <div className="Modal" onClick={onCloseModal}>
//           <img src={largeImageURL} alt={tag} />
//         </div>
//       </div>
//     );
//   // }
// };

// /* Визначення propTypes зовні  Modal */
//   Modal.propTypes = {
//     largeImageURL: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     onCloseModal: PropTypes.func.isRequired
//   };

// export { Modal };