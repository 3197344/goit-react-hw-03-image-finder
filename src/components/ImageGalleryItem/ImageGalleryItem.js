import PropTypes from 'prop-types';
import s from '../ImageGalleryItem/ImageGalleryItem.module.css';

function ImageGalleryItem ({ tags, webformatURL, openModal }) {
    return (
        <li className={s.ImageGalleryItem}  onClick={openModal}>
            <img
                className={s.GalleryItemImage}
                src={webformatURL}
                alt={tags} />
        </li>
    )
};

ImageGalleryItem.propTypes = {
    tags: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
}

export default ImageGalleryItem;