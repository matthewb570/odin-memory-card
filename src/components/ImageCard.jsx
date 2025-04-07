export default function ImageCard({ imageUrl, title }) {
  return (
    <div className="image-card">
      <div className="zoom-image">
        <img class="image" src={imageUrl}></img>
      </div>
      <h3 className="title">{title}</h3>
    </div>
  );
}
