import PropTypes from 'prop-types';
import s from '../ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ tags, webformatURL})=> {
    return (
        <li className={s.ImageGalleryItem}  >
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
    }

export default ImageGalleryItem;