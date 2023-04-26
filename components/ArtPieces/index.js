import pieces from "../../pages/index.js";
import ArtPiecePreview from "../ArtPiecePreview/index.js";

export default function ArtPieces({ pieces }) {
  console.log(pieces);
  return (
    <div>
      <h1>ArtPieces</h1>
      <div>
        <ul aria-labelledby="artpieces-list" style={{ listStyle: "none" }}>
          {/* {console.log("pieces: ", pieces)} */}
          {pieces.map((piece, index) => (
            <li aria-labelledby="listItem" key={index}>
              {console.log(piece)}
              <ArtPiecePreview
                image={piece.imageSource}
                title={piece.name}
                artist={piece.artist}
                slug={piece.slug}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

{
  /* /* import ArtPiecePreview from "./ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <div>
      <h1>Art Pieces</h1>
      <ul>
        {pieces.map((piece) => (
          <li key={piece.id}>
            <ArtPiecePreview
              image={piece.image}
              title={piece.title}
              artist={piece.artist}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
 */
}
