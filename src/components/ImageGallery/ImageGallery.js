import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import s from "../ImageGallery/ImageGallery.module.css";
import PropTypes from 'prop-types';

const ImageGallery =({images, onClick})=> {
    return (
        <ul className={s.ImageGallery} >
            {images.map(({ id, webformatURL, largeImageURL }) => {
                return (
                    <ImageGalleryItem
                        key={id}
                        webformatURL={webformatURL}
                        largeImageURL={largeImageURL}
                        onModalOpen={onClick}
                    />   
                )
            })}
        </ul>
    )
};

ImageGallery.prototype = {
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired
    })),
    onClick: PropTypes.func.isRequired,
}

export default ImageGallery;
