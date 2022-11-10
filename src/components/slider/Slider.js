import React, { useState } from "react";
import { BtnGroup, Card } from "../All";
import { productValue } from "../Product";

const Slider = () => {
  const cardsDoc = () => {
    return document.querySelector(".cards-carousel");
  };
  const firstImg = () => {
    return document.querySelectorAll(".card-carousel-first");
  };
  let variable;
  let firstImgWidth = firstImg().clientWidth + 20;
  const [obj, setObj] = useState({
    isCards: false,
    prevPageX: variable,
    prevScrollLeft: variable,
  });
  const dragStart = (e) => {
    setObj({
      ...obj,
      isCards: true,
      prevScrollLeft: cardsDoc().scrollLeft,
      prevPageX: e.pageX,
    });
  };
  const dragStop = () => {
    setObj({ ...obj, isCards: false });
  };
  const btnPrev = () => {
    cardsDoc().scrollLeft += -firstImgWidth;
  };
  const btnNext = () => {
    cardsDoc().scrollLeft += firstImgWidth;
  };
  const cardsFun = (e) => {
    if (!obj.isCards) return;
    e.preventDefault();
    let positionDiff = e.pageX - obj.prevPageX;
    cardsDoc().scrollLeft = obj.prevScrollLeft - positionDiff;
  };

  return (
    <>
      <h1 className="margin">Slider amaliyot</h1>
      <div className="carousel-container">
        <BtnGroup btnPrev={btnPrev} btnNext={btnNext} />
        <div
          className="cards-carousel"
          onMouseMove={cardsFun}
          onMouseDown={dragStart}
          onMouseUp={dragStop}
        >
          {productValue
            .sort((a, b) => {
              return b.id - a.id;
            })
            .map((item, i) => {
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

export default Slider;
