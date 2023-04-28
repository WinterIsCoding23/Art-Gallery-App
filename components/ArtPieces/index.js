import pieces from "../../pages/index.js";
import ArtPiecePreview from "../ArtPiecePreview/index.js";

export default function ArtPieces({ pieces, handleLike, favoriteSlugs }) {
  return (
    <div>
      <h1>ArtPieces</h1>      
        <ul aria-labelledby="artpieces-list" style={{ listStyle: "none" }}>
          {pieces.map((piece, index) => (
            <li aria-labelledby="listItem" key={index}>
              <ArtPiecePreview
                image={piece.imageSource}
                title={piece.name}
                artist={piece.artist}
                slug={piece.slug}
                isFavorite={favoriteSlugs.includes(piece.slug)}
                handleLike={handleLike}
              />
            </li>
          ))}
        </ul>      
    </div>
  );
}

