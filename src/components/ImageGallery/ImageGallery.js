import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../Gallery/ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';

export const ImageGallery = ({ items, onImgClick }) => {
  return (
    <ImageList>
      {items.map(({ id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          name={tags}
          url={webformatURL}
          largeUrl={largeImageURL}
          onClick={onImgClick}
        />
      ))}
    </ImageList>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
