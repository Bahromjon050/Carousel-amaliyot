import React from "react";

export const Card = ({ img, name, price, discount, desc }) => {
  return (
    <div className="card-carousel">
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

export const BtnGroup = ({ btnPrev, btnNext }) => {
  return (
    <>
      <div className="btn-absolute">
        <div className="btnPrev" onClick={btnPrev}>
          <button>
            <p>&lt;</p>
          </button>
        </div>
        <div className="btnNext" onClick={btnNext}>
          <button>
            <p>&gt;</p>
          </button>
        </div>
      </div>
    </>
  );
};
