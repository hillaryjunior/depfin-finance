import React, { useState, useCallback } from "react";
import style from "../sass/components/Silder.module.scss";
import { testimonialData } from "../components/TestimonialsData";


// Lightweight arrow components - cached to prevent re-creation
const ArrowRight = React.memo(() => (
  <span style={{ fontSize: '20px', lineHeight: 1 }}>→</span>
));
ArrowRight.displayName = "ArrowRight";

const ArrowLeft = React.memo(() => (
  <span style={{ fontSize: '20px', lineHeight: 1 }}>←</span>
));
ArrowLeft.displayName = "ArrowLeft";


const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Use useCallback to prevent function recreation on every render
  const handleClickPrev = useCallback(() => {
    setIndex(prevIndex => prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1);
  }, []);

  const handleClickNext = useCallback(() => {
    setIndex(prevIndex => prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1);
  }, []);

  // Direct access - no useMemo overhead
  const currentTestimonial = testimonialData[index];

  return (
    <div className={style.container}>
      <div className={style.testimonial_container}>
        <div className={style.slider}>
          <div className={style.slider_buttons}>
            <button
              title="previous"
              onClick={handleClickPrev}
              type="button"
            >
              <ArrowLeft />
            </button>
            <button
              title="next"
              onClick={handleClickNext}
              type="button"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
        
        <div className={style.testimonial}>
          <p className={style.testimonial_content}>
            &ldquo; {currentTestimonial.testimonial} &rdquo;
          </p>
          <div className={style.testimonial_author}>
            <p className={style.testimonial_author_name}>
              __{currentTestimonial.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;