import { Component } from "react";
import SearchBar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from './Loader/Loader';
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import s from '../components/App.module.css';
import fetchImages from "../API/fetchImages";
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    imgName: '',
    page: 1,
    images: [],
    totalImg: 0,
    largeImg: null,
    loading: false,
    error: null,
    modalImg: null,
    showModal: false,
    tags: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { images, page } = this.state;

    if (prevState.images !== images && images !== '') {
      this.setState({ images: [], page: 1 });
      this.loadImages();
    }
    if (prevState.page !== page && page !== 1) {
      this.loadImages();
    }
  }

  loadImages = () => {
    const { page, imgName } = this.state;
    this.setState({ loading: true, error: null });
    fetchImages(imgName, page)
      .then(images=> {
        const pictures = images.hits.map(
          ({ id, webformatURL, tags, largeImg }) =>
            ({ id, webformatURL, tags, largeImg })
        );

        if (!images.hits.length) {
          console.log("Do not find");
          return this.setState({
            error: `Do not find ${images}`,
          });
        }
        
        return this.setState(prevState => ({
          images: [...prevState.images, ...pictures], 
          totalImg: images.totalHits,
        })
        );
      })
      .catch(err => this.setState({ error: err}))
      .finally(() => this.setState({ loading: false }));
  };
  
  toggleModal = (e) => {
    if (e) {
      const url = e.currentTarget.dataset.url
      this.setState(prevState => ({
        showModal: !prevState.showModal,
        largeImg: url
      })
      );
      return
    }
    
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }))
  };

  handlerSubmit = imgName => {
    this.setState({
      imgName: imgName,
      page: 1,
      images: []
    });
  };

  handleButton = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    })
    );
  };

  render() {
    const { error, images, showModal, modalImg, tags, loading, totalImg} = this.state;


      return (
        <div className={s.app}>
          <SearchBar onSubmit={this.handlerSubmit} />
          <ImageGallery images={images} onClick={this.toggleModal} />
          {loading && <Loader />}
          {images.length > 0 && images.length < totalImg && (
            <Button loadImages={this.handleButton} />)}
          {showModal && (
            <Modal
              onClose={this.toggleModal}
              modalImg={modalImg}
              tags={tags} />
          )}
          {error && <>{error.message}</>}
        </div>
      );

  }
}; 