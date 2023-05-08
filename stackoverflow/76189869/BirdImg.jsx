import { useEffect, useRef, useState } from "react";
import { fetchBirdImg } from "./api";
import React from "react";

function BirdImg({ name }) {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fetchBirdImg(name).then((data) => {
            imgRef.current.src = data[0].urls.thumb;
            setLoaded(true);
          });
          observer.unobserve(imgRef.current);
        }
      });
    });
    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [name]);

  let imgSrc;
  if (loaded === false) {
    imgSrc = `https://via.placeholder.com/200x300/86efac?text=Loading...`;
  }
  if (loaded) {
    imgSrc = imgRef.current.src;
  }
  if (error === true) {
    imgSrc = `https://via.placeholder.com/200x300/86efac?text=Error`;
  }

  return (
    <img ref={imgRef} onLoad={() => setLoaded(true)} onError={() => setError(true)} src={imgSrc} alt={name} />
  );
}

export default BirdImg;