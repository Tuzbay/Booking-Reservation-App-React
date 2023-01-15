import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import "./Hotel.css";

function Hotel() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/375304866.jpg?k=a857e29d79d18953eec9607ba8d5c3f1a4d2896d57ca8f8b10ffa798ca40b754&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/375304874.jpg?k=7ef53387cf09c36d5463c131d2c6fe793daccb09c771c94873624c323d93819d&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/375304893.jpg?k=ef1a7b52815fac40bd71684c10b94d4a0d8247616b3c65e8be784048d34d998f&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/375317522.jpg?k=0492f2d36ec766bfb686962185cf6e642f292e1dc0aab0844f9b831735756b23&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/375304866.jpg?k=a857e29d79d18953eec9607ba8d5c3f1a4d2896d57ca8f8b10ffa798ca40b754&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/375304874.jpg?k=7ef53387cf09c36d5463c131d2c6fe793daccb09c771c94873624c323d93819d&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free aiport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Grand Hotel</h1>
              <p className="hotelDesc">
                Set just 1.6 km from Camps Bay Beach, The 11 Camps Bay offers
                accommodation in Cape Town with access to an outdoor swimming
                pool, a shared lounge, as well as a concierge service. This
                villa features a private pool, a garden, barbecue facilities,
                free WiFi and free private parking. The villa is fitted with 5
                bedrooms, 5 bathrooms, bed linen, towels, a flat-screen TV, a
                dining area, a fully equipped kitchen, and a terrace with sea
                views. Cycling can be enjoyed nearby. Beta Beach is 1.9 km from
                the villa, while Bakoven Beach is 1.9 km away. The nearest
                airport is Cape Town International Airport, 24 km from The 11
                Camps Bay. This is our guests' favourite part of Cape Town,
                according to independent reviews.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Situated in the best rated area in Cape Town, this property has
                an excellent location score of 10.0
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Hotel;
