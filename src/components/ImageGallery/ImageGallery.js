import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "../ImageGallery/ImageGallery.module.css";
import PropTypes from 'prop-types';

function ImageGallery({images, onClick}) {
    return (
        <ul className={s.ImageGallery}>
            {images.map(({ id, tags, webformatURL, largeImageURL }) => {
                return (
                    <ImageGalleryItem
                        key={id}
                        tags={tags}
                        webformatURL={webformatURL}
                        largeImageURL={largeImageURL}
                        openModal={onClick}
                    />   
                )
            })}
        </ul>
    )
};

ImageGallery.prototype = {
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        tags: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired
    })),
    onClick: PropTypes.func.isRequired,
}

export default ImageGallery;
