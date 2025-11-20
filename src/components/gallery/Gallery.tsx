import "./gallery.css";
import { galleryData } from "../../types/gallery.types";

const Gallery = () => {
  return (
    <section className="gallery-section">
      {galleryData.map((gallery) => (
        <div
          key={gallery.id}
          className="lightbox-link"
          style={{ backgroundImage: `url(${gallery.backgroundImage})` }}
        >
          <div className="gallery-overlay" />
        </div>
      ))}
    </section>
  );
};

export default Gallery;
