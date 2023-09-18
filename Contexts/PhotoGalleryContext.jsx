import { createContext, useState } from "react";

const PhotoGalleryContext = createContext(
  {
    photoGallery: [],
    addPhotoToGallery: () => {},
  },
);

const PhotoGalleryProvider = ({ children }) => {
  const [photoGallery, setPhoto] = useState([]);

  const addPhotoToGallery = (newPhoto) => {
    setPhoto((prevPhotoGallery) => [...prevPhotoGallery, newPhoto]);
  };

  return (
    <PhotoGalleryContext.Provider value={{ photoGallery, addPhotoToGallery }}>
      {children}
    </PhotoGalleryContext.Provider>
  );
};

export { PhotoGalleryContext, PhotoGalleryProvider };
