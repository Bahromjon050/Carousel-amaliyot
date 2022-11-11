import React from "react";
import { Card, CarouselBody } from "../All";
import { productValue } from "../Product";

const Slider = () => {
  const card = () => {
    return productValue
      .sort((a, b) => {
        return b.id - a.id;
      })
      .map((item, i) => (
        <Card
          key={i}
          name={item.name}
          img={item.img}
          price={item.price}
          discount={item.discount}
          desc={item.desc}
        />
      ));
  };
  return (
    <>
      <h1 className="margin">Slider amaliyot</h1>
      <div className="carousel-container">
        <CarouselBody
          content={card()}
          // btnBg={"red"}
          //  btnColor={"#fff"}
        />
      </div>
    </>
  );
};

export default Slider;
