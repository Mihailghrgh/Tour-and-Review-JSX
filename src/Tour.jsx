import { useState } from "react";

const Tour = ({ id, image, name, price, info, removeTour }) => {
  const [isInterested, setInterested] = useState(false);

  const openDescription = () => {
    setInterested(!isInterested);
  };
  return (
    <article className="single-tour">
      <img className="img" src={image} alt={name} />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {isInterested ? info : `${info.substring(0, 200)}...   `}
          <button type="button" className="info-btn" onClick={openDescription}>
            {isInterested ? "Show Less" : "Read More"}
          </button>
        </p>
        <button
          type="button"
          className="btn btn-block delete-btn"
          onClick={() => removeTour(id)}
        >
          Delete
        </button>
      </div>
    </article>
  );
};
export default Tour;
