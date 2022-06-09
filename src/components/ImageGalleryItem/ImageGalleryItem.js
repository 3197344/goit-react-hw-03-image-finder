import PropTypes from 'prop-types';
import s from '../ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({image, onModalOpen }) => {
    const { webformatURL, largeImageURL, tags } = image;
    
    return (
        <li
            className={s.ImageGalleryItem}
            data-url={largeImageURL}
            onClick={onModalOpen} >
            <img
                className={s.GalleryItemImage}
                src={webformatURL}
                alt={tags}
            />
        </li>
    )
};

ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string,
        tags: PropTypes.string.isRequired,
    }),
    onModalOpen: PropTypes.func,
    }

export default ImageGalleryItem;