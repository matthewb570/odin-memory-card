import StringUtils from "../utils/StringUtils";

export default function ImageCard({ imageUrl, title }) {
  return (
    <div className="image-card">
      <div className="zoom-image">
        <img className="image" src={imageUrl}></img>
      </div>
      <h3 className="title">{StringUtils.convertToTitleCase(title)}</h3>
    </div>
  );
}
