import React from "react";
import "./FeatureProperties.css";

function FeaturedProperties() {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/121399207.webp?k=b0e7119a0ba3354de23997d3698aac0296822fd58a590d83ddbb372f8af887a9&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">
          3 Eponques Apartments by Prague Residences
        </span>
        <span className="fpCity">Prague</span>
        <span className="fpPrice">
          Starting from <span className="fpPriceDolar">US$91</span>
        </span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Fabulous - 407 reviews</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">7Seasons Apartments Budapest</span>
        <span className="fpCity">Terezvaros, Hungary</span>
        <span className="fpPrice">
          Starting from <span className="fpPriceDolar">US$122</span>
        </span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Fabulous - 7,227 reviews</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Oriente Palace Apartments</span>
        <span className="fpCity">Centro, Spain, Madrid</span>
        <span className="fpPrice">
          Starting from <span className="fpPriceDolar">US$93</span>
        </span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Fabulous - 2,503 reviews</span>
        </div>
      </div>

      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=75ffc5f9eb3f3cc394b901714c1544757b05849dbbdf30e4fc8c6df53931c131&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">numa I Vita Apartments</span>
        <span className="fpCity">Florence, Italy</span>
        <span className="fpPrice">
          Starting from <span className="fpPriceDolar">US$97</span>
        </span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Fabulous - 849 reviews</span>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProperties;
