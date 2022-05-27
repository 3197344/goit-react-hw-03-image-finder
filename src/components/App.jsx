import { Component } from "react";
import SearchBar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from './Loader/Loader';
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import s from '../components/App.module.css';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    imgName: '',
    page: 1,
    imgArray: [],
    largeImg: null,
    status: 'idle',
    error: null,
    modalImg: null,
    showModal: false,
    tags: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const API_KEY = '7652668-fcb425495cfb1d754d33171ff';
    const API_GET = 'https://pixabay.com/api/?';
    const { imgName, page } = this.state;

    if (this.state.status === "pending") {
     setTimeout(() => {
      fetch(
        `${API_GET}q=${imgName}&key=${API_KEY}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(
            new Error(`Do not find ${imgName}`)
          );
        })
        .then(res => {
          if (res.hits.length === 0) {
            return this.setState({
              error: `Do not find ${imgName}`,
              status: 'rejected',
            });
          }
          return this.setState(prev => ({ imgArray: [...prev.imgArray,...res.hits], status: 'resolved' }));
        })
        .catch(err => this.setState({ error: err, status: 'rejected' }));
      
     }, 300);
      
    };
  };

  reset() {
    this.setState({ page: 1 });
  }

  toggleModal = (e) => {
    if (e) {
      const url = e.currentTarget.dataset.url
 
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      largeImg: url
    }));
    return
    }
    this.setState(prevState => ({
      showModal: !prevState.showModal,}))
  };

  handlerSubmit = value => {
    this.setState({
      imgName: value,
      page: 1,
      status: 'pending'
    });
  };

  handleButton = (e) => {
    
    this.setState(prev => ({ 
      page: prev.page + 1,
      status: 'pending'
    }));
    
  };

 

  render() {
    const { status,  error, imgArray, largeImg, showModal } = this.state;
 
    if (status === 'idle') {
      return (
        <div className={s.app}>
          <SearchBar onSubmit={this.handlerSubmit} />
        </div>
      );
    }

    if (status === 'pending') {
      return (
        <div className={s.app}>
          <ImageGallery images={imgArray} onClick={this.toggleModal} />
          <Loader />
          <p style={{ textAlign: 'center', fontSize: 30 }}>Loading...</p>
        </div>
      );
    }

    if (status === 'rejected') {
      return (
        <div className={s.app}>
          <SearchBar onSubmit={this.handlerSubmit} />
          <p style={{ textAlign: 'center', fontSize: 30 }}>{error}</p>
        </div>
      );
    }

    if (status === 'resolved') {
      return (
        <div className={s.app}>
          <SearchBar onSubmit={this.handlerSubmit} />
          <ImageGallery images={imgArray} onClick={this.toggleModal} />
          {imgArray && <Button loadImages={this.handleButton} />}
          {showModal&&<Modal onClose={this.toggleModal} modalImg ={largeImg} />}
        </div>
      );
    }
    
    

    if (status === 'resolveWithoutButton') {
      return (
        <div className={s.app}>
          <SearchBar onSubmit={this.handlerSubmit} />
          <ImageGallery images={imgArray} onClick={this.toggleModal} />
          <p style={{ textAlign: 'center', fontSize: 30 }}>It is the end!</p>
    
        </div>
      );
    }
  
  }
};