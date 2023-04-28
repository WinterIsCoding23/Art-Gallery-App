import ArtPieceDetails from "../components/ArtPieceDetails";

export default function ArtPiecePage({ artPiece }) {
  console.log("artpiece color", artPiece);
  return (
    <div>
      <ArtPieceDetails
        image={artPiece.imageSource}
        title={artPiece.name}
        artist={artPiece.artist}
        year={artPiece.year}
        genre={artPiece.genre}
        colors={artPiece.colors}
      />
    </div>
  );
}
