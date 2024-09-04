import React, { useEffect, useRef } from 'react';
import './ImageSlider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ImageSlider = () => {
  const slideRef = useRef(null);

  useEffect(() => {
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');

    const handleNextClick = () => {
      let items = document.querySelectorAll('.item');
      slideRef.current.appendChild(items[0]);
    };

    const handlePrevClick = () => {
      let items = document.querySelectorAll('.item');
      slideRef.current.prepend(items[items.length - 1]);
    };

    next.addEventListener('click', handleNextClick);
    prev.addEventListener('click', handlePrevClick);

    return () => {
      next.removeEventListener('click', handleNextClick);
      prev.removeEventListener('click', handlePrevClick);
    };
  }, []);

  return (
    <div className="container">
      <h2 className="slider-heading">Featured Destinations</h2>
      <div className="slide" ref={slideRef}>
        <div className="item" style={{ backgroundImage: `url('/gangaarti.jpg')` }}>
          <div className="content">
            <div className="name">Varanasi Ganga Arti</div>
            <div className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url('/konarksuntemple.jpg')` }}>
          <div className="content">
            <div className="name">Konarka Sun Temple</div>
            <div className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url('/goa beach.jpg')` }}>
          <div className="content">
            <div className="name">Goa Beaches</div>
            <div className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url('/hawamahal.jpg')` }}>
          <div className="content">
            <div className="name">Hawa Mahal</div>
            <div className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url('/brajholi.jpg')` }}>
          <div className="content">
            <div className="name">Braj Holi in Mathura Vrindavan</div>
            <div className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt</div>
            <button>See More</button>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url('/shimla.jpg')` }}>
          <div className="content">
            <div className="name">Shimla</div>
            <div className="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nesciunt</div>
            <button>See More</button>
          </div>
        </div>
      </div>

      <div className="button">
        <button className="prev">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="next">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
