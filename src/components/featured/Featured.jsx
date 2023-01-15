import React from "react";
import "./Featured.css";

function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="shadow"></div>
        <img
          className="featuredImg"
          src="https://cf.bstatic.com/xdata/images/city/540x270/619923.webp?k=4fb13225390240a51ee5aa1d76318d03dc0de8a046ddc06e4598f17b287bdcc9&o="
          alt=""
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
        </div>
      </div>

      <div className="featuredItem">
        <div className="shadow"></div>
        <img
          className="featuredImg "
          src="https://cf.bstatic.com/xdata/images/city/540x270/613087.webp?k=68ce65e52a527819c35c13c3d0e8a925263a71aab15a89577b4083c021855481&o="
          alt=""
        />
        <div className="featuredTitles">
          <h1>Paris</h1>
        </div>
      </div>

      <div className="featuredItem">
        <div className="shadow"></div>
        <img
          className="featuredImg"
          src="https://cf.bstatic.com/xdata/images/city/540x270/976538.webp?k=19a2487e30f31349e54aaf32d509121d81e2e31eee5b820c7c98576a4426d997&o="
          alt=""
        />
        <div className="featuredTitles">
          <h1>Amsterdam</h1>
        </div>
      </div>

      <div className="featuredItem">
        <div className="shadow"></div>
        <img
          className="featuredImg"
          src="https://cf.bstatic.com/xdata/images/city/540x270/613094.webp?k=f751e035ae2c0ac97263ed7d150bae607ffa17a88c55e81cec907941d6bb078b&o="
          alt=""
        />
        <div className="featuredTitles">
          <h1>London</h1>
        </div>
      </div>
    </div>
  );
}

export default Featured;
