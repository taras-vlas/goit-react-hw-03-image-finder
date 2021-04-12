import React, { Component } from 'react';
import apiService from './Api/apiService';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Searchbar from "./components/Searchbar/Searchbar";
import { Button }  from "./components/Button/Button";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";
import './styles.css';


//function App() {
// const App = () => {

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

const INIT_STATE = {
  page: 1,
  images: []
};

class App extends Component {
  state = {
    ...INIT_STATE,
    searchQuery: '',
    isLoading: false,
    largeImageURL: ''
  };


  componentDidMount() {
  //   const { query } = this.state;

  //   this.setState({ isLoading: true });
  //   this.fetchImg(query);
  // }

  componentDidUpdate(prevProps, prevState) {
    // Sending query
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const { searchQuery } = this.state;

    if (prevState.query !== query) {
      apiService.resetPage();

      this.setState({ isLoading: true });
      this.fetchImg(query);
    }
  }


    
    


 fetchImg = (query) => {
    apiService.fetchImg(query)
      .then(({ hits }) => this.setState({ images: hits }))
      .catch((err) => console.error(err))
      .finally(() => this.setState({ isLoading: false }));
  };

  // componentDidMount() {
  //   const { query } = this.state;

  //   this.setState({ isLoading: true });
  //   this.fetchImg(query);
  // }

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;

    if (prevState.query !== query) {
      apiService.resetPage();

      this.setState({ isLoading: true });
      this.fetchImg(query);
    }
  }

  handleLoadMore = () => {
    const { query } = this.state;
    apiService.incrementPage();

    this.setState({ isLoading: true });

    apiService.fetchImg(query)
      .then(({ hits }) =>
        this.setState((state) => ({ images: [...state.images, ...hits] })),
      )
      .catch((err) => console.error(err))
      .finally(() => this.setState({ isLoading: false }));
  };

  // handleQueryChange = (e) => {
  //   e.preventDefault();

  //   const formInput = e.target.query;

  //   this.setState({ query: formInput.value });
  //   formInput.value = "";
  // };

  handleModalOpen = (src) => {
    this.setState({ modalIsOpen: true, largeImageURL: src });
  };

  handleModalClose = () => {
    this.setState({ modalIsOpen: false, largeImageURL: "" });
  };

   render() {
    const { images, modalIsOpen, isLoading, largeImageURL } = this.state;
          //  { totalPage, showModal, }
    
    return (
      <div className="App">
 {/* Search image */}       
        <Searchbar onSubmit={this.handleQueryChange} />
 {/* Show image gallery */}
        {!!images.length && (
          <ImageGallery images={images} onModalOpen={this.handleModalOpen} />
        )}
 {/* Show button-more after request */}
        {!!images.length && <Button onLoadMore={this.handleLoadMore} />}
 {/* Show a large image in the modal */}        
        {modalIsOpen && (
          <Modal
            largeImageURL={largeImageURL}
            onModalClose={this.handleModalClose}
          />
        )}
 {/* Show loader when downloading data */}
        {isLoading && <Loader />}
      </div>
    );
  }
}

export default App;







//   componentDidUpdate(prevProps, prevState) {
//     const { query, page } = this.state;

//     if (prevState.query !== query || prevState.page !== page) {
//       this.getImages(query, page);
//     }

//           window.scrollTo({
//             top: document.documentElement.scrollHeight,
//             behavior: "smooth"
//           });
//   }

//   getImages = (query, page) => {
//     this.setState({ isLoading: true });

//     apiService
//       .getImages(query, page)
//       .then(({ data }) =>
//         this.setState(prevState => ({
//            images: [...prevState.images, ...mapState(data.hits)]
//         }))
//       )
//       .catch(error => {
//         console.log(error);
//       })
//       .finally(() => this.setState({ isLoading: false }));
//   };

//   handleSubmit = queryString => {
//     this.setState({ ...INIT_STATE, query: queryString });
//   };

//   handleClick = () => {
//     let { page } = this.state;
//     page += 1;
//     this.setState({ page });
//   };

//   handleOpenModal = id => {
//     this.setState({ largeImageURL: id });
//   };

//   handleCloseModal = () => {
//     this.setState({ largeImageURL: "" });
//   };

//   render() {
//     const { images, isLoading, largeImageURL } = this.state;
//     return (
//       <div className="App">
//         <Searchbar onSubmit={this.handleSubmit} />
        
//         {images.length > 0 && (
//           <>
//            <ImageGallery images={images} onOpenModal={this.handleOpenModal} />
//            <Button onClick={this.handleClick} />
//           </>
//         )}
        
        
        
//         {isLoading && <Loader />}
        
//         {largeImageURL && (
//           <Modal
//             largeImageURL={largeImageURL}
//             onCloseModal={this.handleCloseModal}
//           />
//         )}
//       </div>
//     );
//   }
// }

// export default App;
