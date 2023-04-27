import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArtPieceDetails from "../../../components/ArtPieceDetails";

export default function ArtPieceDetailsPage({ data }) {
  const router = useRouter();
  const [artPiece, setArtPiece] = useState(null);

  useEffect(() => {
    if (router.query.slug) {
      // Find the art piece data based on the slug
      const artPieceData = data.find(
        (piece) => piece.slug === router.query.slug
      );
      setArtPiece(artPieceData);
    }
  }, [router.query.slug, data]);

  console.log("DATA in Slug: ", data);
  console.log(router.query.slug);

  const handleBackClick = () => {
    // Navigate back to the list view
    router.push("/");
  };

  return artPiece ? (
    <ArtPieceDetails
      image={artPiece.imageSource}
      title={artPiece.name}
      artist={artPiece.artist}
      year={artPiece.year}
      genre={artPiece.genre}
      onBackClick={handleBackClick}
    />
  ) : (
    <div>Loading...</div>
  );
}
