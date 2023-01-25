import React from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, PicItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ name, url, largeUrl, onClick }) => {
  return (
    <GalleryItem onClick={onClick}>
      <PicItem src={url} alt={name} name={largeUrl} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  largeUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
