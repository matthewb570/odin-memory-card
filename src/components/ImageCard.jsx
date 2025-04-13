import StringUtils from "../utils/StringUtils";

export default function ImageCard({ imageUrl, title, onClick, isClicked }) {
  let isClickedClassName = "";
  if (isClicked !== undefined && isClicked !== null) {
    isClickedClassName = isClicked ? "clicked" : "not-clicked";
  }

  return (
    <div className={`image-card ${isClickedClassName}`} onClick={onClick}>
      <div className="zoom-image">
        <img className="image" src={imageUrl} alt={title}></img>
      </div>
      <h2 className="title">{StringUtils.convertToTitleCase(title)}</h2>
    </div>
  );
}
