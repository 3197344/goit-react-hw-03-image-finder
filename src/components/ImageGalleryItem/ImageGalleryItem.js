import PropTypes from 'prop-types';
import s from '../ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({largeImageURL, webformatURL, onModalOpen }) => {
    
    return (
        <li className={s.ImageGalleryItem} data-url={largeImageURL} onClick={onModalOpen} >
            <img
                className={s.GalleryItemImage}
                src={webformatURL}
                alt="img"
            />
        </li>
    )
};

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onModalOpen: PropTypes.func.isRequired,
    }

export default ImageGalleryItem;