import { useState } from "react";

export const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="relative flex flex-col justify-center items-center mt-2 pt-2">
      <div className=" z-50 mx-4 px-2">
        <button
          className="border-transparent absolute  top-1/2 left-5"
          onClick={prevSlide}
        >
          <svg
            className="w-10 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button className="absolute top-1/2 right-5" onClick={nextSlide}>
          <svg
            className="w-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      {slides.map((slide, index) => {
        return (
          <div className="mx-1 px-1">
            <div
              className={
                index === current
                  ? "transition duration-1000 opacity-100 transfom scale-105 "
                  : "transition duration-1000 ease-out opacity-0"
              }
              key={index}
            >
              {index === current && (
                <img
                  src={slide}
                  alt="travel image"
                  className="w-100 border-gray-900 lg:h-screen h-96"
                />
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};
