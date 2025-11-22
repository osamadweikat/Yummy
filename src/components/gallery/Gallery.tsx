import { useState } from "react";
import "./gallery.css";
import { galleryData } from "../../types/gallery.types";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const prevImage = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const nextImage = () => {
    if (currentIndex < galleryData.length - 1)
      setCurrentIndex(currentIndex + 1);
  };

  return (
    <section className="gallery-section">
      {galleryData.map((gallery, index) => (
        <div
          key={gallery.id}
          className="lightbox-link"
          style={{ backgroundImage: `url(${gallery.backgroundImage})` }}
          onClick={() => openLightbox(index)}
        >
          <div className="gallery-overlay" />
        </div>
      ))}

      {isOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button
            className="close-btn"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          >
            &times;
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
            style={{ position: "relative" }}
          >
            <img
              src={galleryData[currentIndex].backgroundImage}
              alt=""
              className="main-image"
            />

            <button
              className={`nav-btn left ${currentIndex === 0 ? "hidden" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              &#10094;
            </button>
            <button
              className={`nav-btn right ${
                currentIndex === galleryData.length - 1 ? "hidden" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              &#10095;
            </button>

            <div className="thumbnails" onClick={(e) => e.stopPropagation()}>
              {galleryData.map((gallery, index) => (
                <img
                  key={gallery.id}
                  src={gallery.backgroundImage}
                  alt=""
                  className={`thumb ${index === currentIndex ? "active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
