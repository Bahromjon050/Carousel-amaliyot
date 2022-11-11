import React, { useEffect, useState } from "react";

export const Card = ({ img, name, price, discount, desc }) => {
  return (
    <div className="card-carousel card-carousel-first">
      <div className="card-header">
        <img src={img} alt="image" />
      </div>
      <div className="card-body">
        <h3>{name}</h3>
        <div className="card-price">
          <h3>{price}$</h3>
          <h3>
            <del>{discount}</del>
          </h3>
        </div>
      </div>
      <div className="card-footer">
        <h4>{desc.length > 35 ? desc.slice(0, 35) : desc}</h4>
      </div>
    </div>
  );
};

export const CarouselBody = ({ content, btnBg, btnColor }) => {
  const cardsDoc = () => {
    return document.querySelector(".cards-carousel");
  };
  const firstImg = () => {
    return document.querySelector(".card-carousel-first");
  };
  useEffect(() => {
    if (cardsDoc()?.scrollLeft === 0 || cardsDoc()?.scrollLeft === 431)
      document.querySelector(".btnPrev button").style.display = "none";
    else document.querySelector(".btnPrev button").style.display = "block";
  }, [cardsDoc()?.scrollLeft]);
  let variable;
  const [obj, setObj] = useState({
    isCards: false,
    prevPageX: variable,
    prevScrollLeft: variable,
  });
  const dragStart = (e) => {
    setObj({
      ...obj,
      isCards: true,
      prevScrollLeft: cardsDoc()?.scrollLeft,
      prevPageX: e.pageX,
    });
  };
  const dragStop = () => {
    setObj({ ...obj, isCards: false });
  };
  const cardsFun = (e) => {
    if (!obj.isCards) return;
    e.preventDefault();
    let positionDiff = e.pageX - obj.prevPageX;
    cardsDoc().scrollLeft = obj.prevScrollLeft - positionDiff;
  };
  const btnPrev = () => {
    cardsDoc().scrollLeft -= firstImg()?.clientWidth + 26;
    if (cardsDoc().scrollLeft === 0 || cardsDoc().scrollLeft === 431)
      document.querySelector(".btnPrev button").style.display = "none";
    console.log(cardsDoc().scrollLeft);
  };
  const btnNext = () => {
    cardsDoc().scrollLeft += firstImg()?.clientWidth + 26;
    if (cardsDoc().scrollLeft >= 0)
      document.querySelector(".btnPrev button").style.display = "block";
    console.log(cardsDoc().scrollLeft);
  };
  return (
    <>
      <div
        className="cards-carousel"
        onMouseMove={cardsFun}
        onMouseDown={dragStart}
        onMouseUp={dragStop}
      >
        <div className="btn-absolute">
          <div className="btnPrev" onClick={btnPrev}>
            <button style={{ background: btnBg, color: btnColor }}>
              <p>&lt;</p>
            </button>
          </div>
          <div className="btnNext" onClick={btnNext}>
            <button style={{ background: btnBg, color: btnColor }}>
              <p>&gt;</p>
            </button>
          </div>
        </div>
        {content}
      </div>
    </>
  );
};
