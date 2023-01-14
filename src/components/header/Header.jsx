import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">Find your next stay</h1>
        <p className="headerDesc">
          Search low prices on hotels, homes and much more...
        </p>
      </div>
    </div>
  );
}

export default Header;
