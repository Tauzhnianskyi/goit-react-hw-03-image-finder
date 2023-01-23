import { Searchbar } from './Header/Searchbar';
import { ImageGallery } from './Gallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export const App = () => {
  return (
    <div>
      <Searchbar />
      <ImageGallery />
      <Loader />
      <Button />
      <Modal />
    </div>
  );
};
