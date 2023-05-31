import "./index.css";
import { useState } from "react";
import fish1 from "./assets/tinned-fish-1.jpeg";
import fish2 from "./assets/tinned-fish-2.jpeg";
import fish3 from "./assets/tinned-fish-3.jpeg";
import fish4 from "./assets/tinned-fish-4.jpeg";
import fish5 from "./assets/tinned-fish-5.jpeg";
import fish6 from "./assets/tinned-fish-6.jpeg";
import fish7 from "./assets/tinned-fish-7.jpeg";
import fish8 from "./assets/tinned-fish-8.jpeg";
import fish9 from "./assets/tinned-fish-9.jpeg";
import fish10 from "./assets/tinned-fish-10.jpeg";
import fish11 from "./assets/tinned-fish-11.jpeg";
import fish12 from "./assets/tinned-fish-12.jpeg";
import fish13 from "./assets/tinned-fish-13.jpeg";
import fish14 from "./assets/tinned-fish-14.jpeg";
import fish15 from "./assets/tinned-fish-15.jpeg";

const images = [
  fish1,
  fish2,
  fish3,
  fish4,
  fish5,
  fish6,
  fish7,
  fish8,
  fish9,
  fish10,
  fish11,
  fish12,
  fish13,
  fish14,
  fish15,
];

const Loading = ({ calculatedWidth }) => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded">loading images... </label>
      <progress id="images-loaded" max="100" value={calculatedWidth}></progress>
    </div>
  </aside>
);

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [numLoaded, setNumLoaded] = useState(0);
  const length = images.length - 1;

  const handlePrevPic = () => {
    setCurrentImage((currentImage) => {
      return currentImage > 0 ? currentImage - 1 : length;
    });
  };

  const handleNextPic = () => {
    setCurrentImage((currentImage) => {
      return currentImage < length ? currentImage + 1 : 0;
    });
  };

  const handleImageLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1);
  };

  return (
    <section>
      <header>
        <h1>fishy</h1>
        <h2>
          an ai image generated tribute to tinned fish
          <br />
          by jacob schreiber
        </h2>
      </header>
      <figure>
        {numLoaded < images.length && (
          <Loading calculatedWidth={(numLoaded / images.length) * 100} />
        )}
        <div className="prev" onClick={handlePrevPic}></div>
        <div className="next" onClick={handleNextPic}></div>

        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
        {images.map((imageUrl, index) => (
          <img
            key={imageUrl}
            src={imageUrl}
            alt=""
            onLoad={handleImageLoad}
            className={currentImage === index ? "display" : "hide"}
          />
        ))}
      </figure>
    </section>
  );
};

export default App;
