import React, { Component } from 'react';
import apiService from './Api/apiService';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Searchbar from "./components/Searchbar/Searchbar";
import { Button }  from "./components/Button/Button";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";
import './styles.css';

const INIT_STATE = {
    page: 1,
    images: []
};
  
class App extends Component {

   state = {
    ...INIT_STATE,
    searchQuery: '',
    isLoading: false, //Loading:
    largeImage: '',   //largeImg:
    // error: null,
    totalPage: 0      
  };

  componentDidMount() { }

  componentDidUpdate(prevProp, prevState) {
    // Sending query
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }

    // Scroll to bottom page
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    if (prevPage !== nextPage) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;

    this.setState({ isLoading: true })
    apiService.fetchArticles(searchQuery, page)
      .then(data => {
        const images = data.hits;

        return this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
          totalPage: data.totalHits - 12 * this.state.page
        }))
      },
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  handleSearchQuery = query => {
    this.setState({
      searchQuery: query,
      totalPage: 0,
       ...INIT_STATE  
    })
  }

  handleLoadMore = () => {
    this.fetchImages();
  }

  toggleModal = (img = '') => {
    this.setState({
      largeImage: img
    })
  }

  render() {
    //const { images, isLoading, error, totalPage, showModal, largeImage } = this.state;
    const { images, isLoading, totalPage, showModal, largeImage } = this.state;
    return (
      <div>
        {/* Search image */}
        <Searchbar onSearch={this.handleSearchQuery} disabled={showModal} />

        {/* Show error */}
        {/* {error && <p>Whoops, something went wrong: {error.message}</p>} */}

        {/* Show image gallery */}
        {images.length > 0 && <ImageGallery images={images} onClickImg={this.toggleModal} />}

        {/* Show loader when downloading data */}
        {isLoading && <Loader />}

        {/* Show button-more after request */}
        {totalPage > 0 && <Button onLoadMore={this.handleLoadMore} />}

        {/* Show a large image in the modal */}
        {largeImage && <Modal onClose={this.toggleModal}>
          <img src={largeImage} alt="" />
        </Modal>}
      </div>
    )
  }
}

export default App;











// const INIT_STATE = {
//   page: 1,
//   images: []
// };

// class App extends Component {
//   state = {
//     ...INIT_STATE,
//     searchQuery: '',
//     loading: false,
//     largeImg: '',
//     // error: null,
//     total: 0      
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevQuery = prevState.searchQuery;
//     const nextQuery = this.state.searchQuery;
//     if (nextQuery !== prevQuery) {
//       this.fetchImages();
//     }
//   }

//   fetchImages = () => {
//     if (!this.state.searchQuery) {
//       return;
//     }
//     this.setState({ loading: true });
   
//     apiService
//       .fetchArticles(this.state.searchQuery, this.state.page)
//       .then(({ items, total }) => {
//        // this.setState((prevState) => ({ images: [...prevState.images, ...items], total, page: prevState.page + 1 }));
//         this.setState((prevState) => ({ images: [...prevState.images, ...items], total, page: prevState.page + 1 }));
//       })
//       // .catch((error) => {
//       //   this.setState({ error });
//       //   toast.error('Error as:', error.message);
//       // })
//       .finally(() => {
//         this.setState({ loading: false });
        
//         window.scrollTo({
//           top: document.documentElement.scrollHeight,
//           behavior: 'smooth',
//         });
//       });
//   };

//   handleSearchSubmit = (query) => {
//     this.setState({ searchQuery: query, page: 1, images: [] });
//   };

//   handleModalCall = (id) => {
//     this.setState({ largeImg: this.state.images.find((img) => img.id === id).largeImageURL });
//   };

//   handleModalClick = (e) => {
//     if (e.target !== e.currentTarget) {
//       return;
//     }
//     this.handleModalClose();
//   };

//   handleModalClose = () => {
//     this.setState({ largeImg: '' });
//   };

//   render() {
//     const { images, loading, total, largeImg } = this.state;
//     return (
//       <div className="App">
//         <Searchbar onSubmit={this.handleSearchSubmit} />
//         <ImageGallery items={images} onModalCall={this.handleModalCall} />
//         {loading
//           ? (<Loader />)
//           : (total > 12 && !loading && <Button onMore={this.fetchImages} />)
//         }
//         {largeImg && <Modal largeImage={largeImg} onClose={this.handleModalClose} onClick={this.handleModalClick} />}
        
//       </div>
//     );
//   }
// }

// export default App;







// const mapState = images => {
//   return images.map(
//     ({
//       id: imageId,
//       webformatURL: linkSmallImage,
//       largeImageURL: linkLargeImage
//     }) => ({
//       imageId,
//       linkSmallImage,
//       linkLargeImage
//     })
//   );
// };








// export default class App extends Component {
//   state = {
//     images: [],
//     searchQuery: '',
//     page: 1,
//     totalPage: 0,
//     isLoading: false,
//     error: null,
//     largeImage: ''
//   };

//   componentDidMount() { }

//   componentDidUpdate(prevProp, prevState) {
//     // Sending query
//     const prevQuery = prevState.searchQuery;
//     const nextQuery = this.state.searchQuery;

//     if (prevQuery !== nextQuery) {
//       this.fetchImages();
//     }

//     // Scroll to bottom page
//     const prevPage = prevState.page;
//     const nextPage = this.state.page;
//     if (prevPage !== nextPage) {
//       window.scrollTo({
//         top: document.documentElement.scrollHeight,
//         behavior: 'smooth',
//       });
//     }
//   }

//   fetchImages = () => {
//     const { searchQuery, page } = this.state;

//     this.setState({ isLoading: true })
//     apiService.getImages(searchQuery, page)
//       .then(data => {
//         const images = data.hits;

//         return this.setState(prevState => ({
//           images: [...prevState.images, ...images],
//           page: prevState.page + 1,
//           totalPage: data.totalHits - 12 * this.state.page
//         }))
//       },
//       )
//       .catch(error => this.setState({ error }))
//       .finally(() => this.setState({ isLoading: false }));
//   }

//   handleSearchQuery = query => {
//     this.setState({
//       searchQuery: query,
//       page: 1,
//       images: [],
//       totalPage: 0
//     })
//   }

//   handleLoadMore = () => {
//     this.fetchImages();
//   }

//   toggleModal = (img = '') => {
//     this.setState({
//       largeImage: img
//     })
//   }

//   render() {
//     const { images, isLoading, error, totalPage, showModal, largeImage } = this.state;

//     return (
//       <div>
//         {/* Search image */}
//         <Searchbar onSearch={this.handleSearchQuery} disabled={showModal} />

//         {/* Show error */}
//         {error && <p>Whoops, something went wrong: {error.message}</p>}

//         {/* Show image gallery */}
//         {images.length > 0 && <ImageGallery images={images} onClickImg={this.toggleModal} />}

//         {/* Show loader when downloading data */}
//         {isLoading && <Loader />}

//         {/* Show button-more after request */}
//         {totalPage > 0 && <Button onLoadMore={this.handleLoadMore} />}

//         {/* Show a large image in the modal */}
//         {largeImage && <Modal onClose={this.toggleModal}>
//           <img src={largeImage} alt="" />
//         </Modal>}
//       </div>
//     )
//   }
// }