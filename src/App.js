import "./index.css";
import { useState } from "react";
import fish1 from "./assets/tinned-fish-1.jpeg";
import fish2 from "./assets/tinned-fish-2.jpeg";
import fish3 from "./assets/tinned-fish-3.jpeg";
import fish4 from "./assets/tinned-fish-4.jpeg";
import fish5 from "./assets/tinned-fish-5.jpeg";
import fish6 from "./assets/tinned-fish-6.jpeg";

const images = [fish1, fish2, fish3, fish4, fish5, fish6];

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

  const handleClick = () => {
    const length = images.length - 1;
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
        <h1>Fishy</h1>
        <h2>
          A tribute to tinned fish packaging <br />
          by Jacob Schreiber
        </h2>
      </header>
      <figure>
        {numLoaded < images.length && (
          <Loading calculatedWidth={(numLoaded / images.length) * 100} />
        )}
        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
        {images.map((imageUrl, index) => (
          <img
            key={imageUrl}
            src={imageUrl}
            alt=""
            onClick={handleClick}
            onLoad={handleImageLoad}
            className={currentImage === index ? "display" : "hide"}
          />
        ))}
      </figure>
    </section>
  );
};

export default App;
