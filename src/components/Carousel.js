import React from "react";
import { BtnGroup, Card } from "./All";
import { productValue } from "./Product";

const Carousel = () => {
  const box = () => {
    return document.querySelector(".cards-carousel");
  };

  const btnPrev = () => {
    let width = box().clientWidth;
    box().scrollLeft = box().scrollLeft - width + 50;
    console.log(width);
  };
  const btnNext = () => {
    let width = box().clientWidth;
    box().scrollLeft = box().scrollLeft + width + 50;
    console.log(width);
  };
  return (
    <>
      <h1>Carousel amaliyot</h1>
      <div className="carousel-container">
        <BtnGroup btnPrev={btnPrev} btnNext={btnNext} />
        <div className="cards-carousel">
          {productValue.map((item, i) => {
            return (
              <Card
                key={i}
                name={item.name}
                img={item.img}
                price={item.price}
                discount={item.discount}
                desc={item.desc}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Carousel;
