import "./Card.css";


function Card({ title, description, image, children }) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}

      <div className="card-content">
        <h3>{title}</h3>

        <p>{description}</p>

        {children && <div className="card-actions">{children}</div>}
      </div>
    </div>
  );
}

export default Card;
