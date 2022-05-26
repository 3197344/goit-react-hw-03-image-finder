import PropTypes from 'prop-types';
import s from '../ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ tags, largeImageURL, webformatURL, onModalOpen }) => {
    const onClick = modalImg => onModalOpen(modalImg, tags);
    return (
        <li className={s.ImageGalleryItem}  >
            <img
                className={s.GalleryItemImage}
                src={webformatURL}
                alt={tags}
                onClick={() => onClick(largeImageURL, tags)}
            />
        </li>
    )
};

ImageGalleryItem.propTypes = {
    tags: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onModalOpen: PropTypes.func.isRequired,
    }

export default ImageGalleryItem;