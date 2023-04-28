import pieces from "../../pages/index.js";
import ArtPiecePreview from "../ArtPiecePreview/index.js";

export default function ArtPieces({ pieces, handleLike }) {
  console.log(pieces);
  return (
    <div>
      <h1>ArtPieces</h1>      
        <ul aria-labelledby="artpieces-list" style={{ listStyle: "none" }}>
          {console.log("pieces: ", pieces)}
          {pieces.map((piece, index) => (
            <li aria-labelledby="listItem" key={index}>
              {console.log(piece)}
              <ArtPiecePreview
                image={piece.imageSource}
                title={piece.name}
                artist={piece.artist}
                slug={piece.slug}
                isFavorite={piece.isFavorite}
                handleLike={handleLike}
              />
            </li>
          ))}
        </ul>      
    </div>
  );
}

