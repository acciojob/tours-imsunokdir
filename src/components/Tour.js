import React, { useState } from "react";

const Tour = ({ item, handleRemove }) => {
  const { name, info, image, price, id } = item;
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="card">
      <h2>{name}</h2>
      <p id={`tour-item-para-${id}`}>
        {showMore ? info : `${info.substring(0, 200)}...`}
        <span
          onClick={toggleShowMore}
          style={{ color: "blue", cursor: "pointer" }}
          id={`see-more-${id}`}
        >
          {showMore ? "Show less" : "See more"}
        </span>
      </p>
      <p className="price-remove">
        <span>$ {price}</span>
        {/* <span> */}
        <button id={`delete-btn-${id}`} onClick={() => handleRemove(id)}>
          Remove
        </button>
        {/* </span> */}
      </p>
    </div>
  );
};

export default Tour;
