import "./Service.css";

export const Service = ({ img, title, text }) => {
  return (
    <div className="service-item">
      <img className="service-item--img" src={img} alt="track" />
      <h5 className="service-item--title">{title}</h5>
      <p className="service-item--text">{text}</p>
    </div>
  );
};