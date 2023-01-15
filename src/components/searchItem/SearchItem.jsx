import React from "react";
import "./SearchItem.css";

function SearchItem() {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/375304885.webp?k=5b0d258795fe4dbeb62e12651057324e04680528e2aba26768fb514e1cc1ab6b&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">The 11 Camps Bay</h1>
        <span className="siDistance">
          <a href="#">Camps Bay, Cape town</a> <a href="#">Show on Map</a> ·
          <span> 5.1 km from center</span>
        </span>
        <span className="siSust">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 94">
              <path d="M59.114 77.973c13.595-12.765 29.61-60.64 23.626-66.555-6.019-6.088-53.686 9.893-67.35 23.384-10.689 10.585-11.346 29.68-1.487 40.784l42.236-42.064c1.315-1.28 3.079-1.107 4.047-.138 1.004.968 1.453 2.802-.138 4.324L21.409 76.174 9.752 87.797l-.415.415c-.277.276-.45.553-.554.9-.38 1.002-.173 2.213.623 3.009 1.107 1.141 2.94 1.141 4.082 0l9.27-9.202c11.623 6.434 25.91 4.878 36.356-4.946Z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 94">
              <path d="M59.47 78.707c13.523-12.983 29.235-61.434 23.202-67.39-6.066-6.124-53.665 10.34-67.222 24.058-10.64 10.741-11.17 30.048-1.26 41.19l-8.32 8.433-.132.133c-.298.335-.43.603-.563.97-.365 1.038-.166 2.21.663 3.046a2.862 2.862 0 0 0 4.077 0l8.386-8.5c12.297 10.039 29.335 9.47 41.201-1.94h-.033Zm-37.655-1.673 38.417-39.049c1.59-1.54 1.094-3.38.1-4.35-.995-1.004-2.785-1.171-4.078.167l-38.517 39.15c-6-8.265-8.353-24.025 1.69-33.394 17.734-16.563 55.157-24.192 59.168-24.126.53 1.874-6.795 41.826-23.203 59.193-10.54 11.142-25.258 8.198-33.61 2.409h.032Z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94 94">
              <path d="M59.47 78.707c13.523-12.983 29.235-61.434 23.202-67.39-6.066-6.124-53.665 10.34-67.222 24.058-10.64 10.741-11.17 30.048-1.26 41.19l-8.32 8.433-.132.133c-.298.335-.43.603-.563.97-.365 1.038-.166 2.21.663 3.046a2.862 2.862 0 0 0 4.077 0l8.386-8.5c12.297 10.039 29.335 9.47 41.201-1.94h-.033Zm-37.655-1.673 38.417-39.049c1.59-1.54 1.094-3.38.1-4.35-.995-1.004-2.785-1.171-4.078.167l-38.517 39.15c-6-8.265-8.353-24.025 1.69-33.394 17.734-16.563 55.157-24.192 59.168-24.126.53 1.874-6.795 41.826-23.203 59.193-10.54 11.142-25.258 8.198-33.61 2.409h.032Z"></path>
            </svg>
          </div>
          <span>Travel Sustainable Level 1</span>
        </span>

        <span className="siDescription">
          Set just 1.6 km from Camps Bay Beach, The 11 Camps Bay offers
          accommodation in Cape Town with access to an outdoor swimming pool, a
          shared lounge, as well as a concierge service.
        </span>
      </div>
      <div className="siDetails">
        <div className="siDetailsAll">
          <div className="siRating">
            <div className="siRatingBot">
              <span className="siRatingTitle">Exceptional</span>
              <span className="siRatingDesc">1 review</span>
            </div>
            <button>10</button>
          </div>
          <div className="siLocation">
            <span>Location 10</span>
          </div>
          <div className="siButton">
            <button>Show prices</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
