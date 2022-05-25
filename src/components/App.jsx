import { Component } from "react";
import SearchBar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from './Loader/Loader';
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import s from '../components/App.module.css';
import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    imgName: '',
    page: 1,
    imgArray: null,
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

    if (prevState.imgName !== this.state.imgName && this.state.imgName !== '') {
      this.setState({ status: 'pending', page: 1 });
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
          return this.setState({ imgArray: res.hits.map(({ id, webformatURL, largeImageURL }) => ({ id, webformatURL, largeImageURL })), status: 'resolved' });
        })
        .catch(err => this.setState({ error: err, status: 'rejected' }));
      this.setState(prev => ({ page: prev.page + 1 }));
    };
  };

  reset() {
    this.setState({ page: 1 });
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handlerSubmit = value => {
    this.setState({
      imgName: value,
      page: 1
    });
  };

  handleButton = () => {
    const API_KEY = '7652668-fcb425495cfb1d754d33171ff';
    const API_GET = 'https://pixabay.com/api/?';
    this.setState({ status: 'pending' });
    this.setState(prev => ({ page: prev.page + 1 }));
    const { imgArray, imgName, page } = this.state;
    axios
      .get(
        `${API_GET}q=${imgName}&key=${API_KEY}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(res => {
        const { total, hits } = res.data;
        if (total !== imgArray.length) {
          return this.setState(prev => ({
            imgArray: [...prev.imgArray, ...hits.map(({ id, webformatURL, largeImageURL }) => ({ id, webformatURL, largeImageURL }))],
            status: "resolved"
          }));
        }
        return this.setState({ status: 'resolveWithoutButton' });
      })
      .catch(err => this.setState({ error: err, status: 'rejected' }));
  };

  handleForModal = e => {
    this.setState({ largeImg: e.target.alt });
    this.toggleModal();
  };

  render() {
    const { status, error, imgArray, largeImg, showModal } = this.state;
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
          <SearchBar onSubmit={this.handlerSubmit} />
          {imgArray && <ImageGallery images={imgArray} onClick={this.handleForModal} />}
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
          <ImageGallery images={imgArray} onClick={this.handleForModal} />
          {imgArray && <Button loadImages={this.handleButton} />}
          {showModal && <Modal
            largeImg={largeImg}
            onClose={this.toggleModal}
          />}
        </div>
      );
    }

    if (status === 'resolveWithoutButton') {
      return (
        <div className={s.app}>
          <SearchBar onSubmit={this.handlerSubmit} />
          <ImageGallery images={imgArray} onClick={this.handleForModal} />
          <p style={{ textAlign: 'center', fontSize: 30 }}>It is the end!</p>
          {showModal && <Modal largeImg={largeImg} onClose={this.toggleModal} />}
        </div>
      );
    }
  }
};