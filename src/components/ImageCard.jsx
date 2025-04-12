import StringUtils from "../utils/StringUtils";

export default function ImageCard({ imageUrl, title, onClick }) {
  return (
    <div className="image-card" onClick={onClick}>
      <div className="zoom-image">
        <img className="image" src={imageUrl}></img>
      </div>
      <h3 className="title">{StringUtils.convertToTitleCase(title)}</h3>
    </div>
  );
}
